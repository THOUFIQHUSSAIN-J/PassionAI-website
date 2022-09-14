import { Fragment } from "react";
import mailGIF from "images/mail.gif"
import teamGIF from "images/team.gif"

export default function ContactUs() {
  return (
    <Fragment>
      <div className="contact-us relative mb-40">
        <div className="flex justify-center">
          <p className="text-regular text-heading-title-sz"> Get in Touch</p>
        </div>

        <div className="flex flex-row mt-10">
            {/**
             * Form
             */
            }
          <div class="flex flex-col p-6 bg-formBackground w-96 m-10 md:ml-20 rounded items-center">
            <div class="form-group mb-6">
              <input
                type="text"
                class="form-control block w-64 h-14 px-3 py-1.5 border border-solid border-formBorder rounded"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Name"
              />
            </div>
            <div class="form-group mb-6">
              <input
                type="email"
                className="form-control block w-64 h-14 px-3 py-1.5 border border-solid border-formBorder rounded"
                id="exampleInputPassword1"
                placeholder="email"
              />
            </div>

            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block w-64  h-14 px-3 py-1.5 border border-solid border-formBorder rounded"
                id="exampleInputPassword1"
                placeholder="Phone Number"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2.5  w-64 rounded-md bg-gradient-to-r from-formGradient0 to-formGradient100"
            >
              Submit
            </button>
          </div>
          {
            /**
             * GIFs
             */
          }

          <div className="gif-container hidden md:block">
            <div className="flex flex-col">
             <div className="inline-flex ml-10"> 
                    <p className="mt-6 text-primary text-regular-sz">Drop us a line</p>
                    <img src={mailGIF} className="" width="100" height="100"></img>
             </div>

             <div className="">
                 <p className="ml-10 font-semibold text-sub-heading-sz">Finish it off to stay on track.</p>
             </div>
            </div>
           
           
           
            <div className="md:absolute md:right-0 md:top-18 md:-z-50">
                <img src={teamGIF} width="500" height="200"></img>
            </div>
           
          </div>
        </div>
      </div>
    </Fragment>
  );
}
