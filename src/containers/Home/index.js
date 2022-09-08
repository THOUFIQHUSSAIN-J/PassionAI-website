import HomeImage from 'images/home.jpg'



export default function Home() {
    return (
        <div className="flex flex-row bg-home-bg">

            <div className="flex flex-col">
                <div className="m-20 w-96">
                    <p className="text-mini-heading text-mini-heading-sz leading-tight">
                        Preparation to create an impact everyday starts right here!
                    </p>
                </div>

                <div className="ml-20 border-slate-50">
                    <p className="text-regular-sz text-regular">Your perfect  career companion</p>
                    <button class="mt-10 mb-10  bg-orange hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded "> Explore more</button>
                </div>
            </div>
           

            <div className="w-full">
                <img src={HomeImage} alt="image not found" className="object-cover" />
            </div>
        </div>
    )
}