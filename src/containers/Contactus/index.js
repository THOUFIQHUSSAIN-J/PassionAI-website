// eslint-disable-next-line
import { Fragment, useState } from "react";
import mailGIF from "images/mail.gif";
import teamGIF from "images/team.gif";
import rightDotted from "images/right-side-dotted.svg";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function ContactUs() {
  const [responseStatus, setResponseStatus] = useState(0);
  const [showLoader, setShowLoader] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setShowLoader(true);
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/contact_details/`, data)
      .then(function (response) {
        if (response.status === 200) {
          setResponseStatus(200);
          setShowLoader(false);
        }
      })
      .catch(function (error) {
        console.log(error);
        setShowLoader(false);
      });
  };
  return (
    <section id="ContactUs">
      <div className="contact-us bg-contact-us-bg relative mb-10">
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
                  {errors.name && errors.name.type === "required" && (
                    <span className="mt-10 text-primary">Name is required</span>
                  )}
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
                  {errors.email && errors.email.type === "required" && (
                    <span className="mt-10 text-primary">
                      Email is required
                    </span>
                  )}
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
                  {errors.phone_number &&
                    errors.phone_number.type === "required" && (
                      <span className="mt-10 text-primary">
                        Phone number is required
                      </span>
                    )}
                </div>

                <div className="form-group mb-6">
                  <textarea
                    type="text"
                    className="form-control block w-full h-24 px-3 py-1.5 border border-solid border-formBorder rounded"
                    id="exampleInputPassword1"
                    placeholder="Comment"
                    {...register("comment", {
                      required: false,
                    })}
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex justify-center px-6 py-2.5  text-white w-full rounded-md bg-gradient-to-r from-formGradient0 to-formGradient100"
                >
                  {showLoader ? (
                    <Fragment>
                    <svg
                      aria-hidden="true"
                      class="mr-2 w-8 h-8 text-violet animate-spin dark:text-primary fill-violet"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    </Fragment>
                    
                  ) : null}
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
