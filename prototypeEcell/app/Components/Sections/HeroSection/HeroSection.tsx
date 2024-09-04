"use client";
import { arrowRight, email, phone, search,rocket } from "@/utils/Icons";
import { navLinks } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function HeroSection() {
  const arr = Array(4).fill(0);
  const [navOpen, setNavOpen] = React.useState(false);

  const navX = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
  };

  return (
    <section className="relative h-full w-full">
      <div className="absolute w-full h-[100vh] top-[-120px] md:top-0 flex justify-evenly z-[-1]">
        {arr.map((_, i) => {
          return (
            <div key={i} className="relative w-[1px] h-full bg-2">
              <span className="absolute bottom-0 w-2 h-2 bg-colour-2 left-0 translate-x-[-50%] rounded-full"></span>
            </div>
          );
        })}
      </div>

      <nav
        className="px-[18rem] fixed md:relative top-0 z-50 w-full shadow-md md:shadown-none flex items-center justify-between bg-1
        border-b border-colour-1 mq-sections"
      >
        <div className="flex items-center gap-2 py-5 lg:py-0">
          <Image
            src="/thecodedealer--logo-white.png"
            alt="logo"
            width={30}
            height={30}
          />
          <h1>E-Cell</h1>
        </div>
        <ul className="hidden lg:flex items-center gap-9 text-white font-medium">
          {navLinks.map((link, i) => {
            return (
              <li key={i}>
                <Link href={link.url} className="p-4">
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <button className="hidden lg:inline-block py-6 px-10 text-2xl text-gray-400 border-x border-colour-1 hover:bg-2 transition-all duration-200 ease-in-out">
          {rocket}
        </button>

        {/* Burger Menu for smaller screens */}
        <div
          className="lg:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setNavOpen(!navOpen)}
        >
          <div className="w-8 h-1 bg-purple-500 rounded-md"></div>
          <div className="w-8 h-1 bg-purple-500 rounded-md"></div>
          <div className="w-8 h-1 bg-purple-500 rounded-md"></div>
        </div>
      </nav>

      <div className="mt-[7rem] md:mt-[7rem] px-[18rem] mq-sections">
        <div className="gradient-purple mb-4 py-2 px-4 rounded-tl-[12px] rounded-br-[12px]">
          <p className="font-medium text-white">
            E-Cell Government College of Engineering, Kolhapur
          </p>
        </div>
        <h1 className="text-3xl md:text-4xl">
          Fuel your entrepreneurial spirit with the Entrepreneurship Cell.
          Connect, innovate, and lead the way to success.
        </h1>
        <div className="mt-6 flex flex-col gap-10 lg:flex-row">
          <Image
            src="/images/Untitled.jpg"
            alt="hero image"
            width={700}
            height={400}
            className="rounded-lg mt-4 object-cover"
          />
          <div className="lg:mt-12 flex flex-col justify-between text-gray-300">
            <div className="flex flex-col gap-4 md:gap-6">
              <h3 className="text-white text-2xl font-semibold">
                What is E-Cell ?
              </h3>
              <p>
                "Entrepreneurship Cell brings the entrepreneurial world to
                everyone in the GCOEK ecosystem. From startup enthusiasts to
                seasoned entrepreneurs, we offer year-round events like
                Conclaves, Keynotes, and B-Planning Competitions, combining
                personal growth with collaborative opportunities."
              </p>
              <div className="relative cta-button self-start">
                <Link href="#" className="flex items-center gap-4">
                  <span>Explore More</span>
                  {arrowRight}
                  <span className="blob"></span>
                </Link>
              </div>
            </div>
            <Link
              href="#services"
              className="hidden mouse-animation lg:flex justify-center items-center"
            >
              <Image
                src="/arrow--down-long.svg"
                alt="hero image"
                width={10}
                height={10}
                className="rounded-lg"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Nav For Smaller Screens */}
      <motion.div
        className="px-8 fixed z-50 flex flex-col gap-8 left-0 top-0 w-[18rem] h-[100vh] bg-2 lg:hidden"
        initial="hidden"
        animate={navOpen ? "visible" : "hidden"}
        transition={{ duration: 0.3 }}
        variants={navX}
      >
        <div className="flex items-center gap-2 py-5 lg:py-0">
          <Image
            src="/thecodedealer--logo-white.png"
            alt="logo"
            width={30}
            height={30}
          />
          <h1>Logo</h1>
        </div>
        <nav className="bg-3 px-4 py-4 rounded-md">
          <ul className="flex flex-col gap-4 text-white font-medium">
            {navLinks.map((link, i) => {
              return (
                <li key={i}>
                  <Link
                    href={link.url}
                    className="inline-block w-full
                  hover:text-purple-500 transition-all duration-200 ease-in-out"
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="lex flex-col gap-2">
          <p className="flex items-center gap-2 text-gray-300 font-medium">
            {phone}
            +1 234 567 890 123
          </p>
          <p className="flex items-center gap-2 text-gray-300 font-medium">
            {email}
            testemail@gmail.com
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
