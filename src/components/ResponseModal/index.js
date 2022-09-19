import { Fragment } from "react";
import ModalImage from "images/modal-image.svg";
import SuccessImage from "images/response-success.svg";
import FailureImage from "images/response-failure.svg";
import ResponseBG from "images/response-background.svg";
import ResponseCornerBg from "images/response-corner-bg.svg";

export default function ResponseModal({ status, closeModal }) {
  return (
    <div className="flex flex-col p-20">
      {/* <img src={ResponseCornerBg} className="absolute top-0 left-0"></img>
      <img src={ResponseCornerBg} className="absolute bottom-0 right-0"></img> */}

      <div className="flex justify-center">
        <p className="text-header-bg text-lg font-bold">
          {" "}
          {status === "success"
            ? "Well Done, You’re All Set !"
            : "Oops !!!"}{" "}
        </p>
      </div>

      <div className="image flex justify-center relative">
        <Fragment>
          <img src={ResponseBG} className="absolute"></img>
          {status === "success" ? (
            <img src={SuccessImage} className="z-50"/>
          ) : (
            <img src={FailureImage} className="z-50" />
          )}
        </Fragment>
      </div>

      <div className="flex flex-col items-center">
        {status === "success" ? (
          <Fragment>
            <p className="text-md text-sub-heading">
              {" "}
              Thanks for being Awesome !!!
            </p>
            <p className="text-buttonHoverColor text-md">
              {" "}
              We hope you enjoy your journey.
            </p>
            <p className="text-buttonHoverColor text-md">
              A PassionAi Guru will get back to you soon......
            </p>
          </Fragment>
        ) : (
          <Fragment>
            <p className="text-buttonHoverColor text-md">
              {" "}
              Sorry, Something went wrong there !!!
            </p>
            <p className="text-buttonHoverColor text-md"> Please try again.</p>
          </Fragment>
        )}
        <button
          type="submit"
          className="px-6 py-2.5  mt-10 text-white rounded-md bg-gradient-to-r from-formGradient0 to-formGradient100"
          onClick={() => closeModal()}
        >
          {status === "success" ? "Cool" : "Ok"}
        </button>
      </div>
    </div>
  );
}
