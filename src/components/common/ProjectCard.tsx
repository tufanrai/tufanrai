import React from "react";
import { IProject } from "../../Interfaces/Project/IProject";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import Link from "next/link";

const ProjectCard = ({ value }: Readonly<{ value: IProject }>) => {
  const src = value.src;
  const title = value.title;
  const port = value.port;

  return (
    <div className="w-60 h-80 border-1 border-slate-600 rounded-lg flex flex-col overflow-hidden">
      <div className="h-[65%] overflow-hidden">
        <img
          src={`${src}`}
          className="object-cover hover:scale-120 ease duration-500"
          alt=""
        />
      </div>
      <div className="h-[35%] bg-gray-700 flex flex-col items-start justify-start">
        <h2 className="px-5 py-2 w-full font-semibold text-lg text-neutral-100 text-center">
          {title}
        </h2>
        <Link
          href={port}
          className="px-3 py-1 w-full cursor-pointer underline font-thin text-sm text-neutral-300 flex items-center justify-end gap-1 hover:text-white ease duration-100"
        >
          {port}
          <HiArrowTopRightOnSquare />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
