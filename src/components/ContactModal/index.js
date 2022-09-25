import { Fragment, useState } from "react";
import ModalImage from "images/modal-image.svg";
import ResponseModal from "components/ResponseModal";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function ContactModal({ showModal, setShowModal }) {
  // eslint-disable-next-line
  const [response, setResponse] = useState("");
  const API_URL = process.env.REACT_APP_API_URL;

  const {
    register,
    handleSubmit,
    // eslint-disable-next-line
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post(`${API_URL}/api/contact_details/`, data)
      .then(function (response) {
        if (response.status === 200) {
          setResponse(200);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Fragment>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}

          <div className="flex flex-row rounded-2xl shadow-lg relative w-full bg-white ">
            {/*body*/}
            {response === "" ? (
              <Fragment>
                <div className="imageContainer rounded-l-2xl p-32  bg-gradient-to-r from-modalGradient0 to-modalGradient100">
                  <img
                    className="absolute -bottom-6 right-96"
                    src={ModalImage}
                    alt="modal"
                    width={272}
                    height={473}
                  />
                </div>

                <div className="flex flex-col p-6 w-96  rounded items-center">
                  <div className="flex flex-row  w-full justify-between">
                    <p className="font-bold text-header-bg text-regular-sz ml-2">
                      Hiii There!!!
                    </p>
                    <svg
                      width="30"
                      cursor="pointer"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => setShowModal(false)}
                    >
                      <path
                        d="M19.2 10.8L10.8 19.2M10.8 10.8L19.2 19.2M29 15C29 22.732 22.732 29 15 29C7.26801 29 1 22.732 1 15C1 7.26801 7.26801 1 15 1C22.732 1 29 7.26801 29 15Z"
                        stroke="#263238"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex justify-start w-full mt-5 ml-4">
                    <p className="text-modalText text-xs">
                      Please fill out the details to level-up our interaction...
                      <br />
                      We’ll catch-up soon!!!
                    </p>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-6 mt-10">
                      <input
                        type="text"
                        className="form-control block w-80 h-14 px-3 py-1.5 border border-solid border-formBorder rounded"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Name"
                        {...register("name", {
                          required: true,
                          message: "Please Enter a Valid Name",
                          maxLength: 36,
                        })}
                      />
                    </div>
                    <div className="form-group mb-6">
                      {/**
                       * EMAIL
                       */}
                      <input
                        type="email"
                        className="form-control block w-80 h-14 px-3 py-1.5 border border-solid border-formBorder rounded"
                        id="exampleInputPassword1"
                        placeholder="Email"
                        {...register("email", {
                          required: true,
                          pattern: /^\S+@\S+$/i,
                        })}
                      />
                    </div>

                    <div className="form-group mb-6">
                      {/**
                       * Phone Number
                       */}
                      <input
                        type="text"
                        className="form-control block w-80  h-14 px-3 py-1.5 border border-solid border-formBorder rounded"
                        id="exampleInputPassword1"
                        placeholder="Phone Number"
                        {...register("phone_number", {
                          required: true,
                          maxLength: 15,
                          message: "Please Enter a Valid Phone Number",
                          pattern:
                            /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
                        })}
                      />
                    </div>
                    <div className="form-group mb-6">
                      {/**
                       * Text area
                       */}
                      <textarea
                        id="message"
                        rows="6"
                        className="form-control block p-2.5 w-80 h-20 px-3 py-1.5 border border-solid border-formBorder rounded"
                        placeholder="Comment"
                        {...register("comment", {
                          required: false,
                          minLength: 100,
                          maxLength: 255,
                        })}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="px-6 py-2.5  w-80 rounded-md text-white bg-gradient-to-r from-formGradient0 to-formGradient100"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </Fragment>
            ) : (
              <ResponseModal
                status={
                  response !== 0 && !(response >= 200 && response <= 300)
                    ? "failure"
                    : "success"
                }
                closeModal={closeModal}
              />
            )}
          </div>
        </div>
      </div>
      <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
    </Fragment>
  );
}
