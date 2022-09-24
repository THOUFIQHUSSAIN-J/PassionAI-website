import { Fragment } from "react";
import mailGIF from "images/mail.gif";
import teamGIF from "images/team.gif";
import contactDotted from "images/contact-us-dotted.svg"
import rightDotted from "images/right-side-dotted.svg"
import { useForm } from 'react-hook-form';
import axios from "axios"

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios.post("https://passionaiari.com/api/contact_details/", data).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  };
  return (
    <Fragment>
      <div className="contact-us bg-contact-us-bg relative mb-10" id="ContactUs">
        <img src={rightDotted} className="hidden md:absolute right-0 top-0" alt="dotted"/>
        <div className="flex justify-center">
          <p className="text-regular text-heading-title-sz mt-10 font-bold"> Get in Touch</p>
        </div>

        <div className="flex flex-row-reverse mt-10  justify-around">
          {/**
           * Form
           */}
          <div class="flex  flex-col p-6 bg-formBackground w-4/12 m-10 md:ml-20 rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-group mb-6">
              <input
                type="text"
                class="form-control block w-full  h-14 px-3 py-1.5 border border-solid border-formBorder rounded"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="name"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
            </div>
            <div class="form-group mb-6">
              <input
                type="email"
                className="form-control block w-full  h-14 px-3 py-1.5 border border-solid border-formBorder rounded"
                id="exampleInputPassword1"
                placeholder="email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
            </div>

            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block w-full  h-14 px-3 py-1.5 border border-solid border-formBorder rounded"
                id="exampleInputPassword1"
                placeholder="phone_number"
                {...register("phone_number", {
                  required: true,
                  maxLength: 100,
                })}
              />
            </div>

            <div className="form-group mb-6">
              <textarea
                type="text"
                className="form-control block w-full h-24 px-3 py-1.5 border border-solid border-formBorder rounded"
                id="exampleInputPassword1"
                placeholder="comment"
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
                <img src={mailGIF} alt="mail gif" className="" width="100" height="100"></img>
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
    </Fragment>
  );
}
