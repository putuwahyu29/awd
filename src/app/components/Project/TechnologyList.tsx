"use client";
import type { Technology } from "common-types";
import Link from "next/link";

type Props = {
  technologies: Technology[];
  dict: any;
};

function TechnologyList({ technologies, dict }: Props) {
  return (
    <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 pt-35">
      {/* <!-- Section Title Start --> */}
      <div className="animate_top text-center mx-auto">
        <div className="my-5">
          {technologies.map((technology: Technology) => (
            <div key={technology._id} className="inline-flex mx-2">
              <Link
                href={`/${dict.lang}/technology/${technology.slug.current}`}
                className="bg-zumthor dark:bg-blacksection dark:border dark:border-strokedark rounded-full py-1.5 px-4.5 mb-4"
              >
                <h4 className="font-medium text-sectiontitle text-black dark:text-white">
                  {technology.title}
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
export default TechnologyList;
