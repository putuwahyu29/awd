import BlogList from "@/app/components/Blog/BlogList";
import { groq } from "next-sanity";
import { getClient } from "lib/client";
import SectionHeader from "@/app/components/Common/SectionHeader";
import { Metadata } from "next";
import PreviewNotif from "@/app/components/Common/PreviewNotif";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Awd - Hasil Filter Artikel",
  description: "Awd",
};

type Props = {
  params: {
    slug: string;
  };
};

const ListPostByCategory = async ({ params: { slug } }: Props) => {
  const posts = await getClient().fetch(
    groq`*[_type == 'post' && (count((categories[]->slug.current)[@ in [$slug]]) > 0)] {
        ...,
        author->,
        categories[]->,
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
              title: `ARTIKEL`,
              subtitle: `Filter Artikel`,
              description: `Kategori: ${slug}`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>
      <BlogList posts={posts} />
    </>
  );
};

export default ListPostByCategory;
