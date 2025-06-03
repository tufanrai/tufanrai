import Link from "next/link";
import React from "react";

const Nave = () => {
  return (
    <div className="w-full">
      <nav className="w-full">
        <ul className="w-full flex items-center justify-end h-25 px-4 gap-4 bg-black/30 backdrop-blur-md rounded-md">
          <li className="mr-auto px-5 py-2">
            <h1 className="font-thin text-2xl italic">Tufan Rai</h1>
          </li>
          <li>
            <Link
              className="px-5 py-2 rounded-lg cursor-pointer relative w-0 relative before:absolute before:w-0 before:bottom-0 before:left-[25%] before:h-[1px] before:bg-white hover:before:left-0 hover:before:w-full before:ease before:duration-300 before:rounded-xl"
              href={"/aboutme"}
            >
              About me
            </Link>
          </li>
          <li>
            <Link
              className="px-5 py-2 rounded-lg cursor-pointer relative w-0 relative before:absolute before:w-0 before:bottom-0 before:left-[25%] before:h-[1px] before:bg-white hover:before:left-0 hover:before:w-full before:ease before:duration-300 before:rounded-xl"
              href={"/projects"}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="px-5 py-2 rounded-lg cursor-pointer relative w-0 relative before:absolute before:w-0 before:bottom-0 before:left-[25%] before:h-[1px] before:bg-white hover:before:left-0 hover:before:w-full before:ease before:duration-300 before:rounded-xl"
              href={"/blogs"}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              className="px-5 py-2 rounded-lg cursor-pointer relative w-0 relative before:absolute before:w-0 before:bottom-0 before:left-[25%] before:h-[1px] before:bg-white hover:before:left-0 hover:before:w-full before:ease before:duration-300 before:rounded-xl"
              href={"/contact"}
            >
              Contact me
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nave;
