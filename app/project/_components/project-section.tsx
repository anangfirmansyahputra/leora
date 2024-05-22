import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/data";

export default function ProjectSection() {
  return (
    <div className="container mx-auto py-40">
      {/* On Progress */}
      <div className="space-y-5">
        <h2 className="text-5xl font-semibold text-[#59b400] text-center">
          On Progress
        </h2>
        <p className="text-center text-[#989898] max-w-[600px] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          itaque, ut veritatis accusamus voluptate modi sapiente voluptatem
          officia nemo voluptates?
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-20">
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

      {/* Finished */}
      <div className="space-y-5 mt-20">
        <h2 className="text-5xl font-semibold text-[#59b400] text-center">
          Finished
        </h2>
        <p className="text-center text-[#989898] max-w-[600px] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          itaque, ut veritatis accusamus voluptate modi sapiente voluptatem
          officia nemo voluptates?
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-20">
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
