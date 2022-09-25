import TestimonialCard from "components/TestimonialCard";
import InstituteImage from "images/institue-image.jpg";
import MentorImage from "images/mentor-image.jpg";
import rightDotted from "images/right-side-dotted.svg";
import StudentImage from "images/student-image.jpg";

const testimonials = [
  {
    testimonial:
      "Our aspirants were able to connect with a very clear roadmap to explore their passion and launch a profession, thanks to the absolutely great platform PassionAi. With your assistance in leading our bright academics, we were able to resolve our largest disagreement with ease.",
    username: "Durai Kannan",
    role: "Institute",
    image: InstituteImage,
  },
  {
    testimonial:
      "I'm happy that PassionAi for providing me with this fantastic opportunity to guide young people's extraordinary minds. This platform also gave me wonderful memories to treasure forever, and I personally explored and improvised alongside the students.",
    username: "Abilash",
    role: "Mentor",
    image: MentorImage,
  },
  {
    testimonial:
      "PassionAi made it possible for me to interact with eminent mentors and industry experts, who gave me in-depth knowledge regarding our chosen industry. Additionally, it taught us how to write resumes and how to sharpen our soft skills in order to succeed in interviews. I'm grateful to PassionAi for assisting me in securing my ideal career and ace interviews.",
    username: "Sri Hari",
    role: "Student",
    image: StudentImage,
  },
];

export default function Testimonial() {
  return (
    <section id="testimonial">
      <div className="bg-testimonial-bg pt-10 pb-20 relative justify-around border-2">
        <img
          src={rightDotted}
          alt="dotted"
          className="hidden md:block md:absolute right-0 -top-[100px]"
        />
        <div className="flex justify-center ml-4 mr-4 md:m-0">
          <p className="text-regular-sz text-primary">Testimonials</p>
        </div>
        <div className="flex justify-center  mr-4 ml-4 mt-8 md:m-0">
          <p className="text-mobile-heading-sz md:text-heading-title-sz text-violet font-bold">
            Success stories
          </p>
        </div>
        <div className="flex justify-center ml-10 mr-4 mt-8 md:m-0">
          <p className="text-mobile-heading-sz md:text-regular-sz text-violet">
            Let's hear it out from the never-ending journey of our succeeders.{" "}
          </p>
        </div>
        <div className="flex flex-col md:flex md:flex-row md:justify-around mt-8 md:mt-20">
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
    </section>
  );
}
