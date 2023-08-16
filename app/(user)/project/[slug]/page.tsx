import ShareProject from "@/app/components/Project/FooterProject";
import RelatedProject from "@/app/components/Project/RelatedProject";
import { groq } from "next-sanity";
import { getClient } from "lib/client";
import type { Project } from "common-types";
import { PortableText } from "@portabletext/react";
import { RichText } from "@/app/components/Common/RichText";
import { Metadata } from "next";
import PreviewNotif from "@/app/components/Common/PreviewNotif";
import SidebarProject from "@/app/components/Project/SidebarProject";

export const revalidate = 60;
export const fetchCache = "force-no-store";

export const metadata: Metadata = {
  title: "Awd - Detail Proyek",
  description: "Awd",
};

type Props = {
  params: {
    slug: string;
  };
};

async function SingleBlogPage({ params: { slug } }: Props) {
  const project: Project = await getClient().fetch(
    groq`*[_type == 'project' && slug.current == $slug][0]{
      ...,
      author->,
      technologies[]->
    }
  `,
    { slug }
  );

  const tags = project.technologies;

  const tagsList = tags.map((tag) => tag.slug.current).join(",");

  const projects = await getClient().fetch(
    groq`*[_type == 'project'&& (count((technologies[]->slug.current)[@ in [$tagsList]]) > 0)] {
    ...,
    technologies[]->
  } | order(_updatedAt desc)`,
    { tagsList }
  );

  return (
    <>
      <PreviewNotif />
      <title>{`Proyek Detail - Awd`}</title>
      <section className="pt-35 lg:pt-45 xl:pt-50 pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-12.5">
            <div className="lg:w-2/3">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
                <h1 className="font-semibold text-4xl 2xl:text-sectiontitle2 text-black dark:text-white mb-5">
                  {project.title}
                </h1>

                <div className="blog-details">
                  <PortableText value={project.body} components={RichText} />
                </div>

                <ShareProject tags={tags} slug={slug} />
              </div>
            </div>
            <div className="md:w-1/2 lg:w-[32%]">
              <SidebarProject project={project} />
              <RelatedProject projects={projects} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleBlogPage;
