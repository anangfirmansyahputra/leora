import Hero from "@/components/hero-page";
import ProjectSection from "./_components/project-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects - Building the Future, One Project at a Time",
  description:
    "Discover our diverse projects showcasing quality, innovation, and sustainability. See how Leora is shaping the future of construction.",
};

export default function ProjectPage() {
  return (
    <div className="relative">
      <Hero
        title="Project"
        // description="Discover our diverse projects showcasing quality, innovation, and sustainability. See how Leora is shaping the future of construction."
        description="Building the Future, One Project at a Time"
      />
      <ProjectSection />
    </div>
  );
}
