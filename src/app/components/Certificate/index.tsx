"use client";
import React from "react";
import SectionHeader from "../Common/SectionHeader";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Certificate } from "common-types";

import urlFor from "lib/urlFor";
type Props = {
  certificates: Certificate[];
  dict: any;
};

const Certificate = ({ certificates, dict }: Props) => {
  return (
    <>
      <section id="sertifikat">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 pt-25">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top text-center mx-auto">
            <SectionHeader
              headerInfo={{
                title: `${dict.certificate.title}`,
                subtitle: `${dict.certificate.subtitle}`,
                description: `${dict.certificate.description}`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

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
          className="animate_top mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20"
        >
          {/* <!-- Slider main container --> */}
          <div className="swiper testimonial-01 pb-22.5 mb-20">
            {/* <!-- Additional required wrapper --> */}
            <Swiper
              spaceBetween={50}
              slidesPerView={2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              breakpoints={{
                // when window width is >= 640px
                0: {
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                },
              }}
            >
              {certificates.map((certificate) => (
                <div key={certificate._id}>
                  <SwiperSlide>
                    <div className="bg-white shadow-solid-9 dark:shadow-none dark:bg-blacksection dark:border dark:border-strokedark p-9 pt-7.5">
                      <div className="flex justify-center border-b border-stroke dark:border-strokedark pb-6 mb-7.5">
                        <Image
                          width={280}
                          height={100}
                          className=""
                          src={urlFor(certificate.mainImage).url()}
                          alt="Sertifkat"
                        />
                      </div>
                      <h4 className="text-black dark:text-white text-metatitle3 mb-1.5">
                        {certificate.title}
                      </h4>
                      <p>{certificate.description}</p>
                    </div>
                  </SwiperSlide>
                </div>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Certificate;
