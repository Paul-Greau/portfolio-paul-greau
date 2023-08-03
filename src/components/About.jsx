/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/classnames-order */
import React from "react";

import Tilt from "react-parallax-tilt";

import { DiCodeBadge, DiDatabase, DiGhostSmall } from "react-icons/di";

import { styles } from "../assets/styles/styles";

import Balls from "../components/canvas/Balls";
function About() {
  return (
    <>
      <section
        id="about"
        className="flex h-auto items-center justify-center  relative z-0 bg-primary "
      >
        <div className="container px-5 py-32 mx-auto flex flex-col max-w-6xl sm:mb-32">
          <div className="mx-auto max-w-lg text-center">
            <h2 className={`${styles.title} `}>À propos</h2>
            <div className="w-20 h-[2px] mx-auto bg-secondary mb-3"></div>

            {/* <p className={`${styles.subTitle} sm:pt-5 pb-3`}>
              Passionné par le développement web, je suis à la recherche d'un
              contrat en alternance en tant que développeur web afin de pouvoir
              mettre en pratique mes connaissances et développer mes compétences
              professionnelles.
            </p> */}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-1 px-5 md:px-12 lg:grid-cols-3 pb-10">
            <Tilt>
              <div className="rounded-xl p-8 bg-secondary flex flex-col items-center hover:bg-white">
                <DiCodeBadge size={60} />

                <h2 className=" text-xl font-bold text-primary py-5">
                  Front-end
                </h2>
                <div className="w-8 h-[3px] bg-primary"></div>
                {/* 
                <p className="mt-1 text-sm text-primary text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                  quo possimus adipisci distinctio alias voluptatum blanditiis
                  laudantium.
                </p> */}
              </div>
            </Tilt>
            <Tilt>
              <div className="rounded-xl p-8 bg-secondary flex flex-col items-center hover:bg-white">
                <DiGhostSmall size={60} />

                <h2 className="text-xl font-bold text-primary py-5">UI/UX</h2>
                <div className="w-8 h-[3px] bg-primary"></div>
              </div>
            </Tilt>
            <Tilt>
              <div className="rounded-xl p-8 bg-secondary flex flex-col items-center hover:bg-white">
                <DiDatabase size={60} />

                <h2 className="text-xl font-bold text-primary py-5">
                  Back-end
                </h2>
                <div className="w-8 h-[3px] bg-primary"></div>
              </div>
            </Tilt>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="w-[80%] pb-5">
              <Balls />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
