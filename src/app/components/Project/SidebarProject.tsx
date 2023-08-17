import { Project } from "common-types";
import React from "react";
import Image from "next/image";
import urlFor from "lib/urlFor";
import Link from "next/link";
import {
  ArrowTopRightOnSquareIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/solid";

type Props = {
  project: Project;
  dict: any;
};

function SidebarProject({ project, dict }: Props) {
  return (
    <>
      <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-6 mb-10">
        <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
          <Image
            src={urlFor(project.mainImage).url()}
            alt=""
            fill
            className="object-cover object-center rounded-md"
          />
        </div>
        {project.linkPreview ? (
          <>
            <Link
              href={project.linkPreview}
              target="_blank"
              className="flex justify-center p-5 bg-primary text-white py-2 px-4 rounded hover:bg-primaryho ease-in-out duration-300 mt-5"
            >
              <ArrowTopRightOnSquareIcon className="h-6 w-6 mr-2" />
              {dict.oneProject.buttonPreview}
            </Link>
          </>
        ) : (
          ""
        )}
        <div className="bg-gray-100">
          <div className="max-w-md mx-auto mt-8">
            <table className="min-w-full bg-transparant border">
              <tbody className="divide-y divide-gray-200 text-black dark:text-white">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap ">
                    <div className="flex justify-between">
                      <div>{dict.oneProject.technology}</div>
                      <div>
                        {project.technologies.slice(0, 2).map((technology) => (
                          <div key={technology._id} className="inline-flex">
                            {technology.title}
                            {", "}
                          </div>
                        ))}
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap ">
                    <div className="flex justify-between">
                      <div>{dict.oneProject.type}</div>
                      <div>{project.type}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap ">
                    <div className="flex justify-between">
                      <div>{dict.oneProject.contributor}</div>
                      <div>{project.author.name}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap ">
                    <div className="flex justify-between">
                      <div>{dict.oneProject.updatedAt}</div>
                      <div>
                        {new Date(project._updatedAt).toLocaleDateString(
                          "id-ID",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {project.linkSource ? (
          <>
            <Link
              href={project.linkSource}
              target="_blank"
              className="flex justify-center p-5 bg-primary text-white py-2 px-4 rounded hover:bg-primaryho ease-in-out duration-300 mt-5"
            >
              <ArrowDownTrayIcon className="h-6 w-6 mr-2" />
              {dict.oneProject.buttonCode}
            </Link>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default SidebarProject;
