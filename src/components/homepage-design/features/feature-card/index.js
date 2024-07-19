import React from "react";

export default function FeatureCard({ img, title }) {
  return (
    <div className="">
      <img className="block mx-auto" src={img} alt={title} />
      <p className="mt-[24px] text-h5 text-center font-semibold">{title}</p>
      <p className="text-body-1 text-center max-w-[350px] mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh
        tristique ipsum.
      </p>
    </div>
  );
}
