import React from "react";
import FeatureImg1 from "../../../images/icons/01.svg";
import FeatureImg2 from "../../../images/icons/02.svg";
import FeatureImg3 from "../../../images/icons/03.svg";
import FeatureImg4 from "../../../images/icons/04.svg";
import FeatureImg5 from "../../../images/icons/05.svg";
import FeatureImg6 from "../../../images/icons/06.svg";
import FeatureCard from "./feature-card";

const FEATURES_DATA = [
  {
    img: FeatureImg1,
    title: "Robust workflow",
  },
  {
    img: FeatureImg2,
    title: "Flexibility",
  },
  {
    img: FeatureImg3,
    title: "User friendly",
  },
  {
    img: FeatureImg4,
    title: "Multiple layouts",
  },
  {
    img: FeatureImg5,
    title: "Better components",
  },
  {
    img: FeatureImg6,
    title: "Well organised",
  },
];

export default function Features() {
  return (
    <section className="mt-[64px] max-w-[1110px] mx-auto">
      <p className="text-h2 text-center font-extrabold">Tailor-made features</p>
      <p className="text-lead-1 mt-[8px] mb-[48px] text-center max-w-[540px] mx-auto">
        Lorem ipsum is common placeholder text used to demonstrate the graphic
        elements of a document or visual presentation.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-[64px] gap-x-[30px]">
        {FEATURES_DATA.map((f) => (
          <FeatureCard key={f.title} title={f.title} img={f.img} />
        ))}
      </div>
    </section>
  );
}
