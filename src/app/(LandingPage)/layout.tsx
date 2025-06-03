import Nave from "@/src/components/headerNav/Navej";
import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="w-full h-screen flex justify-center">
      <div className="max-w-[1280px] w-full h-full">
        <div className="w-full sticky top-0 z-999">
          <Nave />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default layout;
