import { Fragment } from "react";
import Quotes from "images/quotes.svg";
import Smilie from "images/smilie.svg";

export default function TestimonialCard({
  testimonial,
  username,
  role,
  image,
}) {
  return (
    <Fragment>
      <div class="p-4 max-w-sm m-auto bg-white rounded-lg w-80 h-full mt-20  md:mt-0 md:ml-20 relative group hover:cursor-pointer hover:shadow-box-primary">
        <div className="absolute -top-6 left-8 w-16 h-16 rounded-full bg-regular group-hover:bg-primary">
          <img src={Quotes} alt="quotes" className="mt-4 ml-4" width={28} height={18} />
        </div>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 mt-10">
          {testimonial}
        </p>
        <figcaption class="flex justify-start  space-x-3 mt-10">
          <img class="w-9 h-9 rounded-full" src={image} alt="profile" />
          <div class="space-y-0.5 font-medium dark:text-white text-left">
            <div className="text-black">{username}</div>
            <div class="text-xs text-modalText">{role}</div>
          </div>
        </figcaption>
        <img src={Smilie} alt="smilie" width={84} height={81} className="hidden group-hover:block group-hover:-right-10 group-hover:-bottom-14 group-hover:absolute" />
      </div>

    </Fragment>
  );
}
