import ContactModal from "components/ContactModal";
import tickImage from "images/tick.png";
import React from "react";

export default function GainList({ heading, subheading, list, institute }) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="flex flex-col">
      <div className="text-primary text-mobile-heading-sz md:text-regular-sz">
        {heading}
      </div>
      {institute ? (
        <div className="text-regular mt-10 md:mt-0 text-mini-regular-sz md:text-sub-heading-sz">
          {subheading}{" "}
        </div>
      ) : (
        <div className="text-regular mt-10 md:mt-0 text-mini-regular-sz md:text-sub-heading-sz">
          {subheading}
        </div>
      )}
      <ul className="mt-8">
        {list.map((item) => (
          <li className="font-4  md:mt-6">
            <div className="inline-flex">
              <svg
                width="23"
                height="19"
                viewBox="0 0 23 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 2L6.38462 17L2 12.5045"
                  stroke="#FF7A00"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="ml-4">{item}</p>
            </div>
          </li>
        ))}
      </ul>

      <button
        class="mt-10 mb-10 w-40 bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg bg-gradient-to-r from-buttonGradient0 to-buttonGradient100"
        type="button"
        onClick={() => setShowModal(true)}
      >
        {" "}
        Learn more
      </button>

      {showModal ? (
        <ContactModal setShowModal={setShowModal} showModal={showModal} />
      ) : null}
    </div>
  );
}
