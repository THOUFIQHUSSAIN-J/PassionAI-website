import { Fragment } from "react";
import Login from "images/login.svg";
import FacebookImage from "images/facebook.svg";
import GoogleImage from "images/google.svg";
import LinkedInImage from "images/linkedIn-signin.svg";
import PasswordEye from "images/password-eye.svg";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Signin() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://passionaiari.com/api/contact_details/", data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Fragment>
      <div className="absolute top-0 left-0 w-full -z-50">
        <img src={Login} alt="login" className="w-full h-fit " />
      </div>
      <div className="flex flex-row">
        <div className="basis-8/12"></div>
        <div className="basis-4/12 rounded-2xl flex flex-col bg-white w-full p-10 m-10 md:ml-20 rounded">
          <div className="flex justify-center mt-8 mb-8">
            <p className="text-sub-heading-sz ">Sign In</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label for="base-input" className="block mb-2 text-xs-1">
                Username
              </label>
              <input
                type="text"
                id="base-input"
                placeholder="Username"
                className="bg-formBackground border text-black dark:border-primary  rounded-lg block w-full p-2.5"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
            </div>
            <div className="mb-6 relative ">
              <label for="base-input" className="block mb-2 text-xs-1">
                Password
              </label>
              <input
                type="password"
                placeholder="*********"
                id="base-input"
                className="bg-formBackground relative border text-black dark:border-primary rounded-lg block w-full p-2.5"
                {...register("password", {
                  required: true,
                })}
              />

              <div className="absolute top-12 right-4">
                <img src={PasswordEye} alt="passwordeye" />
              </div>

              <div className="flex justify-end">
                <a href="#ContactUs">
                  <p className="text-primary text-xs-1">Forget Password?</p>
                </a>
              </div>
            </div>
            <button
              type="submit"
              className="px-6 py-2.5  w-full text-white rounded-md bg-gradient-to-r from-formGradient0 to-formGradient100"
            >
              Submit
            </button>
          </form>

          <div className="relative flex py-5 items-center mt-14">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400">or login with</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>

          <div className="button-container flex flex-row">
            <button
              type="submit"
              className="px-6 py-2.5 h-12 mr-10  w-full text-black rounded-md bg-formBackground inline-flex hover:bg-white hover:border hover:border-buttonHoverColor justify-center"
            >
              <img src={GoogleImage} alt="google" width={17} height={23} />
              <p className="ml-4">Google</p>
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 h-12 mr-10  w-full text-black rounded-md bg-formBackground inline-flex hover:bg-white hover:border hover:border-buttonHoverColor justify-center"
            >
              <img src={FacebookImage} alt="facebook" width={17} height={23} />
              <p className="ml-4">Facebook</p>
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 h-12 mr-10  w-full text-black rounded-md bg-formBackground inline-flex hover:bg-white hover:border hover:border-buttonHoverColor justify-center"
            >
              <img src={LinkedInImage} alt="linkedin" width={17} height={23} />
              <p className="ml-4">LinkedIn</p>
            </button>
          </div>

          <div className="flex justify-center mt-14">
            <p className="text-black">
              New user? <span className="text-primary">Sign up</span>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
