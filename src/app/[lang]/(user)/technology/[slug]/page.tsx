import ProjectList from "@/app/components/Project/ProjectList";
import { groq } from "next-sanity";
import { getClient } from "lib/client";
import SectionHeader from "@/app/components/Common/SectionHeader";
import { Metadata } from "next";
import PreviewNotif from "@/app/components/Common/PreviewNotif";
import { getDictionary } from "@/app/[lang]/dictionaries";

export const revalidate = 60;
export const fetchCache = "force-no-store";

export const metadata: Metadata = {
  title: "Awd - Hasil Filter Teknologi",
  description: "Awd",
};

type Props = {
  params: {
    slug: string;
    lang: string;
  };
};

const ListProjectByTechnology = async ({ params: { slug, lang } }: Props) => {
  const dict = await getDictionary(lang);
  const projects = await getClient().fetch(
    groq`*[_type == 'project' && (count((technologies[]->slug.current)[@ in [$slug]]) > 0) && language == $lang] {
        ...,
        technologies[]->,
      } | order(_updatedAt desc)`,
    { slug, lang }
  );
  return (
    <>
      <PreviewNotif />
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 pt-35">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top text-center mx-auto">
          <SectionHeader
            headerInfo={{
              title: `${dict.filterProject.title}`,
              subtitle: `${dict.filterProject.subtitle}`,
              description: `${dict.filterProject.description} : ${slug}`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>
      <ProjectList projects={projects} dict={dict} />
    </>
  );
};

export default ListProjectByTechnology;
