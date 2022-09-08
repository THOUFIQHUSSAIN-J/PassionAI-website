import tickImage from "images/tick.png";

export default function GainList({ heading, subheading, list }) {
  return (
    <div className="flex flex-col">
      <div className="text-primary text-regular-sz">{heading}</div>
      <div className="text-regular text-sub-heading-sz">{subheading}</div>
      <ul>
        {list.map((item) => (
          <li className="font-4 mt-2">
            <div className="inline-flex">
              <img src={tickImage} width="20" height="5" />
              <p className="ml-4">{item}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
