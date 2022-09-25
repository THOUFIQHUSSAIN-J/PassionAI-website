// eslint-disable-next-line
import { Fragment, useState } from "react";
import mailGIF from "images/mail.gif";
import teamGIF from "images/team.gif";
import rightDotted from "images/right-side-dotted.svg";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function ContactUs() {
  const [responseStatus, setResponseStatus] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/contact_details/`, data)
      .then(function (response) {
        if (response.status === 200) {
          setResponseStatus(200);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <section id="ContactUs">
      <div
        className="contact-us bg-contact-us-bg relative mb-10"
      >
        <img
          src={rightDotted}
          className="hidden md:block md:absolute right-0 top-0"
          alt="dotted"
        />
        <div className="flex justify-center">
          <p className="text-regular text-heading-title-sz mt-10 font-bold">
            {" "}
            Get in Touch
          </p>
        </div>

        <div className="flex flex-row-reverse mt-10  justify-around">
          {/**
           * Form
           */}
          <div className="flex flex-col p-6 bg-formBackground  m-10 md:ml-20 md:w-4/12 rounded-lg ">
            {responseStatus !== 0 &&
            !(responseStatus >= 200 && responseStatus <= 300) ? (
              <div className="pb-10">
                <p className="text-buttonHoverColor text-md ">
                  {" "}
                  Sorry, Something went wrong there !!!
                </p>
                <p className="text-buttonHoverColor text-md">
                  {" "}
                  Please try again.
                </p>
              </div>
            ) : null}
            {responseStatus >= 200 && responseStatus <= 300 ? (
              <div className="p-10">
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
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-6">
                  <input
                    type="text"
                    className="form-control block w-full  h-14 px-3 py-1.5 border border-solid border-formBorder rounded"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Name"
                    {...register("name", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  {errors.name && errors.name.type === "required" && <span className="mt-10 text-primary">Name is required</span>}
                </div>
                <div className="form-group mb-6">
                  <input
                    type="email"
                    className="form-control block w-full  h-14 px-3 py-1.5 border border-solid border-formBorder rounded"
                    id="exampleInputPassword1"
                    placeholder="Email"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                   {errors.email && errors.email.type === "required" && <span className="mt-10 text-primary">Email is required</span>}
                </div>

                <div className="form-group mb-6">
                  <input
                    type="text"
                    className="form-control block w-full  h-14 px-3 py-1.5 border border-solid border-formBorder rounded"
                    id="exampleInputPassword1"
                    placeholder="Phone Number"
                    {...register("phone_number", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  {errors.phone_number && errors.phone_number.type === "required" && <span className="mt-10 text-primary">Phone number is required</span>}
                </div>

                <div className="form-group mb-6">
                  <textarea
                    type="text"
                    className="form-control block w-full h-24 px-3 py-1.5 border border-solid border-formBorder rounded"
                    id="exampleInputPassword1"
                    placeholder="Comment"
                    {...register("comment", {
                      required: false,
                      maxLength: 100,
                    })}
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-2.5  text-white w-full rounded-md bg-gradient-to-r from-formGradient0 to-formGradient100"
                >
                  Submit
                </button>
              </form>
            )}{" "}
            {/** response 200 else case ends here */}
          </div>
          {/**
           * GIFs
           */}

          <div className="gif-container hidden md:flex ">
            <div className="flex flex-col ">
              <div className="inline-flex">
                <p className="mt-6 text-primary text-regular-sz">
                  Drop us a line
                </p>
                <img
                  src={mailGIF}
                  alt="mail gif"
                  className=""
                  width="100"
                  height="100"
                ></img>
              </div>

              <div className="">
                <p className="font-semibold text-sub-heading-sz">
                  Finish it off to stay on track...!!!
                </p>
              </div>
            </div>

            <div className="md:absolute md:left-28 md:-bottom-[135px] md:-z-50">
              <img src={teamGIF} alt="team gif" width="500" height="200"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
