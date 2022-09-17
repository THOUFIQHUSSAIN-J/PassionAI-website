import { Fragment } from "react";
import Login from "images/login.svg";
import FacebookImage from "images/facebook.svg";
import GoogleImage from "images/google.svg";
import LinkedInImage from "images/linkedIn-signin.svg";
import PasswordEye from "images/password-eye.svg";

export default function Signin() {
  return (
    <Fragment>
      <div className="absolute top-0 left-0 w-full -z-50">
        <img src={Login} className="w-full h-fit " />
      </div>
      <div className="flex flex-row">
        <div className="basis-8/12">
        </div>
        <div className="basis-4/12 rounded-2xl flex flex-col bg-white w-full p-10 m-10 md:ml-20 rounded">
          <div className="flex justify-center mt-8 mb-8">
            <p className="text-sub-heading-sz ">Sign In</p>
          </div>
          <div class="mb-6">
            <label for="base-input" class="block mb-2 text-xs-1">
              Username
            </label>
            <input
              type="text"
              id="base-input"
              placeholder="Username"
              class="bg-formBackground border text-black dark:border-primary  rounded-lg block w-full p-2.5"
            />
          </div>
          <div class="mb-6 relative ">
            <label for="base-input" class="block mb-2 text-xs-1">
              Password
            </label>
            <input
              type="password"
              placeholder="*********"
              id="base-input"
              class="bg-formBackground relative border text-black dark:border-primary rounded-lg block w-full p-2.5"
            />

            <div className="absolute top-12 right-4">
              <img src={PasswordEye} />
            </div>

            <div className="flex justify-end">
              <a href="#">
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

          <div class="relative flex py-5 items-center mt-14">
            <div class="flex-grow border-t border-gray-400"></div>
            <span class="flex-shrink mx-4 text-gray-400">or login with</span>
            <div class="flex-grow border-t border-gray-400"></div>
          </div>

          <div className="button-container flex flex-row">
            <button
              type="submit"
              className="px-6 py-2.5 h-12 mr-10  w-full text-black rounded-md bg-formBackground inline-flex hover:bg-white hover:border hover:border-buttonHoverColor justify-center"
            >
              <img src={GoogleImage} width={17} height={23} />
              <p className="ml-4">Google</p>
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 h-12 mr-10  w-full text-black rounded-md bg-formBackground inline-flex hover:bg-white hover:border hover:border-buttonHoverColor justify-center"
            >
              <img src={FacebookImage} width={17} height={23} />
              <p className="ml-4">Facebook</p>
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 h-12 mr-10  w-full text-black rounded-md bg-formBackground inline-flex hover:bg-white hover:border hover:border-buttonHoverColor justify-center"
            >
              <img src={LinkedInImage} width={17} height={23} />
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
