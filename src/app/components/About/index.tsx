"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {
  dict: any;
};

const About = ({ dict }: Props) => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section
        id="tentang"
        className="bg-alabaster dark:bg-black border border-x-0 border-y-stroke dark:border-y-strokedark py-20 overflow-hidden"
      >
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-black dark:text-white mb-6"
            >
              <p>{dict.about.subtitle}</p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <h2 className="relative font-bold text-black dark:text-white text-3xl xl:text-hero mb-6">
                {dict.about.title}
              </h2>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}
    </>
  );
};

export default About;
