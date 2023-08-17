"use client";
import type { Category } from "common-types";
import Link from "next/link";

type Props = {
  categories: Category[];
  dict: any;
};

function CategoryList({ categories, dict }: Props) {
  return (
    <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 pt-35">
      {/* <!-- Section Title Start --> */}
      <div className="animate_top text-center mx-auto">
        <div className="my-5">
          {categories.map((category: Category) => (
            <div key={category._id} className="inline-flex mx-2">
              <Link
                href={`/${dict.lang}/category/${category.slug.current}`}
                className="bg-zumthor dark:bg-blacksection dark:border dark:border-strokedark rounded-full py-1.5 px-4.5 mb-4"
              >
                <h4 className="font-medium text-sectiontitle text-black dark:text-white">
                  {category.title}
                </h4>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* <!-- Section Title End --> */}
    </div>
  );
}
export default CategoryList;
