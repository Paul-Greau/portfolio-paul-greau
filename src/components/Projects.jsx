/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/classnames-order */
import React from "react";

import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiReact,
  DiNodejsSmall,
  DiPostgresql,
} from "react-icons/di";

import { SiTailwindcss } from "react-icons/si";

import { idfrog, pf } from "../assets/images";

import { styles } from "../assets/styles/styles";

function Projects() {
  return (
    <section id="projects" className="bg-secondary h-auto w-full ">
      <div className="container px-5 py-32 mx-auto flex flex-col max-w-6xl sm:mb-32">
        <div className="text-primary">
          <h2 className={`${styles.title_black}`}>Projets</h2>
          <div className="w-20 h-[2px] mx-auto bg-primary mb-3"></div>
          <p className={`${styles.subTitle_black} sm:pt-5 pb-3 leading-6 mb-8`}>
            Les compétences que j'ai acquises ainsi que mon expérience sont
            démontrées à travers les projets suivants, en utilisant des exemples
            précis de réalisations. Chacun de ces projets est brièvement décrit,
            tout en mentionnant les technologies qui ont été employées pour les
            mener à bien.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-evenly">
          <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm w-full xs:w-[40%] lg:w-[460px] xl:w-[490px]">
            <a href="https://idfrog-project.onrender.com/" target="blank">
              <img alt="idfrog screen" src={idfrog} className="object-cover" />
            </a>

            <div className="p-4 sm:p-5 flex flex-col">
              <h3 className="text-3xl font-black text-gray-900 mb-2">IdFrog</h3>
              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                IdFrog est une plateforme collaborative où les utilisateurs
                peuvent partager leurs idées, travailler ensemble et les
                présenter aux investisseurs, jusqu'à leur réalisation.
              </p>
              <div className="flex justify-between mt-3">
                <div className="flex my-5 ">
                  <DiHtml5 size={40} />
                  <DiCss3 size={40} />
                  <DiJavascript size={40} />
                  <DiReact size={40} />
                  <DiNodejsSmall size={40} />
                  <DiPostgresql size={40} />
                </div>
                <div className="flex justify-around gap-2 ml-2 ">
                  <a
                    href="https://github.com/Paul-Greau/projet-08-idfrog-tp"
                    target="blank"
                    className="group  inline-flex items-center text-sm font-medium "
                  >
                    <div className="border-2 border-black border-solid text-white bg-black rounded-full py-2 px-4 hover:bg-white hover:text-black">
                      Github
                    </div>
                  </a>

                  <a
                    href="https://idfrog-project.onrender.com/"
                    target="blank"
                    className="group inline-flex items-center text-sm font-medium "
                  >
                    <div className="border-2 border-black border-solid text-white bg-black rounded-full py-2 px-4 hover:bg-white hover:text-black">
                      Demo
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </article>
          <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm w-full xs:w-[40%] lg:w-[460px] xl:w-[490px]">
            <a href="https://paul-greau.netlify.app/" target="blank">
              <img alt="Portfolio screen" src={pf} className="object-cover" />
            </a>

            <div className="p-4 sm:p-5 flex flex-col">
              <h3 className="text-3xl font-black text-gray-900 mb-2">
                Portfolio
              </h3>
              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Ce portfolio met en avant mes compétences, mes réalisations et
                les technologies que j'ai utilisées pour démontrer mes capacités
                professionnelles.
              </p>
              <div className="flex justify-between mt-3">
                <div className="flex my-5 ">
                  <DiHtml5 size={40} />
                  <DiCss3 size={40} />
                  <DiJavascript size={40} />
                  <DiReact size={40} />
                  <SiTailwindcss size={40} />
                </div>
                <div className="flex justify-around gap-2 ml-2 ">
                  <a
                    href="https://github.com/Paul-Greau/portfolio-paul-greau"
                    target="blank"
                    className="group  inline-flex items-center text-sm font-medium "
                  >
                    <div className="border-2 border-black border-solid text-white bg-black rounded-full py-2 px-4 hover:bg-white hover:text-black">
                      Github
                    </div>
                  </a>

                  <a
                    href="https://paul-greau.netlify.app/"
                    target="blank"
                    className="group inline-flex items-center text-sm font-medium "
                  >
                    <div className="border-2 border-black border-solid text-white bg-black rounded-full py-2 px-4 hover:bg-white hover:text-black">
                      Demo
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projects;
