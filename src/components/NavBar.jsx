/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
import React, { useState } from "react";
// import { Link } from "react-scroll";
import { pglogo, linkd, github } from "../assets/images";

import { navLinks } from "../data";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      aria-label="Site Header"
      className="bg-primary/70 fixed w-full z-10"
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a href="/#header">
              <img
                className="h-11 w-11 object-contain "
                src={pglogo}
                alt="logo"
              />
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Site Nav" className="hidden md:block">
              <ul className="flex items-center gap-6 text-lg">
                {navLinks.map((nav, index) => (
                  <li key={index}>
                    <a
                      href={`/#${nav.link}`}
                      className={
                        "menuActive cursor-pointer text-secondary hover:text-gray-300"
                      }
                    >
                      {nav.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <div className="flex gap-2 sm:gap-4 w-20">
                <a
                  href="https://www.linkedin.com/in/paul-gr%C3%A9au/"
                  target="blank"
                  className="hover:text-black-300"
                >
                  <img
                    className="h-7 w-7 object-contain "
                    src={linkd}
                    alt="logo"
                  />
                </a>

                <div className=" ">
                  <a href="https://github.com/Paul-Greau" target="blank">
                    <img
                      className="h-7 w-7 object-contain"
                      src={github}
                      alt="logo"
                    />
                  </a>
                </div>
              </div>

              <div className="flex flex-1 justify-start items-center md:hidden">
                <button
                  onClick={() => setOpen(!open)}
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>

                <div className="bg-primary/70 absolute top-16 right-0 min-w-[100%] z-10 ">
                  <nav
                    aria-label="Site Nav"
                    className={`${
                      !open ? "hidden" : "flex "
                    } flex items-center justify-center `}
                  >
                    <ul className="flex-col text-xl text-center">
                      {navLinks.map((nav, index) => (
                        <li key={index} className="my-4">
                          <a
                            href={`/#${nav.link}`}
                            className={
                              "menuActive cursor-pointer text-secondary hover:text-gray-300 "
                            }
                            onClick={() => setOpen(!open)}
                          >
                            {nav.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
