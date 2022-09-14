import GuidanceCard from "components/GuidanceCard/index.js";
import mentorship from "images/mentorship.svg";
import suitcase from "images/briefcase.svg";
import careerpath from "images/careerpath.svg";
import BriefcaseGirl from "images/briefcase-girl.svg";
import VideoPointer from "images/video-pointer.svg";
import IntroVideo from "images/introVideo.mp4";
import helloGIF from "../../images/hello.gif";

const guidance = [
  {
    text: "Choose your  career path",
    image: careerpath,
  },
  {
    text: "1-on-1 membership",
    image: mentorship,
  },
  {
    text: "Get industry ready",
    image: suitcase,
  },
];

export default function Whys() {
  return (
    <div className="pb-20">
      <div className="flex justify-center md:block pt-10 md:p-0 md:ml-20 md:pt-20">
        <p className="text-mini-heading text-mobile-heading-sz md:text-mini-heading-sz leading-tight">
          <span className="text-heading-title">Why</span> PassionAi ?
        </p>
      </div>

      <div className="flex lg:justify-between">
        <div className="p-10 md:p-0 md:mt-20 md:ml-20">
          <video width="768" height="500" className="" controls autoplay>
            <source src={IntroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/*to be changed*/}
        <div className="md:absolute md:right-0 md:top-18 md:-z-50">
          <img src={helloGIF} width="300" height="300"></img>
        </div>

        <div className="mt-40 mr-60 hidden md:block">
          <p className="text-why-passion-heading text-why-passion-heading-sz">
            <span>“</span>Get to know it <br /> from <span className="text-heading-title">Ram</span>, our <br /> Passion
            guru <span>"</span>
          </p>
          {/*to be changed*/}
          <div className="md:absolute md:right-0 md:top-15 md:-z-50">
            <img src={VideoPointer} width="437" height="466"></img>
          </div>
        </div>
      </div>

      <div className="guidance mt-20">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <p className="text-mini-heading text-mobile-heading-sz md:text-mini-heading-sz">
              Let’s choose wisely this time...
            </p>{" "}
          </div>
          {/*to be changed*/}
          <div className="md:absolute md:right-0 md:top-15 md:-z-50">
            <img src={BriefcaseGirl} width="437" height="466"></img>
          </div>
          <div className="flex justify-center mt-4">
            <p className="text-regular text-mini-regular-sz md:text-regular-sz w-627">
              Get career guidance and kick start your career In Marketing & Sales
            </p>
          </div>
        </div>

        <div className="guidance-cards md:mt-20 flex flex-col items-center md:flex-row md:justify-around">
          {guidance.map((item) => (
            <GuidanceCard image={item.image} text={item.text} />
          ))}
        </div>
      </div>

    </div>
  );
}
