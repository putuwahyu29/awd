import { Category } from "common-types";
import React from "react";
import Link from "next/link";

type Props = {
  categories: Category[];
};

function BlogCategoryList({ categories }: Props) {
  return (
    <>
      <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-9 mb-10">
        <h4 className="font-semibold text-2xl text-black dark:text-white mb-7.5">
          <Link href="/category">Semua Kategori</Link>
        </h4>
        <ul>
          {categories.map((category) => (
            <div key={category._id}>
              <li className="last:mb-0 mb-3 transition-all duration-300 hover:text-primary">
                <Link href={`/category/${category.slug.current}`}>
                  {category.title}
                </Link>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default BlogCategoryList;
