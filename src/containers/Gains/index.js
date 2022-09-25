import GainList from "components/GainList";
import RoadMap from "images/roadmap.svg";
import WorldMap from "images/worldmap.svg";
import studentgainsimage from "images/student-gains.svg";
import expertgainsimage from "images/expert-gains.svg";
import institutegainsimage from "images/graduations.svg";
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
  heading: "Institutes Journey",
  subheading:
    "The best assistant to innovate a standard career guidance journey for every last aspirant.",

  gains: [
    "To comprehend and evaluate each student's competency level.",
    "To make your students more skilled and employable.",
    "Rank your college with 100% GUARANTEED PLACEMENTS.",
  ],
};

export default function Gains() {
  return (
    <section>
      {/***
       * STUDENT GAINS
       */}
      <div className="flex flex-row pt-20 pb-20 relative justify-around">
        <img
          src={rightDotted}
          alt="dotted"
          className="hidden md:block md:absolute right-0 top-10"
        />
        <div className="students-gain">
          <p className="text-regular font-semibold ml-10 mr-10 text-regular-sz md:text-heading-title-sz md:ml-20">
            What do <span className="text-primary">Students</span> gain from
            PassionAi ?{" "}
          </p>
          <div className="flex flex-col  md:flex-row justify-evenly">
            <div className="p-10 md:pl-20 md:pt-10 relative md:w-6/12">
              <img src={studentgainsimage} alt="students" />
            </div>

            <div className="p-10 md:pt-10 md:pl-0 md:w-6/12">
              <GainList
                heading={student.heading}
                subheading={student.subheading}
                list={student.gains}
                student={true}
              />
            </div>
          </div>
        </div>
      </div>
      {/***
       * Road Map Image
       */}
      {/*to be changed*/}
      <div className="flex justify-center pt-0 pb-20">
        <img src={RoadMap} alt="road map"/>
      </div>

      {/***
       * EXPERT GAINS
       */}
      <div className="flex flex-row  md:pt-10 md:pb-20 justify-around">
        <div className="expert-gain">
          <p className="text-regular font-semibold ml-10 mr-10 text-regular-sz md:text-heading-title-sz md:ml-20">
            What do <span className="text-primary">Experts</span> gain from
            PassionAi ?{" "}
          </p>

          <div className="flex flex-col md:hidden">
            <div className="p-10">
              <img src={expertgainsimage} alt="experts" />
            </div>

            <div className="pt-10 pl-10 md:pt-10 md:pl-20 md:w-5/12">
              <GainList
                heading={experts.heading}
                subheading={experts.subheading}
                list={experts.gains}
              />
            </div>

            <div className="hidden md:block p-10  md:pt-10 md:w-7/12 relative">
              <img src={expertgainsimage} alt="experts" />
            </div>
          </div>
        </div>
      </div>

      {/***
       * World Map Image
       */}
      <div className="flex justify-center md:pb-20 ">
        <img src={WorldMap} alt="world map" />
      </div>

      {/***
       * INSITITUTE GAINS
       */}
      <div className="flex flex-row pt-20 pb-20 relative justify-around">
        <img
          src={leftDotted}
          alt="dotted"
          className="hidden md:block md:absolute left-0 -top-[175px]"
        />
        <div className="institute-gain">
          <p className="text-regular font-semibold ml-10 mr-10 text-regular-sz md:text-heading-title-sz md:ml-20">
            What do <span className="text-primary">Institutes</span> gain from
            PassionAi ?{" "}
          </p>

          <div className="flex flex-col  md:flex-row justify-evenly">
            <div className="p-10 md:pl-20 md:pt-10 relative md:w-6/12">
              <img
                src={institutegainsimage}
                alt="institute"
                width="647"
                height="647"
              />
            </div>

            <div className="p-10 md:pt-10 md:pl-0 md:w-6/12">
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
    </section>
  );
}
