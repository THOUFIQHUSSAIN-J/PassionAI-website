import HomeImage from "images/home.svg";

export default function Home() {
  return (
    <div className="flex flex-row bg-home-bg">
      <div className="flex flex-col">
        <div className="m-20 w-full">
          <p className="text-mini-heading text-mini-heading-sz leading-tight">
          Kickstart your career in Marketing and Sales, We’ll help you choose the best career path in it.
          </p>
        </div>

        <div className="ml-20 border-slate-50">
          <p className="text-regular-sz text-regular font-normal">
          Preparation to create an impact everyday  starts right here!
          </p>
          <button class="mt-10 mb-10  bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ">
            {" "}
            Explore more
          </button>
        </div>
      </div>

      <div className="w-full flex flex-row justify-around">
        <img src={HomeImage} alt="image not found"  
        width={655} height={602}  
        />
      </div>
    </div>
  );
}
