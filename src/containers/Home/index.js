import React from "react";
import ContactModal from "../../components/ContactModal";
import HomeImage from "../../images/home.svg";
import WatchVideo from "images/watch-video.svg";
import VideoModal from "../../components/VideoModal";

export default function Home() {
  const [showModal, setShowModal] = React.useState(false);
  const [showVideo, setVideoModal] = React.useState(false);
  return (
    <div className="flex justify-around bg-home-background bg-no-repeat bg-cover relative -mt-0 pb-20">
      {/*<img src={HomeIcons} className="absolute w-full -z-10" />*/}
      <div className="flex flex-col">
        <div className="m-10 md:ml-20 md:mt-32">
          <p className="text-sub-heading text-mobile-heading-sz font-bold font-Nunito md:tracking-wide md:text-xl md:text-sub-heading md:font-extrabold md:w-[482px] leading-tight">
            <span className="text-primary">EXPLORE.</span> FIND. CHOOSE.
          </p>

          <p className="md:font-MerriweatherSans md:text-mini-heading md:text-regular-sz mt-4 md:leading-[43px] md:w-[600px]">
            Want to Kickstart your career in{" "}
            <span className="text-primary">Marketing</span> and{" "}
            <span className="text-primary">Sales.</span>{" "}
          </p>

          <p className="md:font-Lato md:tracking-tight md:text-mini-heading md:s md:leading-[55px] md:font-medium mt-4 md:leading-[43px] md:w-[585px]">
            #We’ll help you choose the{" "}
            <span className="text-primary">best career path</span> in it.
          </p>
        </div>

        <div className="ml-10 md:ml-20 md:-mt-10 relative border-slate-50 ">
          <button
            onClick={() => setShowModal(true)}
            type="button"
            className="animate-bounce mt-10 mb-10 md:w-[211px] md:h-[54px] md:text-md-s md:justify-around bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg bg-gradient-to-r from-formGradient0 to-formGradient100 "
          >
            {" "}
            Explore more
          </button>

          <button
              onClick={() => setVideoModal(true)}
              type="button"
              className="ml-4 md:ml-10 md:text-md-s mt-10"
          >
            <img src={WatchVideo} className="w-40 md:w-full" alt="watch" />
          </button>

          {showModal ? (
            <ContactModal setShowModal={setShowModal} showModal={showModal} />
          ) : null}
          {showVideo ? (
              <VideoModal setVideoModal={setVideoModal} showVideo={showVideo} />
          ) : null}
        </div>
      </div>

      <div className="hidden md:flex flex-row justify-around pt-16 md:ml-20">
        <img src={HomeImage} alt="home" width={685} height={702} />
      </div>
    </div>
  );
}
