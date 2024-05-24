"use client";

import Image from "next/image";
import ProjectCard from "./project-card";
import { projects } from "@/lib/data";

export default function Project() {
  return (
    <div className="relative overflow-hidden">
      <Image
        src="/buildings_248101.svg"
        alt=""
        width={500}
        height={500}
        // data-aos="fade-in"
        className="absolute top-[200px] left-[-300px] md:left-[-200px] rotate-[45deg] md:rotate-[60deg] z-[1]"
      />
      <Image
        src="/buildings_248101.svg"
        alt=""
        width={500}
        height={500}
        // data-aos="fade-in"
        className="absolute top-[500px] right-[-300px] md:right-[-200px] rotate-[135deg] md:rotate-[120deg] scale-x-[-1] scale-y-[-1] z-[1]"
      />
      <div className="container mx-auto py-20 sm:py-40 relative z-[2]">
        <div className="space-y-5">
          <h2 className="text-3xl sm:text-5xl font-semibold text-[#59b400] text-center">
            Our Project
          </h2>
          <p className="text-center text-[#989898] max-w-[600px] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            itaque, ut veritatis accusamus voluptate modi sapiente voluptatem
            officia nemo voluptates?
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:p-6 mt-20">
          {projects.map((project, index) => (
            <ProjectCard
              date={project.date}
              image={project.image}
              index={index}
              status={project.status}
              title={project.title}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
