import { Fragment, useState } from "react";
import ModalImage from "images/modal-image.svg";
import ResponseModal from "components/ResponseModal";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function ContactModal({ showModal, setShowModal }) {
  // eslint-disable-next-line
  const [response, setResponse] = useState("");
  const [showLoader, setShowLoader] = useState(false);

  const API_URL = process.env.REACT_APP_API_URL;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setShowLoader(true);
    axios
      .post(`${API_URL}/api/contact_details/`, data)
      .then(function (response) {
        setShowLoader(true);
        if (response.status === 200) {
          setResponse(200);
          setShowLoader(false);
        }
      })
      .catch(function (error) {
        console.log(error);
        setShowLoader(false);
      });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Fragment>
      <div className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}

          <div className="flex flex-row rounded-2xl shadow-lg relative w-full bg-white ">
            {/*body*/}
            {response === "" ? (
              <Fragment>
                <div className="hidden md:block imageContainer rounded-l-2xl p-32  bg-gradient-to-r from-modalGradient0 to-modalGradient100">
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
                          maxLength: 36,
                        })}
                      />
                      {errors.name && errors.name.type === "required" && (
                        <span className="mt-10 text-primary">
                          Name is required
                        </span>
                      )}
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
                      {errors.email && errors.email.type === "required" && (
                        <span className="mt-10 text-primary">
                          Email is required
                        </span>
                      )}
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
                          pattern:
                            /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
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
                        })}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="inline-flex justify-center px-6 py-2.5  w-80 rounded-md text-white bg-gradient-to-r from-formGradient0 to-formGradient100"
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
