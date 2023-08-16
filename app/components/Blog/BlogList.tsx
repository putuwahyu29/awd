"use client";
import Image from "next/image";
import urlFor from "lib/urlFor";
import type { Post } from "common-types";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpenIcon,
  UserCircleIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  return (
    <div>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        {posts.length == 0 ? (
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
              <p className="text-center">Tidak Ada Artikel</p>
            </motion.div>
          </h3>
        ) : (
          <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-10">
              {posts.map((post) => (
                <div key={post._id}>
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
                      href={`/blog/${post.slug.current}`}
                      className="block relative aspect-[368/239]"
                    >
                      <Image
                        src={urlFor(post.mainImage).url()}
                        alt={post.author.name}
                        fill
                      />
                    </Link>

                    <div className="px-4">
                      {post.categories.slice(0, 2).map((category) => (
                        <div key={category._id} className="inline-flex">
                          <Link href={`/category/${category.slug.current}`}>
                            <span className="bg-primary text-white text-metatitle inline-flex rounded-full py-0.5 px-4 mr-4 mt-3">
                              #{category.title}
                            </span>
                          </Link>
                        </div>
                      ))}
                      <h4 className="font-medium text-lg xl:text-itemtitle2 text-black hover:text-primary dark:hover:text-primary dark:text-white my-3">
                        <Link href={`/blog/${post.slug.current}`}>
                          {`${post.title.slice(0, 40)}...`}
                        </Link>
                      </h4>
                      <div className="flex justify-between">
                        <div className="inline-flex">
                          <UserCircleIcon className="h-6 w-6 mr-2" />
                          {post.author.name}
                        </div>
                        <div className="inline-flex">
                          <CalendarDaysIcon className="h-6 w-6 mr-2" />
                          {new Date(post._createdAt).toLocaleDateString(
                            "id-ID",
                            {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }
                          )}
                        </div>
                      </div>
                      <p className="mt-2">
                        {post.description
                          ? `${post.description.slice(0, 100)}...`
                          : ""}
                      </p>

                      <div className="mt-5 flex justify-between">
                        <div className="flex items-center justify-between p-5 bg-primary text-white py-2 px-4 rounded hover:bg-primaryho ease-in-out duration-300">
                          <Link
                            href={`/blog/${post.slug.current}`}
                            className="flex items-center"
                          >
                            <BookOpenIcon className="h-6 w-6 mr-2" />
                            Baca Selengkapnya
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
export default BlogList;
