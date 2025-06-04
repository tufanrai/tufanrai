"use client";
import React from "react";
import Profile from "@/src/public/Coder.jpg";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";
import RotatingText from "@/reactBits/RotatingText/RotatingText";

const Hero = () => {
  return (
    <div className="p-5 w-full h-full flex items-start justify-center gap-10 absolute top-35">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="w-40 h-40 rounded-l-xl overflow-hidden">
          <img
            src={`${Profile.src}`}
            className="object-center object-cover w-full h-full hover:scale-110 ease duration-500"
            width={"100%"}
            alt=""
          />
        </div>
        <div className="w-40 inline-block py-5">
          <ul className="flex flex-col items-start justify-center gap-2">
            <li>
              <Link href={"https://www.instagram.com/tufan_rai_/"}>
                <span className="flex items-center justify-center gap-1 font-thin text-md text-slate-400 ease duration-200 hover:text-white hover:text-lg">
                  <FaInstagram />
                  instagram
                </span>
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <span className="flex items-center justify-center gap-1 font-thin text-md text-slate-400 ease duration-200 hover:text-white hover:text-lg">
                  <FaFacebook />
                  facebook
                </span>
              </Link>
            </li>
            <li>
              <Link href={"https://github.com/tufanrai"}>
                <span className="flex items-center justify-center gap-1 font-thin text-md text-slate-400 ease duration-200 hover:text-white hover:text-lg">
                  <FaGithub />
                  Github
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-120 px-5 py-2 h-100">
        <h1 className="font-semibold text-2xl mb-4">
          Hello,{" "}
          <RotatingText
            texts={["Tufan Rai here!", "MERN developer here!"]}
            rotationInterval={2000}
            mainClassName="bg-blue-500 rounded-lg inline-block w-80 px-5 py-1"
          />{" "}
        </h1>
        <h4 className="font-light text-md leading-5 text-slate-300 mb-4">
          I'm a <b>MERN stack web developer</b> carrying ample amount of
          experience with mongoDb, expressjs and nodejs. For front end I carry
          experience in Nextjs. I satisfy my clients by creating modular,
          responsive and modern web sites for their works.
        </h4>
        <p className="font-light text-sm leading-5 text-slate-500 mb-4">
          I help my clients turn their ideas digital by coding. I provide value
          for money services and always try to satisfy my clients requests. I
          try to understand clients requirement before moving forward to the
          development process.
        </p>
      </div>
    </div>
  );
};

export default Hero;
