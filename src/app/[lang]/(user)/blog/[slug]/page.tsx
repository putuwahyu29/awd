import Image from "next/image";
import SharePost from "@/app/components/Blog/FooterPost";
import RelatedPost from "@/app/components/Blog/RelatedPost";
import { groq } from "next-sanity";
import { getClient } from "lib/client";
import type { Post } from "common-types";
import urlFor from "lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichText } from "@/app/components/Common/RichText";
import BlogCategoryList from "@/app/components/Blog/BlogCategoryList";
import BlogSearch from "@/app/components/Blog/BlogSearch";
import { Metadata } from "next";
import PreviewNotif from "@/app/components/Common/PreviewNotif";
import { getDictionary } from "@/app/[lang]/dictionaries";

export const revalidate = 60;
export const fetchCache = "force-no-store";

export const metadata: Metadata = {
  title: "Awd - Detail Artikel",
  description: "Awd",
};

type Props = {
  params: {
    slug: string;
    lang: string;
  };
};

async function SingleBlogPage({ params: { slug, lang } }: Props) {
  const dict = await getDictionary(lang);
  const post: Post = await getClient().fetch(
    groq`*[_type == 'post' && slug.current == $slug && language == $lang][0]{
      ...,
      author->,
      categories[]->,
    }
  `,
    { slug, lang }
  );

  const categories = await getClient().fetch(
    groq`*[_type == 'category'] {
    ...,
    slug,
  } | order(_updatedAt desc)`
  );

  const tags = post.categories;

  const tagsList = tags.map((tag) => tag.slug.current).join(",");

  const posts = await getClient().fetch(
    groq`*[_type == 'post'&& (count((categories[]->slug.current)[@ in [$tagsList]]) > 0) && language == $lang] {
      ...,
      author->,
      categories[]->,
    } | order(_updatedAt desc)`,
    { tagsList, lang }
  );
  return (
    <>
      <PreviewNotif />
      <section className="pt-35 lg:pt-45 xl:pt-50 pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-12.5">
            <div className="lg:w-2/3">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={urlFor(post.mainImage).url()}
                      alt={post.author.name}
                      fill
                      className="object-cover object-center rounded-md"
                    />
                  </div>
                </div>

                <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white mt-11 mb-5">
                  {post.title}
                </h2>

                <ul className="flex flex-wrap gap-5 2xl:gap-7.5 mb-9">
                  <li>
                    <span className="text-black dark:text-white">
                      {dict.oneBlog.author}: {post.author.name}
                    </span>{" "}
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      {dict.oneBlog.updatedAt}:{" "}
                      {new Date(post._updatedAt).toLocaleDateString(
                        dict.dateLocale,
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </span>{" "}
                  </li>
                </ul>

                <div className="blog-details">
                  <PortableText value={post.body} components={RichText} />
                </div>

                <SharePost tags={tags} slug={slug} dict={dict} />
              </div>
            </div>
            <div className="md:w-1/2 lg:w-[32%]">
              <BlogSearch />
              <BlogCategoryList categories={categories} dict={dict} />
              <RelatedPost posts={posts} dict={dict} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleBlogPage;
