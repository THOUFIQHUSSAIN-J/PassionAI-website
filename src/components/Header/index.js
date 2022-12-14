/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import HomeLogo from "../../images/home-logo.svg";
import { NavHashLink } from 'react-router-hash-link';


const Headings = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Why PassionAi ?",
    link: "/#WhyPassion",
  },
  {
    name: "Contact us",
    link: "/#ContactUs",
  },
];

export default function Header() {
  return (
    <Fragment>
      <div className="bg-header-bg text-white">
        <div className="flex items-center justify-between h-14 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1 pl-10">
            <a href="/">
              <span className="sr-only">PassionAi</span>

              <img
                src={HomeLogo}
                alt="home logo"
                width={120}
                height={40}
                left={33}
                top={16}
              />
            </a>
          </div>
          <div className="hidden md:flex h-full items-center relative">
            {Headings.map((item) => (
              <div key={item.name} className="flex flex-col items-center ml-10 group">
                <NavHashLink
                  to={item.link}
                  className="text-base font-medium hover:text-primary"
                >
                  {item.name}
                </NavHashLink>
                <div key={item.name} className="absolute -bottom-0 rounded-t-xl w-4 h-2 group-hover:border group-hover:border-primary group-hover:bg-primary"></div>
              </div>
            ))}
          </div>

          <div className="hidden md:block items-center justify-end md:flex md:flex-1 lg:w-0  pr-10">
            {/*<a*/}
            {/*  target="_blank"*/}
            {/*  rel="noreferrer"*/}
            {/*  href={`${process.env.REACT_APP_APP_URL}/register`}*/}
            {/*  className="whitespace-nowrap text-base font-medium hover:bg-gradient-to-r hover:from-formGradient0 hover:to-formGradient100 px-4 py-1 rounded-md"*/}
            {/*>*/}
            {/*  Sign Up*/}
            {/*</a>*/}
            {/*<a*/}
            {/*  target="_blank"*/}
            {/*  rel="noreferrer"*/}
            {/*  href={`${process.env.REACT_APP_APP_URL}/login`}*/}
            {/*  className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md  bg-indigo-600 px-4 py-1 text-base font-medium text-white shadow-sm hover:bg-indigo-700 hover:bg-gradient-to-r hover:from-formGradient0 hover:to-formGradient100"*/}
            {/*>*/}
            {/*  Sign In*/}
            {/*</a>*/}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
