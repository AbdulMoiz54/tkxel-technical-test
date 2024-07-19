import React from "react";
import HeroImg from "../../../images/other-images/Hero.png";

export default function Hero() {
  return (
    <div className="md:min-h-[866px]" style={{ background: `url(${HeroImg})` }}>
      <div className="md:pt-[270px] md:pl-[165px] p-[20px]">
        <p className="font-extrabold text-h2">
          Landing page <br /> UI kit
        </p>
        <p className="max-w-[540px] text-lead-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer.
        </p>
        <button className="mt-[32px] rounded-[8px] text-large-label py-[16px] px-[41px] text-white font-bold bg-primary">
          Get Started
        </button>
      </div>
    </div>
  );
}
