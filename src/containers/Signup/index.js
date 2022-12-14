import SignUpPop from "images/signup-pop.svg";
import React from "react";
import ContactModal from "../../components/ContactModal";

export default function SignUp() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <section>

      <div className="signup relative">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <p className="p-8 md:m-0 font-semibold text-why-passion-heading text-lg md:text-mini-heading-sz">
              <span className="text-primary">Watch out !</span> {" "} Here comes the best offer
            </p>
          </div>
          <div className="flex flex-col items-center">
              <p className="font-light -mt-6 text-regular text-mini-regular-sz p-8 md:p-0 md:text-regular-sz justify-center">
                We work on a first-come, first-served basis, thus we are only now catching up with the
              </p> {" "}
          </div>
          <div className="flex flex-col items-center">
            <p className="font-light text-regular text-mini-regular-sz p-8 md:p-0 md:text-regular-sz">
              first 50 aspirants.
            </p>
          </div>
          <div className="flex justify-center mt-10 relative">
            <img src={SignUpPop} alt={"signuppop"}/>
            <div className="top-[25%] box-border h-[100px] w-full p-4 bg-border-2 absolute border-border-2 -z-10"/>
          </div>
        </div>

        <div className="flex justify-center mt-10 ">
        <button
            className="animate-pulse w-60 bg-primary hover:bg-blue-700 text-md text-white font-bold py-2 px-4 rounded-lg bg-gradient-to-r from-buttonGradient0 to-buttonGradient100"
            type="button"
            onClick={() => setShowModal(true)}
        >
          {" "}
          Sign Up
        </button>

          {showModal ? (
              <ContactModal setShowModal={setShowModal} showModal={showModal} />
          ) : null}
        </div>

      </div>

    </section>
  );
}
