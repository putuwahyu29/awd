import BlogList from "@/app/components/Blog/BlogList";
import { groq } from "next-sanity";
import { getClient } from "lib/client";
import SectionHeader from "@/app/components/Common/SectionHeader";
import { Metadata } from "next";
import PreviewNotif from "@/app/components/Common/PreviewNotif";

export const fetchCache = 'force-no-store';
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Awd - Detail Artikel",
  description: "Awd",
};

const BlogPage = async () => {
  const posts = await getClient().fetch(
    groq`*[_type == 'post'] {
    ...,
    author->,
    categories[]->
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
              title: `ARTIKEL`,
              subtitle: `Semua Artikel`,
              description: `Terdapat berbagai macam artikel yang dapat dibaca, mulai dari artikel tentang teknologi, tutorial, dan lain-lain.`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>
      <BlogList posts={posts} />
    </>
  );
};

export default BlogPage;
