import Image from "next/image";
import Link from "next/link";
import React from "react";

type ArticleCardProps = {
  data: {
    title: string;
    image: string;
    description: string;
    created_at: string;
    index: number;
  };
};

export default function ArticleCard({ data }: ArticleCardProps) {
  const truncateContent = (content: string, maxLength: number) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + "...";
  };

  return (
    <div
      className="z-[2] h-fit rounded-lg shadow-lg bg-white overflow-hidden transition-all duration-200 hover:shadow-xl flex flex-col"
      data-aos="fade-in"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <div className="relative aspect-video ">
        <Image src={data.image} alt={data.title} className="absolute" fill />
      </div>
      <div className="p-5 flex flex-col justify-between gap-5 flex-1">
        <div>
          <div>
            <div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#555]">
                {data.title}
              </h5>
              <p className="text-sm mb-3 text-gray-700 dark:text-gray-400">
                {data.created_at}
              </p>
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: truncateContent(data.description, 150),
            }}
            className="mb-3 font-normal text-gray-700 dark:text-gray-400"
          />
        </div>
        <div className="">
          <Link
            href="#"
            className="flex-1 w-fit inline-flex items-center px-5 duration-200 transition-all py-3 text-sm font-medium text-center text-white bg-[#228B22] rounded-lg hover:bg-[#207521]"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
