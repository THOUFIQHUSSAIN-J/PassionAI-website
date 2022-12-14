export default function GuidanceCard({ image, text }) {
  return (
    <div className="block p-6 w-full  md:w-80 h-44 flex flex-col  mt-10 md:mt-0  bg-white rounded-lg border  border-radius-2 border-border-1 hover:cursor-pointer hover:bg-hoverColor hover:border-hoverBorderColor">
      <div className="flex justify-center h-20">
        <img
          className="z-50"
          src={image}
          width={65}
          height={65}
          alt="not available"
        />
      </div>
      <div className="flex justify-center mt-4">
        <p className=" text-sub-heading  text-mobile-heading-sz">{text}</p>
      </div>
    </div>
  );
}
