import React from "react";

export default function Card({ img, title, subtitle }) {
  return (
    <div className="flex items-center gap-[24px]">
      <img src={img} alt={title} />
      <div>
        <p className="text-h4 font-semibold">{title}</p>
        <p className="text-body-1">{subtitle}</p>
      </div>
    </div>
  );
}
