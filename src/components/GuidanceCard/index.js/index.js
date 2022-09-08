export default function GuidanceCard({ image, text }) {
  return (
    <div class="block p-6 w-80 flex flex-col  bg-white rounded-lg border  border-radius-2 border-border-1">
      <div className="flex justify-center">
        <img src={image} width={100} height={100} alt="not available" />
      </div>
      <div className="flex justify-center mt-4">
        <p class="font-normal text-gray-700 dark:text-gray-400">{text}</p>
      </div>
    </div>
  );
}
