/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";

import { pglogo } from "../assets/images";

const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <div>
      <footer aria-label="Site Footer" className="bg-primary">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-tertiary flex justify-center">
            <img
              src={pglogo}
              alt="logo"
              className="h-11 w-11 object-contain "
            />
          </div>

          <p className="text-tertiary mx-auto mt-6 max-w-md text-center leading-relaxed">
            Portfolio © {year}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
