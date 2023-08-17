import { Metadata } from "next";
import ProjectList from "@/app/components/Project/ProjectList";
import { groq } from "next-sanity";
import { getClient } from "lib/client";
import SectionHeader from "@/app/components/Common/SectionHeader";
import PreviewNotif from "@/app/components/Common/PreviewNotif";
import { getDictionary } from "@/app/[lang]/dictionaries";
export const revalidate = 60;
export const fetchCache = "force-no-store";

export const metadata: Metadata = {
  title: "Awd - Semua Proyek",
  description: "Awd",
};

type Props = {
  params: {
    lang: string;
  };
};

const ProjectPage = async ({ params: { lang } }: Props) => {
  const dict = await getDictionary(lang);
  const projects = await getClient().fetch(
    groq`*[_type == 'project' && language == $lang] {
    ...,
    linkPreview,
    linkSource,
    technologies[]->,
    language,
  } | order(_updatedAt desc)`,
    { lang }
  );

  return (
    <>
      <PreviewNotif />
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 pt-35">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top text-center mx-auto">
          <SectionHeader
            headerInfo={{
              title: `${dict.allProject.title}`,
              subtitle: `${dict.allProject.subtitle}`,
              description: `${dict.allProject.description}`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>
      <ProjectList projects={projects} dict={dict} />
    </>
  );
};

export default ProjectPage;
