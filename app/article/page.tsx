import ArticleCard from "@/components/article-card";
import Hero from "@/components/hero-page";
import { articles } from "@/lib/data";
import Image from "next/image";

export default function ArticlePage() {
  return (
    <>
      <Hero title="Article" />
      <div className="py-40 relative custom-bg">
        <div className="space-y-5 relative z-10">
          <h2 className="text-5xl  font-semibold text-[#000] text-center">
            Our Article
          </h2>
          <p className="text-center text-[#222] max-w-[600px] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            itaque, ut veritatis accusamus voluptate modi sapiente voluptatem
            officia nemo voluptates?
          </p>
        </div>
        <div className="grid grid-cols-3 relative z-10 container mx-auto gap-5 py-20 min-h-[600px]">
          {/* <Image
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            src={"/wood.png"}
            alt="Building"
            width={300}
            height={300}
            className="absolute z-[1] top-[-20px] left-[-50px] animate-moveUpDown"
          /> */}
          {articles.map((article, i) => (
            <ArticleCard
              key={i}
              data={{
                ...(article as any),
                index: i,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
