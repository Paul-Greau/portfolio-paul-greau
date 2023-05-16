/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/classnames-order */
import React from "react";

import { idfrog, pf } from "../assets/images";

import { styles } from "../assets/styles/styles";

function Projects() {
  return (
    <section id="projects" className="bg-secondary h-auto w-full ">
      <div className="container px-5 py-32 mx-auto flex flex-col max-w-6xl sm:mb-32">
        <div className="text-primary">
          <h2 className={`${styles.title_black}`}>Projets</h2>
          <div className="w-20 h-[2px] mx-auto bg-primary mb-3"></div>
          <p className={`${styles.subTitle_black} sm:pt-5 pb-3`}>
            Les compétences que j'ai acquises ainsi que mon expérience sont
            démontrées à travers les projets suivants, en utilisant des exemples
            précis de réalisations. Chacun de ces projets est brièvement décrit,
            tout en mentionnant les technologies qui ont été employées pour les
            mener à bien.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-around mt-[8%] gap-5">
          <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm w-full xs:w-[40%] lg:w-[460px] xl:w-[490px]">
            <a href="https://idfrog-project.onrender.com/" target="blank">
              <img alt="idfrog screen" src={idfrog} className="object-cover" />
            </a>

            <div className="p-4 sm:p-10 flex flex-col items-center">
              <h3 className="text-lg font-medium text-gray-900">IdFrog</h3>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
              </p>

              <a
                href="https://github.com/Paul-Greau/projet-08-idfrog-tp"
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
              >
                Github
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </a>
            </div>
          </article>
          <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm w-full xs:w-[40%] lg:w-[460px] xl:w-[490px]">
            <img alt="Portfolio screen" src={pf} className="object-cover" />

            <div className="p-4 sm:p-10">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900">Portfolio</h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
              </p>

              <a
                href="#"
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
              >
                Find out more
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projects;
