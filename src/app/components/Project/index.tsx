"use client";
import React from "react";
import SectionHeader from "../Common/SectionHeader";
import urlFor from "lib/urlFor";
import type { Project } from "common-types";
import Link from "next/link";
import { motion } from "framer-motion";
// import { EyeIcon, CalendarDaysIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import ProjectBanner from "@/app/components/Project/ProjectBanner";

type Props = {
  projects: Project[];
  dict: any;
};

function Project({ projects, dict }: Props) {
  return (
    <section id="proyek" className="pt-20 lg:pt-25 xl:pt-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top text-center mx-auto">
          <SectionHeader
            headerInfo={{
              title: `${dict.project.title}`,
              subtitle: `${dict.project.subtitle}`,
              description: `${dict.project.description}`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-10">
          {projects.slice(0, 3).map((project) => (
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
                <div className="relative">
                  <Link
                    href={`/${dict.lang}/project/${project.slug.current}`}
                    className="block relative aspect-[368/239]"
                  >
                    <Image src={urlFor(project.mainImage).url()} alt="" fill />
                  </Link>
                  <ul className="absolute left-2 top-3 flex flex-wrap items-center">
                    {project.technologies.slice(0, 2).map((technology) => (
                      <div key={technology._id} className="inline-flex">
                        <Link
                          href={`/${dict.lang}/technology/${technology.slug.current}`}
                        >
                          <span className="bg-primary text-white text-metatitle inline-flex rounded-full py-0.5 px-4 mr-2 mt-1">
                            {technology.title}
                          </span>
                        </Link>
                      </div>
                    ))}
                  </ul>
                </div>

                <div className="px-4">
                  <h4 className="font-medium text-lg xl:text-itemtitle2 text-black hover:text-primary dark:hover:text-primary dark:text-white my-3">
                    <Link
                      href={`/${dict.lang}/project/${project.slug.current}`}
                    >
                      {`${project.title.slice(0, 40)}`}
                    </Link>
                  </h4>

                  <p>
                    {project.description
                      ? `${project.description.slice(0, 100)}...`
                      : ""}
                  </p>

                  <div className="mt-5 flex justify-between">
                    <div className="flex items-center justify-between p-5 bg-primary text-white py-2 px-4 rounded-lg hover:bg-primaryho ease-in-out duration-300">
                      <Link
                        href={`/${dict.lang}/project/${project.slug.current}`}
                        className="flex items-center"
                      >
                        {dict.project.button}
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <ProjectBanner dict={dict} />
    </section>
  );
}

export default Project;
