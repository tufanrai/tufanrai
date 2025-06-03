import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import ProjectCard from "../common/ProjectCard";

const Project = () => {
  return (
    <div>
      <div>
        <p className="w-full flex items-center justify-between px-15 font-thin text-sm">
          Selective Projects{" "}
          <Link
            className="text-stone-400 flex items-center gap-2 ease duration-200 hover:text-stone-200"
            href={"/projects"}
          >
            View all projects <GoArrowRight />
          </Link>
        </p>
      </div>
      <div className="w-full h-[50vh] p-4 flex items-center justify-start overflow-x-auto mt-20">
        <ProjectCard
          value={{
            src: "string",
            title: "instagram",
            port: "https://www.instagram.com",
          }}
        />
      </div>
    </div>
  );
};

export default Project;
