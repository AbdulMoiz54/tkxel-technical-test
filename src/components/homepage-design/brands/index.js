import React from "react";
import AirbnbLogo from "../../../images/AirbnbLogo.svg";
import HubspotLogo from "../../../images/HubspotLogo.svg";
import GooglePlay from "../../../images/GooglePlay.svg";
import MicrosoftLogo from "../../../images/MicrosoftLogo.svg";
import WalmartLogo from "../../../images/WalmartLogo.svg";
import FedExLogo from "../../../images/FedExLogo.svg";

const logos = [
  { alt: "Airbnb Logo", src: AirbnbLogo },
  { alt: "Hubspot Logo", src: HubspotLogo },
  { alt: "Google Play", src: GooglePlay },
  { alt: "Microsoft Logo", src: MicrosoftLogo },
  { alt: "Walmart Logo", src: WalmartLogo },
  { alt: "FedEx Logo", src: FedExLogo },
];

export default function Brands() {
  return (
    <section className="flex flex-wrap gap-[32px] p-[25px] mx-auto border-t-[1px] border-b-[1px] border-[#e7e7e7] max-w-[1110px] justify-center">
      {logos.map((logo, index) => (
        <img
          key={index}
          alt={logo.alt}
          src={logo.src}
          className="h-[40px] sm:h-[30px]"
        />
      ))}
    </section>
  );
}
