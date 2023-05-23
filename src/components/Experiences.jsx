import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { work } from "../data";
import { styles } from "../assets/styles/styles";

function Experiences() {
  return (
    <section id="experiences" className="bg-primary h-auto w-full py-32 ">
      <h2 className={`${styles.title} `}>Expériences</h2>
      <div className="flex flex-row justify-center">
        <a
          href="../../cv_paul_greau.pdf"
          target="_blank"
          className={`${styles.subTitle_black} border-2 border-white border-solid py-3 px-6 rounded-full bg-secondary hover:text-secondary hover:bg-primary`}
        >
          Télécharger mon CV
        </a>
      </div>
      <div className="mt-20 flex flex-col ">
        <VerticalTimeline>
          {work.map((work) => (
            <VerticalTimelineElement
              key={`work-${work.id}`}
              contentStyle={{
                background: "#fff",
                color: "#fff",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #fff" }}
              date={work.date}
              iconStyle={{ background: work.iconBg }}
              icon={
                <div className="flex h-full w-full items-center justify-center">
                  <img
                    src={work.icon}
                    alt={work.company_name}
                    className="h-[60%] w-[60%] object-contain"
                  />
                </div>
              }
            >
              <div>
                <h3 className="text-[24px] font-bold text-black">
                  {work.title}
                </h3>
                <p
                  className="text-[16px] font-semibold text-black"
                  style={{ margin: 0 }}
                >
                  {work.company_name}
                </p>
              </div>
              <ul className="ml-5 mt-5 list-disc space-y-2">
                {work.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className="pl-1 text-[14px] tracking-wider text-black"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
export default Experiences;
