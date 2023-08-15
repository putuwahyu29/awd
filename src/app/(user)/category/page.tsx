import SectionHeader from "@/app/components/Common/SectionHeader";
import type { Category } from "common-types";
import { getClient } from "lib/client";
import { Metadata } from "next";
import { groq } from "next-sanity";
import CategoryList from "@/app/components/Blog/CategoryList";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Awd - Semua Kategori",
  description: "Awd",
};

const CategoryPage = async () => {
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
                title: `KATEGORI`,
                subtitle: `Semua kategori`,
                description: `Semua kategori yang ada`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>
        <CategoryList categories={categories} />
      </section>
    </>
  );
};

export default CategoryPage;
