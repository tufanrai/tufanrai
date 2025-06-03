"use client";
import Hero from "@/src/components/Hero/Hero";
import Project from "@/src/components/projects/Project";
import React from "react";

const page = () => {
  return (
    <div className="py-10 flex flex-col items-center justify-around">
      <div className="h-[80vh] w-full relative">
        <Hero />
      </div>
      <hr className="border-1 border-white rounded-lg w-full my-10" />
      <div className="h-[80vh] w-full relative">
        <Project />
      </div>
      <hr className="border-1 border-white rounded-lg w-full my-10" />
      <div>This is the blog section</div>
      <hr className="border-1 border-white rounded-lg w-full my-10" />
      <div>This is the</div>
    </div>
  );
};

export default page;
