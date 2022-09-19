import GainList from "components/GainList";
import studentgainsimage from "images/student-gains.svg";
import RoadMap from "images/roadmap.svg";
import WorldMap from "images/worldmap.svg";
import expertgainsimage from "images/expert-gains.svg";
import institutegainsimage from "images/institute-gains.svg";
import { Fragment } from "react";
import studentDotted from "images/students-dotted.svg";
import expertsDotted from "images/experts-dotted.svg";
import rightDotted from "../../images/right-side-dotted.svg";
import leftDotted from "../../images/left-side-dotted.svg";

const student = {
  heading: "Self development  journey",
  subheading: "We will make you a complete All-round professional.",
  gains: [
    "An exclusive community section to know about the latest industry trends.",
    "Multiple stages to explore through a industry-specific content.",
    "Providing a  solitary job portal section for your betterment.",
    "You can engage in 1-on-1 interactions with mentors and experts.",
  ],
};

const experts = {
  heading: "Industry experts’ Journey",
  subheading:
    "Share your knowledge and experience to assist thousands of aspirants in climbing up the career ladder.",
  gains: [
    "An opportunity to share your experience with a large communitty.",
    "A lifetime additional stream of revenue.",
    "Become the next leading career influencer.",
    "Engage in your flexible time.",
  ],
};

const institutes = {
  heading:
    "The best assistant to innovate a standard career guidance journey for every last aspirant.",

  gains: [
    "To comprehend and evaluate each student's competency level.",
    "To make your students more skilled and employable.",
    "Rank your college with 100% GUARANTEED PLACEMENTS.",
  ],
};

export default function Gains() {
  return (
    <Fragment>
      {/***
       * STUDENT GAINS
       */}
      <div className="flex flex-row pt-20 pb-20 relative">
        <img src={rightDotted} className="absolute right-0 top-10" />
        <div className="students-gain">
          <p className="text-regular font-semibold ml-10 mr-10 text-regular-sz md:text-heading-title-sz md:ml-20">
            What do <span className="text-primary">Students</span> gain from
            PassionAi ?{" "}
          </p>
          <div className="flex flex-col  md:flex-row justify-evenly">
            <div className="p-10 md:pl-20 md:pt-10 relative w-6/12">
              <img src={studentgainsimage} />
              <img
                src={studentDotted}
                width="60"
                height="60"
                className="absolute bottom-14 left-16 -z-10"
              />
            </div>

            <div className="p-10 md:pt-10 md:pl-0 w-6/12">
              <GainList
                heading={student.heading}
                subheading={student.subheading}
                list={student.gains}
              />
            </div>
          </div>
        </div>
      </div>
      {/***
       * Road Map Image
       */}
      {/*to be changed*/}
      <div className="flex flex-row pt-0 pb-20">
        <img src={RoadMap} className="w-full" />
      </div>

      {/***
       * EXPERT GAINS
       */}
      <div className="flex flex-row  md:pt-10 md:pb-20">
        <div className="expert-gain">
          <p className="text-regular font-semibold ml-10 mr-10 text-regular-sz md:text-heading-title-sz md:ml-20">
            What do <span className="text-primary">Experts</span> gain from
            PassionAi ?{" "}
          </p>

          <div className="flex flex-col  md:flex-row justify-evenly">
            <div className="md:pt-10 md:pl-20 w-5/12">
              <GainList
                heading={experts.heading}
                subheading={experts.subheading}
                list={experts.gains}
              />
            </div>

            <div className="p-10  md:pt-10 w-7/12 relative">
              <img src={expertgainsimage} />
              <img
                src={expertsDotted}
                width="60"
                height="60"
                className="absolute bottom-28 right-28 -z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/***
       * World Map Image
       */}
      <div className="flex justify-center pb-20">
        <img src={WorldMap} />
      </div>

      {/***
       * INSITITUTE GAINS
       */}
      <div className="flex flex-row pt-20 pb-20 relative">
        <img src={leftDotted} className="absolute left-0 -top-[175px]" />
        <div className="institute-gain">
          <div className="flex justify-center">
            <p className="text-regular font-semibold ml-10 mr-10 text-regular-sz md:text-heading-title-sz md:ml-20">
              What do <span className="text-primary">Institutes</span> gain from
              PassionAi ?{" "}
            </p>
          </div>

          <div className="flex flex-col  md:flex-row justify-evenly">
            <div className="p-10 md:pl-20 md:pt-10 relative w-6/12">
              <img src={institutegainsimage} width="647" height="647"/>
              <img
                  src={expertsDotted}
                  width="60"
                  height="60"
                  className="absolute bottom-6 right-2 -z-10"
              />
            </div>

            <div className="p-10 md:pt-10 md:pl-0 w-6/12">
              <GainList
                heading={institutes.heading}
                subheading={institutes.subheading}
                list={institutes.gains}
                institute={true}
              />
            </div>
          </div>
        </div>

      </div>
    </Fragment>
  );
}
