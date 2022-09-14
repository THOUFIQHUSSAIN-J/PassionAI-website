import { Fragment } from "react";
import ModalImage from "images/modal-image.svg";

export default function ContactModal({ showModal, setShowModal }) {
  return (
    <Fragment>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="flex flex-row rounded-lg shadow-lg relative w-full bg-white ">
            {/*body*/}

            <div className="imageContainer p-20  bg-gradient-to-r from-modalGradient to-modalGradient">
              <img
                className="absolute -bottom-6 -left-14"
                src={ModalImage}
                width={272}
                height={473}
              />
            </div>

            <div class="flex flex-col p-6 w-96  rounded items-center">
              <div className="flex flex-row  w-full justify-between">
                <p>Hi There</p>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.2 10.8L10.8 19.2M10.8 10.8L19.2 19.2M29 15C29 22.732 22.732 29 15 29C7.26801 29 1 22.732 1 15C1 7.26801 7.26801 1 15 1C22.732 1 29 7.26801 29 15Z"
                    stroke="#263238"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="flex justify-start w-full mt-5">
                <p className="text-modalText text-xs">
                  Please fill out the details to level-up our interaction...
                  <br />
                  We’ll catch-up soon!!!
                </p>
              </div>
              <div class="form-group mb-6 mt-10">
                <input
                  type="text"
                  class="form-control block w-80 h-14 px-3 py-1.5 border border-solid border-formBorder rounded"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Name"
                />
              </div>
              <div class="form-group mb-6">
                <input
                  type="email"
                  className="form-control block w-80 h-14 px-3 py-1.5 border border-solid border-formBorder rounded"
                  id="exampleInputPassword1"
                  placeholder="email"
                />
              </div>

              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control block w-80  h-14 px-3 py-1.5 border border-solid border-formBorder rounded"
                  id="exampleInputPassword1"
                  placeholder="Phone Number"
                />
              </div>
              <div className="form-group mb-6">
                <textarea
                  id="message"
                  rows="6"
                  className="form-control block p-2.5 w-80 h-14 px-3 py-1.5 border border-solid border-formBorder rounded"
                  placeholder="Comments"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-2.5  w-80 rounded-md bg-gradient-to-r from-formGradient0 to-formGradient100"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </Fragment>
  );
}
