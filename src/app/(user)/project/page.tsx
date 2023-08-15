import { Metadata } from "next";
import ProjectList from "@/app/components/Project/ProjectList";
import { groq } from "next-sanity";
import { getClient } from "lib/client";
import SectionHeader from "@/app/components/Common/SectionHeader";
import PreviewNotif from "@/app/components/Common/PreviewNotif";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Awd - Semua Proyek",
  description: "Awd",
};

const ProjectPage = async () => {
  const projects = await getClient().fetch(
    groq`*[_type == 'project'] {
    ...,
    linkPreview,
    linkSource,
    technologies[]->
  } | order(_updatedAt desc)`
  );

  return (
    <>
      <PreviewNotif />
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 pt-35">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top text-center mx-auto">
          <SectionHeader
            headerInfo={{
              title: `PROYEK`,
              subtitle: `Semua Proyek`,
              description: `Berikut merupakan proyek proyek website yang pernah saya buat dengan berbagai bahasa pemograman seperti R, Java dan PHP. Kemudian dengan framework Codeigniter, Laravel, Springboot, R Shiny dan lainnya`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>
      <ProjectList projects={projects} />
    </>
  );
};

export default ProjectPage;
