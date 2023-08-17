import BlogList from "@/app/components/Blog/BlogList";
import { groq } from "next-sanity";
import { getClient } from "lib/client";
import SectionHeader from "@/app/components/Common/SectionHeader";
import { Metadata } from "next";
import PreviewNotif from "@/app/components/Common/PreviewNotif";
import { getDictionary } from "@/app/[lang]/dictionaries";

export const revalidate = 60;
export const fetchCache = "force-no-store";

export const metadata: Metadata = {
  title: "Awd - Hasil Filter Artikel",
  description: "Awd",
};

type Props = {
  params: {
    slug: string;
    lang: string;
  };
};

const ListPostByCategory = async ({ params: { slug, lang } }: Props) => {
  const dict = await getDictionary(lang);

  const posts = await getClient().fetch(
    groq`*[_type == 'post' && (count((categories[]->slug.current)[@ in [$slug]]) > 0) && language == $lang] {
        ...,
        author->,
        categories[]->,
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
              title: `${dict.filterBlog.title}`,
              subtitle: `${dict.filterBlog.subtitle}`,
              description: `${dict.filterBlog.description} : ${slug}`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>
      <BlogList posts={posts} dict={dict} />
    </>
  );
};

export default ListPostByCategory;
