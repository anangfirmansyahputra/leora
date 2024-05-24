import Image from "next/image";

type ProjectCard = {
  title: string;
  status: string;
  date: string;
  image: string;
  index: number;
};

export default function ProjectCard({
  date,
  image,
  index,
  status,
  title,
}: ProjectCard) {
  return (
    <div
      className="cursor-pointer custom-border overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl group bg-white z-[2]"
      data-aos="fade-up"
      data-aos-delay={`${(index + 1) * 100}`}
    >
      <div className="relative aspect-video rounded-lg overflow-hidden">
        <Image
          src={image}
          alt="wallpaper"
          fill
          className="absolute group-hover:scale-110 transition-all duration-200"
        />
      </div>

      <div className="mt-1 p-5 ">
        <h2 className="text-slate-700">{title}</h2>
        <p className="mt-1 text-sm text-slate-400">{date}</p>

        <div className="mt-3 flex items-end justify-between">
          <p>
            <span className="text-lg font-bold text-[#59b400]">{status}</span>
          </p>

          <div className="group inline-flex rounded-xl bg-orange-100 p-2 hover:bg-orange-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-orange-400 group-hover:text-orange-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
