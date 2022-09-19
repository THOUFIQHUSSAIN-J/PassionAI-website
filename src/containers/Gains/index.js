import GainList from "components/GainList";
import studentgainsimage from "images/student-gains.svg";
import RoadMap from "images/roadmap.svg";
import WorldMap from "images/worldmap.svg";
import expertgainsimage from "images/expert-gains.svg";
import institutegainsimage from "images/institute-gains.svg";
import { Fragment } from "react";

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
  subheading: "We will make you a complete All-round professional.",
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
      <div className="flex flex-row pt-20 pb-20">
        <div className="students-gain">
          <p className="text-regular font-semibold ml-10 mr-10 text-regular-sz md:text-heading-title-sz md:ml-20">
            What do <span className="text-primary">Students</span> gain from
            PassionAi ?{" "}
          </p>
          <div className="flex flex-col  md:flex-row justify-between">
            <div className="p-10 md:pl-20 md:pt-10">
              <img src={studentgainsimage} width="600" height="400" />
            </div>

            <div className="p-10 md:pt-10 md:pl-20">
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
      <div className="flex flex-row pt-20 pb-20">
        <img src={RoadMap} className="w-full" />
      </div>

      {/***
       * EXPERT GAINS
       */}
      <div className="flex flex-row  md:pt-20 md:pb-20">
        <div className="expert-gain">
          <p className="text-regular font-semibold ml-10 mr-10 text-regular-sz md:text-heading-title-sz md:ml-20">
            What do <span className="text-primary">Experts</span> gain from
            PassionAi ?{" "}
          </p>

          <div className="flex flex-col  md:flex-row justify-between">
            <div className="p-10 md:pt-10 md:pl-20">
              <GainList
                heading={experts.heading}
                subheading={experts.subheading}
                list={experts.gains}
              />
            </div>

            {/*to be changed*/}
            <div className="p-10 md:pl-20 md:pt-10">
              <img src={expertgainsimage} width="600" height="460" />
            </div>
          </div>
        </div>
      </div>

      {/***
       * World Map Image
       */}
      {/*to be changed*/}
      <div className="flex justify-center pt-20 pb-20">
        <img src={WorldMap} />
      </div>

      {/***
       * INSITITUTE GAINS
       */}
      <div className="flex flex-row pt-20 pb-20">
        <div className="institute-gain">
          <p className="text-regular font-semibold ml-10 mr-10 text-regular-sz md:text-heading-title-sz md:ml-20">
            What do <span className="text-primary">Institutes</span> gain from
            PassionAi ?{" "}
          </p>
          <div className="flex flex-col  md:flex-row justify-between">
            <div className="p-10 md:pl-20 md:pt-10">
              {/*to be changed*/}
              <img src={institutegainsimage} width="600" height="400" />
            </div>

            <div className="p-10 md:pt-10 md:pl-20">
              <GainList
                heading={institutes.heading}
                subheading={institutes.subheading}
                list={institutes.gains}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
