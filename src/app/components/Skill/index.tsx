"use client";
import React from "react";
import SectionHeader from "../Common/SectionHeader";
import Image from "next/image";
import { motion } from "framer-motion";

const Skill = () => {
  return (
    <>
      <section id="kemampuan" className="py-20 xl:py-25  overflow-hidden">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: `KEMAMPUAN`,
              subtitle: `Bahasa Yang Dikuasai.`,
              description: `Bahasa markup, pemograman yang pernah saya pelajari dan sudah menguasi yaitu Python yang biasanya saya menggunakan untuk pengolahan data. Kemudian HTML dan CSS untuk membangun kerangka dasar website. Selanjutnta Javascript yang bisa digunakan sebagai frontend maupun fullstack dengan Node.JS. Selain itu Java digunakan untuk membuat aplikasi desktop, website maupun aplikasi android. Selain Python, saya juga menggunakan R untuk pengolahan data.`,
            }}
          />

          {/* <!-- Section Title End --> */}
        </div>

        <div className="mx-auto max-w-c-1154 px-4 md:px-8 xl:px-0 relative z-50 mt-15 xl:mt-20 pattern-dots pattern-blue-500 pattern-bg-white pattern-size-4 pattern-opacity-10">
          <div className="absolute -top-3/4 -z-1 w-full h-full">
            <Image
              width={1200}
              height={400}
              sizes="(max-width: 768px) 100vw"
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              style={{ position: "static" }}
            />
            <Image
              fill
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
            />
          </div>
          <div className="flex flex-wrap gap-y-10 justify-around">
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] shadow-solid-7 bg-white dark:bg-btndark p-4.5">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/python.svg"
                  alt="Brand"
                />
              </div>
            </motion.div>

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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            ></motion.div>

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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] shadow-solid-7 bg-white dark:bg-btndark p-4.5">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/php.svg"
                  alt="Brand"
                />
              </div>
            </motion.div>

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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="bg-[#FFDB26] rounded-full w-[11px] h-[11px]"></div>
            </motion.div>

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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] shadow-solid-7 bg-white dark:bg-btndark p-4.5">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/dart.svg"
                  alt="Brand"
                />
              </div>
            </motion.div>

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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            ></motion.div>

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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="bg-[#62E888] rounded-full w-[15px] h-[15px]"></div>
            </motion.div>

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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] shadow-solid-7 bg-white dark:bg-btndark p-4.5">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/r.svg"
                  alt="Brand"
                />
              </div>
            </motion.div>

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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="bg-[#EF5C00] rounded-full w-[23px] h-[23px]"></div>
            </motion.div>

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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] shadow-solid-7 bg-white dark:bg-btndark p-4.5">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/java.svg"
                  alt="Brand"
                />
              </div>
            </motion.div>

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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="bg-[#016BFF] rounded-full w-[15px] h-[15px]"></div>
            </motion.div>

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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] shadow-solid-7 bg-white dark:bg-btndark p-4.5">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/c.svg"
                  alt="Brand"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
