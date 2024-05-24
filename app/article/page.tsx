import ArticleCard from "@/components/article-card";
import Hero from "@/components/hero-page";
import { articles } from "@/lib/data";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Insights & Innovations - Stay Ahead with Leora",
  description:
    "Explore our articles for the latest trends and innovations in construction. Stay informed with expert insights and valuable perspectives.",
};

export default function ArticlePage() {
  return (
    <>
      <Hero
        title="Article"
        // description="Explore our articles for the latest trends and innovations in construction. Stay informed with expert insights and valuable perspectives."
        description="Stay Ahead with Leora"
      />
      <div className="py-20 sm:py-40 custom-bg overflow-hidden relative">
        <div className="space-y-5 z-[2] relative">
          <h2 className="text-3xl sm:text-5xl font-semibold text-[#59b400] text-center">
            Our Article
          </h2>
          <p className="text-center text-[#989898] max-w-[600px] mx-auto">
            Explore our articles for the latest trends and innovations in
            construction. Stay informed with expert insights and valuable
            perspectives.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 relative z-[1] container mx-auto gap-5 py-20">
          {articles.map((article, i) => (
            <ArticleCard
              key={i}
              data={{
                ...(article as any),
                index: i,
              }}
            />
          ))}
          {articles.length > 6 && (
            <Image
              src="/buildings_248101.svg"
              alt=""
              width={500}
              height={500}
              // data-aos="fade-in"
              className="absolute top-[500px] right-[-200px] md:right-[-300px] xl:right-[-400px] rotate-[120deg] scale-x-[-1] scale-y-[-1]"
            />
          )}
          {articles.length > 3 && (
            <Image
              src="/buildings_248101.svg"
              alt=""
              width={500}
              height={500}
              // data-aos="fade-in"
              className="absolute top-0 md:top-[-100px] left-[-300px] md:left-[-200px] xl:left-[-400px] rotate-[60deg]"
            />
          )}
        </div>
      </div>
    </>
  );
}
