import React from "react";
import Img from "../../../images/other-images/phone-1.png";
import ArrowRight from "../../../images/icons/ArrowRight.svg";

export default function Headline() {
  return (
    <div className="max-w-[1110px] mt-[64px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center">
        <img src={Img} alt="Phone" className="w-full lg:w-auto" />
        <div className="flex flex-col gap-[32px] px-[0] lg:px-[48px] mt-8 lg:mt-0">
          <p className="text-h3 font-extrabold">Headline</p>
          <p className="text-lead-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
            diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem
            egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non.
            Non commodo volutpat, pharetra, vel.
          </p>
          <p className="text-primary font-bold text-large-label inline-flex items-center gap-[3px] cursor-pointer">
            <span>Get Started</span>
            <img
              src={ArrowRight}
              className="w-[24px] h-[24px]"
              alt="Arrow Right"
            />
          </p>
        </div>
      </div>
    </div>
  );
}
