/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import HomeImage from "../../images/home.svg";
import HomeLogo from "../../images/home-logo.png";

const Headings = [
  {
    name: "Home",
    link: "",
  },
  {
    name: "Why Passion ai?",
    link: "",
  },
  {
    name: "Contact us",
    link: "",
  },
];

export default function Header() {
  return (
    <Fragment>
      <div className="bg-header-bg text-white">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1 pl-10">
            <a href="#">
              <span className="sr-only">PassionAi</span>

              <img src={HomeLogo} alt="image not found"
                   width={185.27} height={51.34} left={33} top={16}
              />

            </a>
          </div>

          {Headings.map((item) => (
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              {item.name}
            </a>
          ))}

          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0  pr-10">
            <a
              href="#"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Sign in
            </a>
            <a
              href="#"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
