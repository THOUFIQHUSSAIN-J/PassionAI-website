import TestimonialCard from "components/TestimonialCard";
import { Fragment } from "react";

const testimonials = [
  {
    testimonial:
      "Our aspirants were able to connect with a very clear roadmap to explore their passion and launch a profession, thanks to the absolutely great platform PassionAi. With your assistance in leading our bright academics, we were able to resolve our largest disagreement with ease.",
    username: "Alexa",
    role: "College",
    image: "",
  },
  {
    testimonial:
      "I'm happy that PassionAi for providing me with this fantastic opportunity to guide young people's extraordinary minds. This platform also gave me wonderful memories to treasure forever, and I personally explored and improvised alongside the students.",
    username: "Alexa",
    role: "College",
    image: "",
  },
  {
    testimonial:
      "PassionAi made it possible for me to interact with eminent mentors and industry experts, who gave me in-depth knowledge regarding our chosen industry. Additionally, it taught us how to write resumes and how to sharpen our soft skills in order to succeed in interviews. I'm grateful to PassionAi for assisting me in securing my ideal career and ace interviews.",
    username: "Alexa",
    role: "College",
    image: "",
  },
];

export default function Testimonial() {
  return (
    <Fragment>
      <div className="bg-hoverBorderColor pt-10 pb-20 flex flex-col">
        <div className="flex justify-center">
          <p className="text-regular-sz text-primary">Testimonial</p>
        </div>
        <div className="flex justify-center">
          <p className="text-heading-title-sz text-violet">Success stories</p>
        </div>
        <div className="flex justify-center">
          <p className="text-regular-sz text-violet">
            Let's hear it out from the never-ending journey of our succeeders.{" "}
          </p>
        </div>
        <div className="md:flex md:flex-row justify-around mt-20">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.username}
              testimonial={item.testimonial}
              username={item.username}
              role={item.role}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
}
