import React from "react";
import { Link } from "react-router-dom";
import GooglePlay from "../../../images/GooglePlay.svg";
import AppStore from "../../../images/AppStore.svg";
import Logo from "../../../images/Logo.svg";

const firstRowLinks = [
  { text: "Download Now", to: "#" },
  { text: "License", to: "#" },
];

const secondRowLinks = [
  { text: "About", to: "#" },
  { text: "Features", to: "#" },
  { text: "Pricing", to: "#" },
  { text: "Careers", to: "#" },
  { text: "Help", to: "mailto:test@test.com" },
  { text: "Privacy Policy", to: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-[1110px] w-full mx-auto px-4 flex flex-wrap justify-between">
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <img src={Logo} alt="Website Logo" className="mb-4" />
          <nav className="flex flex-wrap gap-[24px]">
            {firstRowLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="text-white hover:text-gray-200"
              >
                {link.text}
              </Link>
            ))}
          </nav>
          <nav className="flex flex-wrap gap-[24px] mt-4">
            {secondRowLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="text-white hover:text-gray-200"
              >
                {link.text}
              </Link>
            ))}
          </nav>
          <div className="mt-4 text-gray-400">
            © 2020 Landify UI Kit. All rights reserved
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-start lg:justify-end mt-6 lg:mt-0">
          <div className="text-center lg:text-right">
            <h4 className="text-lg font-semibold mb-4">Get the App</h4>
            <nav className="flex flex-col items-center lg:items-end gap-y-[8px]">
              <Link to="#" title="Google Play Store">
                <img
                  src={GooglePlay}
                  alt="Google Play Store"
                  className="w-[135px]"
                />
              </Link>
              <Link to="#" title="App Store">
                <img src={AppStore} alt="App Store" className="w-[135px]" />
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
