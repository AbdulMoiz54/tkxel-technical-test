import React, { useState } from "react";
import Logo from "../../../images/main-logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const NAVS = [
    { path: "/other/about", label: "About" },
    { path: "#", label: "Pricing" },
    { path: "#", label: "Contact" },
    { path: "/other", label: "Other Tasks" },
  ];
  return (
    <>
      <header>
        <nav className="border-b-[1px] border-lightGray relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3">
          <div className="max-w-[1110px] mx-auto w-[100%] flex flex-wrap items-center justify-between">
            <div
              className={
                "md:flex items-center hidden" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto mb-0">
                {NAVS.map((nav) => (
                  <li className="nav-item" key={nav.label}>
                    <Link
                      className="px-3 py-2 flex items-center text-lead-2 font-lead-2 leading-snug text-black hover:opacity-75"
                      to={nav.path}
                    >
                      <i className="fab fa-facebook-square text-lg leading-lg text-black opacity-75"></i>
                      <span className="ml-2">{nav.label}</span>
                    </Link>
                  </li>
                ))}
                {/* Buttons for mobile screens */}
                <li className="nav-item block lg:hidden">
                  <button className="bg-lightPurple py-[10px] px-[30px] text-darkPurple rounded-[8px] hover:text-white w-full mt-2">
                    Login
                  </button>
                </li>
                <li className="nav-item block lg:hidden">
                  <button className="bg-primary py-[10px] px-[30px] text-white rounded-[8px] hover:bg-lightPurple w-full mt-2">
                    Signup
                  </button>
                </li>
              </ul>
            </div>
            <div className="w-full flex justify-center lg:w-auto lg:static lg:justify-start md:flex-[unset] flex-1">
              <Link to="/" title="Home">
                <img src={Logo} alt="Project Logo" className="w-24 md:w-32" />
              </Link>
            </div>

            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
            <div className="hidden lg:flex items-center space-x-4">
              <button className="bg-lightPurple py-[10px] px-[30px] text-darkPurple rounded-[8px] hover:text-white">
                Login
              </button>
              <button className="bg-primary py-[10px] px-[30px] text-white rounded-[8px] hover:bg-lightPurple">
                Signup
              </button>
            </div>
          </div>
        </nav>
      </header>
      {navbarOpen && (
        <div className="bg-white border-t-[1px] border-lightGray py-3">
          <div className="max-w-[1110px] mx-auto flex flex-col items-center lg:hidden">
            <ul className="flex flex-col list-none w-full px-4">
              <li className="nav-item mb-2">
                <Link
                  className="px-3 py-2 flex items-center text-lead-2 font-lead-2 leading-snug text-black hover:opacity-75"
                  to="/other/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  className="px-3 py-2 flex items-center text-lead-2 font-lead-2 leading-snug text-black hover:opacity-75"
                  to="#pablo"
                >
                  Pricing
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  className="px-3 py-2 flex items-center text-lead-2 font-lead-2 leading-snug text-black hover:opacity-75"
                  to="#pablo"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item mb-2">
                <button className="bg-lightPurple py-[10px] px-[30px] text-darkPurple rounded-[8px] hover:text-white w-full">
                  Login
                </button>
              </li>
              <li className="nav-item">
                <button className="bg-primary py-[10px] px-[30px] text-white rounded-[8px] hover:bg-lightPurple w-full">
                  Signup
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
