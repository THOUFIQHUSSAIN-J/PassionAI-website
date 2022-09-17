import HomeImage from "images/home.svg";

export default function Home() {
  return (
    <div className="flex flex-row bg-home-background -mt-0 pb-18">
      <div className="flex flex-col borde">
        <div className="m-10 md:m-20 w-616">
          <p className="text-mini-heading text-mobile-heading-sz font-bold md:text-mini-heading-sz leading-tight">
            Want to Kickstart your career in <span className="text-primary">Marketing</span> and <span className="text-primary">Sales</span>, We’ll help you choose the best career path in it.
          </p>
        </div>

        <div className="ml-10 md:ml-20 border-slate-50">
          <p className="text-home-regular-sz font-light md:text-regular-sz text-regular font-normal">
          Preparation to create an impact everyday  starts right here!
          </p>
          <button class="mt-10 mb-10  bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md bg-gradient-to-r from-formGradient0 to-formGradient100 ">
            {" "}
            Explore more
          </button>
        </div>
      </div>

      <div className="w-full hidden md:block flex flex-row justify-around pt-20">
        <img src={HomeImage} alt="image not found"  
        width={655} height={702}
        />
      </div>
    </div>
  );
}
