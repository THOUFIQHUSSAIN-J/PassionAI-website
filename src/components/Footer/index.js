import passionai from "images/passionai.png";
import passionaiLogo from "images/passionai-logo.png";
import footerImage from "images/footer-image.png";
import instagram from "images/instagram.png"
import linkedin from "images/linkedin.png";

const company = [
  {
    name: "Home",
    link: "",
  },
  {
    name: "Why PassionAi",
    link: "",
  },
  {
    name: "Blogs",
    link: "",
  },
  {
    name: "About us",
    link: "",
  },
];

export default function Footer() {
  return (
    <footer class="p-4 bg-footer-bg sm:p-6 dark:bg-gray-900">
      <div class="md:flex md:justify-between relative">
        <div class="mb-6 md:mb-0 mt-4 md:pl-20">
          <div className="flex justify-center">
            <img src={passionaiLogo} class="mr-3 h-8" alt="FlowBite Logo" />
          </div>
          <div className="flex justify-center mt-10">
            <img src={passionai} class="mr-3 h-8" alt="FlowBite Logo" />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 class="mb-6 text-sm font-semibold  text-primary uppercase">
              Company
            </h2>
            <ul class="text-white no-underline">
              {company.map((item) => (
                <li className="font-4 mt-2">
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-primary">
              Let's catch up
            </h2>
            <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <img src={linkedin} width={51} height={51} />
                <span class="sr-only">Facebook page</span>
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <img src={instagram} width={51} height={51} />
                <span class="sr-only">Instagram page</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10 mb-10 md:absolute right-0 -bottom-28  z-50">
            <img src={footerImage} width="200" height="200"></img>
            </div>
      </div>

      <div className="flex justify-center mt-10">
        <p className="text-copyright text-xs md:text-mini-regular-sz">
          Copyright 2021 PassionAi Inc. 
          All rights Reserved
        </p>
      </div>
    </footer>
  );
}
