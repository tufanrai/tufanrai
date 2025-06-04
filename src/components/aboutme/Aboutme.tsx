import React from "react";
import profile from "@/src/public/Coder.jpg";
import { ImArrowLeft2 } from "react-icons/im";
import Link from "next/link";
import SpotlightCard from "@/reactBits/SpotlightCard/SpotlightCard";

const Aboutme = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      {/* about me card */}
      <SpotlightCard className="max-w-150 max-h-100 h-full w-full flex flex-col">
        {" "}
        <Link href={"/"}>
          <ImArrowLeft2 />
        </Link>
        <div className="w-full px-5 py-1 flex items-start justify-between">
          <div className="h-30 w-70 flex items-center justify-center">
            <h1 className="font-semibold text-2xl">Something about me!</h1>
          </div>
          <div>
            <div className="w-45 h-30 rounded-lg overflow-hidden">
              <img
                src={`${profile.src}`}
                className="object-fill hover:scale-120 ease duration-200"
                width={"100%"}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-100 px-9 py-3 overflow-y-auto">
          <p className="font-thin text-sm text-white leading-5">
            Hello, my name is Tufan Rai and I am from Nepal. I am 18 and I am
            currently learning MERN stack web development.
          </p>
          <p className="font-thin text-sm text-white leading-5 mt-3">
            I am a high school passout currently waiting for the results. I have
            an ambition of creating my own service providing business and leave
            a foot print in the service center related to tech.
          </p>
          <p className="font-thin text-sm text-white leading-5 mt-3">
            Talking about my hobies, appart from coding and programming I love
            playing cricket. I am also a under-16 district level cricket player.
            ( though I couldn't perform in the match cause I broke my leg just a
            day before the game 😃) I am a left handed fast bowler as well.
          </p>
          div
        </div>
      </SpotlightCard>
    </div>
  );
};

export default Aboutme;
