import passionaiLogo from "images/footer-passionai-logo.svg";
import footerImage from "images/footer-image.png";
import footerLeftImage from "images/footer-bottom-left.svg";
import footerRightImage from "images/footer-bottom-right.svg";
import instagram from "images/instagram.png";
import linkedin from "images/linkedin-footer.svg";

const company = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Why PassionAi ?",
    link: "/#WhyPassion",
  },
  {
    name: "Terms of Service",
    link: "/terms",
  },
  {
    name: "Privacy Policy",
    link: "/privacy",
  },
  // {
  //   name: "Blogs",
  //   link: "",
  // },
  // {
  //   name: "About us",
  //   link: "",
  // },
];

export default function Footer() {
  return (
    <footer className="p-4 bg-footer-bg sm:p-6 dark:bg-gray-900 relative">
      <div className="md:flex md:justify-between relative">
        <div className="mb-6 md:mb-0 mt-4 md:pl-20">
          <div className="flex justify-center">
            <img src={passionaiLogo} className="mr-3 h-183" alt="FlowBite Logo" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold  text-primary uppercase">
              Company
            </h2>
            <ul className="text-white no-underline">
              {company.map((item) => (
                <li key={item.name} className="font-4 mt-2">
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-primary">
              Let's catch up
            </h2>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/passion-ai-ari-llp/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <img src={linkedin} alt="linkedin" width={51} height={51} />
                <span className="sr-only">Facebook page</span>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/passionai_ari/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <img src={instagram} alt="instagram" width={51} height={51} />
                <span className="sr-only">Instagram page</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10 mb-10 md:absolute right-0 -bottom-28  z-50">
          <img src={footerImage} alt="footer" width="200" height="200"></img>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <p className="text-copyright font-light text-xs-1 md:text-mini-regular-sz">
          Copyright 2022 Passion Ai Ari Inc. All rights Reserved
        </p>
      </div>

      <div className="hidden md:block flex justify-center  md:absolute left-0 bottom-0">
        <img src={footerLeftImage} alt="footer" width="85" height="100"></img>
      </div>
      <div className="hidden md:block flex justify-center md:absolute right-0 top-0">
        <img src={footerRightImage} alt="footer" width="85" height="200"></img>
      </div>
    </footer>
  );
}
