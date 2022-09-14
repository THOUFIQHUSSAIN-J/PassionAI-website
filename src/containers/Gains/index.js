import GainList from "components/GainList";
import studentgainsimage from "images/student-gains.png";
import expertgainsimage from "images/expert-gains.png";
import institutegainsimage from "images/institute-gains.jpg";
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
          <p className="text-regular text-heading-title-sz md:ml-20">
            What do <span className="text-primary">Students</span> gain from
            PassionAi ?{" "}
          </p>
          <div className="flex flex-col  md:flex-row justify-between">
            <div className="pl-20 pt-10">
              <img src={studentgainsimage} width="600" height="400" />
            </div>

            <div className="pt-10 pl-20">
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
       * EXPERT GAINS
       */}
      <div className="flex flex-row  pt-20 pb-20">
        <div className="expert-gain">
          <div className="flex justify-end">
            <p className="text-regular text-heading-title-sz mr-20">
              What do <span className="text-primary">Experts</span> gain from
              PassionAi ?{" "}
            </p>
          </div>

          <div className="flex flex-col  md:flex-row justify-between">
            <div className="pt-10 pl-20">
              <GainList
                heading={experts.heading}
                subheading={experts.subheading}
                list={experts.gains}
              />
            </div>

            <div className="pr-20 pt-10">
              <img src={expertgainsimage} width="600" height="400" />
            </div>
          </div>
        </div>
      </div>
      {/***
       * INSITITUTE GAINS
       */}
      <div className="flex flex-row pt-20 pb-20">
        <div className="institute-gain">
          <p className="text-regular text-heading-title-sz ml-20">
            What do <span className="text-primary">Institutes</span> gain from
            PassionAi ?{" "}
          </p>
          <div className="flex flex-col  md:flex-row justify-between">
            <div className="pl-20 pt-10">
              <img src={institutegainsimage} width="600" height="400" />
            </div>

            <div className="pt-10 pl-20">
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
