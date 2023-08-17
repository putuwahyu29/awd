"use client";
import Image from "next/image";
import urlFor from "lib/urlFor";
import type { Project } from "common-types";
import Link from "next/link";
import { motion } from "framer-motion";
import { EyeIcon, CalendarDaysIcon } from "@heroicons/react/24/solid";

type Props = {
  projects: Project[];
  dict: any;
};

function ProjectList({ projects, dict }: Props) {
  return (
    <div>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        {projects.length == 0 ? (
          <h3 className="font-bold text-2xl  flex-inline text-black dark:text-white mb-4">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-center">{dict.allProject.noShow}</p>
            </motion.div>
          </h3>
        ) : (
          <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-10">
              {projects.map((project) => (
                <div key={project._id}>
                  <motion.div
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: -20,
                      },

                      visible: {
                        opacity: 1,
                        y: 0,
                      },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="animate_top bg-white dark:bg-blacksection rounded-lg shadow-solid-8 p-4 pb-9"
                  >
                    <Link
                      href={`/${dict.lang}/project/${project.slug.current}`}
                      className="block relative aspect-[368/239]"
                    >
                      <Image
                        src={urlFor(project.mainImage).url()}
                        alt=""
                        fill
                      />
                    </Link>

                    <div className="px-4">
                      {project.technologies.slice(0, 2).map((technology) => (
                        <div key={technology._id} className="inline-flex">
                          <Link
                            href={`/${dict.lang}/technology/${technology.slug.current}`}
                          >
                            <span className="bg-primary text-white text-metatitle inline-flex rounded-full py-0.5 px-4 mr-4 mt-3">
                              #{technology.title}
                            </span>
                          </Link>
                        </div>
                      ))}
                      <h4 className="font-medium text-lg xl:text-itemtitle2 text-black hover:text-primary dark:hover:text-primary dark:text-white my-3">
                        <Link
                          href={`/${dict.lang}/project/${project.slug.current}`}
                        >
                          {`${project.title.slice(0, 40)}`}
                        </Link>
                      </h4>

                      <p className="inline-flex">
                        <CalendarDaysIcon className="h-6 w-6 mr-2" />
                        {new Date(project._createdAt).toLocaleDateString(
                          dict.dateLocale,
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }
                        )}
                      </p>

                      <p>
                        {project.description
                          ? `${project.description.slice(0, 100)}...`
                          : ""}
                      </p>

                      <div className="mt-5 flex justify-between">
                        <div className="flex items-center justify-between p-5 bg-primary text-white py-2 px-4 rounded hover:bg-primaryho ease-in-out duration-300">
                          <Link
                            href={`/project/${project.slug.current}`}
                            className="flex items-center"
                          >
                            <EyeIcon className="h-6 w-6 mr-2" />
                            {dict.allProject.button}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </div>
  );
}
export default ProjectList;
