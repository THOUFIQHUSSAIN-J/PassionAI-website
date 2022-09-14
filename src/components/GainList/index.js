import tickImage from "images/tick.png";

export default function GainList({ heading, subheading, list }) {
  return (
    <div className="flex flex-col">
      <div className="text-primary text-mobile-heading-sz md:text-regular-sz">
        {heading}
      </div>
      <div className="text-regular mt-10 md:mt-0 text-mini-regular-sz md:text-sub-heading-sz">
        {subheading}
      </div>
      <ul>
        {list.map((item) => (
          <li className="font-4 mt-8 md:mt-2">
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
    </div>
  );
}
