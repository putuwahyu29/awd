import SectionHeader from "@/app/components/Common/SectionHeader";
import { getClient } from "lib/client";
import { Metadata } from "next";
import { groq } from "next-sanity";
import CategoryList from "@/app/components/Blog/CategoryList";
import { getDictionary } from "@/app/[lang]/dictionaries";

export const revalidate = 60;
export const fetchCache = "force-no-store";

export const metadata: Metadata = {
  title: "Awd - Semua Kategori",
  description: "Awd",
};

type Props = {
  params: {
    lang: string;
  };
};

const CategoryPage = async ({ params: { lang } }: Props) => {
  const dict = await getDictionary(lang);
  const categories = await getClient().fetch(
    groq`*[_type == 'category'] {
        ...,
      } | order(_updatedAt desc)`
  );
  return (
    <>
      <section id="kategori">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 pt-25">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top text-center mx-auto">
            <SectionHeader
              headerInfo={{
                title: `${dict.allCategory.title}`,
                subtitle: `${dict.allCategory.subtitle}`,
                description: `${dict.allCategory.description}`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>
        <CategoryList categories={categories} dict={dict} />
      </section>
    </>
  );
};

export default CategoryPage;
