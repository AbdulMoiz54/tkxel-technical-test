import React from "react";
import Bulb from "../../../images/Bulb.svg";

export default function FashionTrends() {
  return (
    <div className="max-w-[1110px] mx-auto mt-[64px] px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-y-[48px]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-x-[48px]">
          <p className="text-h3 font-extrabold max-w-[540px]">
            Enter the world of all fashion trends
          </p>
          <p className="text-lead-1 max-w-[540px] flex-1 mt-4 lg:mt-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis
            scelerisque at quam congue posuere libero in sit quam. Consequat,
            scelerisque non tincidunt sit lectus senectus.
          </p>
        </div>
        <div className="mb-[64px] flex justify-center">
          <img
            src={Bulb}
            alt="Bulb"
            a
            className="w-full max-w-[300px] lg:max-w-none"
          />
        </div>
      </div>
    </div>
  );
}
