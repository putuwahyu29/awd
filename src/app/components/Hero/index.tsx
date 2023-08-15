"use client";
import React, { useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <>
      <section
        id="beranda"
        className="pt-35 md:pt-40 xl:pt-46 pb-20 xl:pb-25 overflow-hidden"
      >
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="text-black dark:text-white text-lg font-medium mb-2">
                Halo Semua👋, Perkenalkan nama saya
              </h4>
              <h1 className="text-primary text-3xl xl:text-hero font-bold mb-2 pr-16 ">
                I Putu Agus Wahyu Dupayana
              </h1>
              <h4 className="text-black dark:text-white text-lg font-medium mb-4.5">
                Data Enginer & Software Developer
              </h4>
              <p>Selamat datang di halaman web portofolio milik agus wahyu</p>

              <div className="mt-10">
                <button
                  aria-label="tes"
                  className="flex bg-black hover:bg-blackho dark:bg-btndark text-white rounded-full ease-in-out duration-300 px-7.5 py-2.5"
                >
                  <a href="#kontak">Hubungi Saya</a>
                </button>
              </div>
            </div>
            <div className="animate_right md:w-1/2 hidden lg:block">
              <div className="relative 2xl:-mr-7.5">
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="dark:hidden"
                    src="/images/hero/hero.png"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden dark:block"
                    src="/images/hero/hero.png"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
