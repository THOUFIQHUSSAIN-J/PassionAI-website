import GuidanceCard from "components/GuidanceCard/index.js";
import mentorship from "images/mentorship.svg";
import suitcase from "images/briefcase.svg";
import careerpath from "images/careerpath.svg";
import BriefcaseGirl from "images/briefcase-girl.svg";
import VideoPointer from "images/video-pointer.svg";
import IntroVideo from "images/introVideo.mp4";
import helloGIF from "images/hello.gif";
import Quotes from "images/why-quotes.svg";
import rightDotted from "images/right-side-dotted.svg";
import leftDotted from "images/left-side-dotted.svg";
import VideoThumbnail from "images/video-thumbnail.svg";

const guidance = [
  {
    text: "Choose Your Career Path",
    image: careerpath,
  },
  {
    text: "1-on-1 Membership",
    image: mentorship,
  },
  {
    text: "Get Industry Ready",
    image: suitcase,
  },
];

export default function Whys() {
  return (
    <div className="pb-20" id="WhyPassion">
      <div className="flex justify-center md:block pt-10 md:p-0 md:ml-20 md:pt-0 relative">
        <img
          src={rightDotted}
          alt="dotted"
          className="hidden md:block md:absolute right-0 top-[50px]"
        />
        <p className="text-mini-heading font-bold text-mobile-heading-sz md:text-mini-heading-sz leading-tight">
          <span className="text-heading-title">Why</span> PassionAi ?
        </p>
      </div>

      <div className="flex lg:justify-between ">
        <div className="p-10 md:p-0 md:mt-20 md:ml-20 relative cursor-pointer">
          <video
            width="768"
            height="500"
            className="rounded-2xl md:z-10"
            controls
            autoplay
            poster={VideoThumbnail}
          >
            <source src={IntroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="md:absolute md:-right-[285px] -top-24 transform -scale-x-100 md:-z-10">
            <img
              src={helloGIF}
              alt="hello"
              width="300"
              height="300"
              className="hidden md:block"
            ></img>
          </div>
        </div>

        <div className="flex mt-48 mr-28 hidden md:block relative">
          <div className="quotes relative">
            <img
              src={Quotes}
              alt="quotes"
              width={20}
              height={10}
              className="absolute -left-6 top-0"
            />
            <p className="text-why-passion-heading text-why-passion-heading-sz font-bold leading-[70px]">
              Get to know it <br /> from{" "}
              <span className="text-heading-title">Ram</span>, our <br />{" "}
              Passion guru.
            </p>
            <img
              src={Quotes}
              alt="quotes"
              width={20}
              height={20}
              className="absolute -right-5 bottom-2 rotate-180"
            />
          </div>
          <div className="md:absolute md:right-48 md:top-15 w-8/12">
            <img
              src={VideoPointer}
              alt="pointer"
              width="400"
              height="300"
            ></img>
          </div>
        </div>
      </div>

      <div className="guidance mt-40 relative">
        <img
          src={leftDotted}
          alt="dotted"
          className="hidden md:block md:absolute left-0 -top-[50px]"
        />
        <div className="flex flex-col">
          <div className="flex justify-center">
            <p className="md:m-0 font-semibold text-why-passion-heading text-mobile-heading-sz md:text-mini-heading-sz">
              Let’s choose wisely this time...
            </p>{" "}
          </div>
          <div className="hidden md:absolute md:right-10 md:-bottom-12 md:-z-10">
            <img
              src={BriefcaseGirl}
              alt="briefcase"
              width="437"
              height="466"
            ></img>
          </div>
          <div className="flex flex-col items-center mt-4 ">
            <div>
              {" "}
              <p className="font-light text-regular text-mini-regular-sz p-8 md:p-0 md:text-regular-sz ">
                Preparation to create an impact everyday  starts right here!
              </p>
            </div>

          </div>
        </div>

        <div className="guidance-cards p-10 md:mt-20 flex flex-col items-center md:flex-row md:justify-around">
          {guidance.map((item) => (
            <GuidanceCard image={item.image} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
}
