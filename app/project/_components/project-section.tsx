import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/data";
import Image from "next/image";

export default function ProjectSection() {
  return (
    <div className="container mx-auto py-20 sm:py-40 relative z-[2]">
      {/* On Progress */}
      <div className="space-y-5">
        <h2 className="text-3xl sm:text-5xl font-semibold text-[#59b400] text-center">
          On Progress
        </h2>
        <p className="text-center text-[#989898] max-w-[600px] mx-auto">
          Discover our diverse projects showcasing quality, innovation, and
          sustainability. See how Leora is shaping the future of construction.
        </p>
      </div>
      <div className="grid relative grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:p-6 mt-20 z-[2]">
        {projects
          .filter((project) => project.status === "On Progress")
          .map((project, index) => (
            <ProjectCard
              date={project.date}
              image={project.image}
              index={index}
              status={project.status}
              title={project.title}
              key={index}
            />
          ))}
        <Image
          src="/buildings_248101.svg"
          alt=""
          width={500}
          height={500}
          // data-aos="fade-in"
          className="absolute top-0 md:top-[-100px] left-[-300px] md:left-[-200px] xl:left-[-400px] rotate-[60deg]"
        />
        <Image
          src="/buildings_248101.svg"
          alt=""
          width={500}
          height={500}
          // data-aos="fade-in"
          className="absolute top-[200px] right-[-200px] md:right-[-300px] xl:right-[-400px] rotate-[120deg] scale-x-[-1] scale-y-[-1]"
        />
      </div>

      {/* Finished */}
      <div className="space-y-5 mt-20">
        <h2 className="text-3xl sm:text-5xl font-semibold text-[#59b400] text-center">
          Finished
        </h2>
        <p className="text-center text-[#222] max-w-[600px] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          itaque, ut veritatis accusamus voluptate modi sapiente voluptatem
          officia nemo voluptates?
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:p-6 mt-20">
        {projects
          .filter((project) => project.status === "On Progress")
          .map((project, index) => (
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
  );
}
