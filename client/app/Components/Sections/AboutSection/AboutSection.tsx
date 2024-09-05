import React from "react";
import Title from "../../Title/Title";
import { check } from "@/utils/Icons";
import Button from "../../Button/Button";
import Image from "next/image";
import { aboutStats } from "@/utils/utils";

function AboutSection() {
  return (
    <section className="pt-[5rem] pb-16 mq-sections">
      <Title title="Learn More About Us." label="Who We Are" />
      <div className="mt-[5rem] grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-2xl">
            We're a team of passionate People here to help you build and grow
            your ideas.
          </h1>
          <p className="py-8 text-gray-300">
            Entrepreneurs have a clear vision. These are the thinkers,
            innovators, the action takers who change society for a better
            tomorrow. The vision of E-Cell GCOEK is to enable these
            action-takers to efficiently traverse their road to an enterprise by
            giving them exposure, mentorship, network, funding opportunities and
            wisdom to turn their dreams into reality.
          </p>

          <ul className="flex flex-col gap-4 text-gray-200">
            <li className="flex text-[1.25rem] items-center gap-3 font-bold">
              <span className="w-8 h-8 flex items-center justify-center border-2 border-gray-300 rounded-md">
                {check}
              </span>
              <span>Empowerment through Resources</span>
            </li>
            <li className="flex text-[1.25rem] items-center gap-3 font-bold">
              <span className="w-8 h-8 flex items-center justify-center border-2 border-gray-300 rounded-md">
                {check}
              </span>
              <span>Fostering Innovation</span>
            </li>
            <li className="flex text-[1.25rem] items-center gap-3 font-bold text-gray-200">
              <span className="w-8 h-8 flex items-center justify-center border-2 border-gray-200 rounded-md">
                {check}
              </span>
              <span>Supporting Growth</span>
            </li>
            <li className="flex text-[1.25rem] items-center gap-3 font-bold text-gray-200">
              <span className="w-8 h-8 flex items-center justify-center border-2 border-gray-200 rounded-md">
                {check}
              </span>
              <span>Advancing Society</span>
            </li>
          </ul>
          <div className="mt-8">
            <Button label="Learn More" />
          </div>
        </div>
        <div className="relative p-5">
          <div className="relative">
            <Image
              src="/images/slzx.webp"
              alt="About Us"
              width={600}
              height={400}
              className="w-full rotate-3 rounded-lg hover:rotate-0 transition-all duration-300 ease-in-out"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-orange-100 z-[-1] rounded-lg"></div>
            <div className="absolute top-0 left-0 w-full h-full -rotate-3 bg-purple-200 z-[-2] rounded-lg"></div>
          </div>
        </div>
      </div>

      <div className="mt-16 py-[6rem] grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-8 border-t-2">
        {aboutStats.map((stat, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-2 md:gap-4 items-center justify-center text-center"
            >
              <h1
                className={`text-8xl font-extrabold text-gray-200 ${stat.ff}`}
              >
                {stat.count}
              </h1>
              <p className="text-gray-200 text-2xl">{stat.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default AboutSection;
