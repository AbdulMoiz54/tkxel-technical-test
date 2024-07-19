import React from "react";
import Img1 from "../../../images/icons/01.svg";
import Img2 from "../../../images/icons/03.svg";
import Img3 from "../../../images/icons/05.svg";
import Img4 from "../../../images/icons/07.svg";
import Card from "./card";

const DETAILS = [
  {
    img: Img1,
    title: "10,000+",
    subtitle: "Downloads per day",
  },
  {
    img: Img2,
    title: "2 Million",
    subtitle: "Users",
  },
  {
    img: Img3,
    title: "500+",
    subtitle: "Clients",
  },
  {
    img: Img4,
    title: "140",
    subtitle: "Countries",
  },
];

export default function Achievements() {
  return (
    <div className="mt-[82px] max-w-[1110px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
        <div>
          <p className="text-h2 font-semibold">Our 18 years of achievements</p>
          <p className="mt-[8px] text-lead-1">
            With our super powers we have reached this
          </p>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-[30px]">
            {DETAILS.map((d) => (
              <Card
                title={d.title}
                img={d.img}
                subtitle={d.subtitle}
                key={d.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
