import ProjectList from "@/app/components/Project/ProjectList";
import { groq } from "next-sanity";
import { getClient } from "lib/client";
import SectionHeader from "@/app/components/Common/SectionHeader";
import { Metadata } from "next";
import PreviewNotif from "@/app/components/Common/PreviewNotif";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Awd - Hasil Filter Teknologi",
  description: "Awd",
};

type Props = {
  params: {
    slug: string;
  };
};

const ListProjectByTechnology = async ({ params: { slug } }: Props) => {
  const projects = await getClient().fetch(
    groq`*[_type == 'project' && (count((technologies[]->slug.current)[@ in [$slug]]) > 0)] {
        ...,
        technologies[]->,
      } | order(_updatedAt desc)`,
    { slug }
  );
  return (
    <>
      <PreviewNotif />
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 pt-35">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top text-center mx-auto">
          <SectionHeader
            headerInfo={{
              title: `TEKNOLOGI`,
              subtitle: `Filter Teknologi`,
              description: `Teknologi: ${slug}`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>
      <ProjectList projects={projects} />
    </>
  );
};

export default ListProjectByTechnology;
