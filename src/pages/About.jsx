import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          {" "}
          Darshan
        </span>{" "}
        🗣️
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p className="text-justify">
          I'm a passionate Software Developer who loves turning ideas into
          reality through clean and efficient code.<br/>My focus lies at the
          exciting intersection of web development and AI/ML technologies, where
          I create innovative solutions that push boundaries. What truly drives
          me is crafting intelligent, high performance applications that solve
          real problems. I'm actively seeking internship opportunities to apply
          my skills and further develop as a professional in this rapidly
          evolving field.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Education</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I'm currently pursuing my degree and building a foundation in
            software development through academic coursework and personal
            projects.
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            <VerticalTimelineElement
              date="2027"
              iconStyle={{ background: "#accbe1" }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={"src/assets/icons/despu.webp"} // You'll need to add a university icon
                    alt="Deccan Education Society"
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
              contentStyle={{
                borderBottom: "8px",
                borderStyle: "solid",
                borderBottomColor: "#accbe1",
                boxShadow: "none",
              }}
            >
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold">
                  Bachelor of Technology in Computer Science
                </h3>
                <p
                  className="text-black-500 font-medium text-base"
                  style={{ margin: 0 }}
                >
                  Deccan Education Society, Pune University
                </p>
              </div>

              <ul className="my-5 list-disc ml-5 space-y-2">
                <li className="text-black-500/50 font-normal pl-1 text-sm">
                  Focusing on core computer science concepts and modern web
                  technologies
                </li>
                <li className="text-black-500/50 font-normal pl-1 text-sm">
                  Developing practical skills through coursework and
                  self directed learning
                </li>
                <li className="text-black-500/50 font-normal pl-1 text-sm">
                  Exploring the intersection of AI/ML and web development
                </li>
              </ul>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
