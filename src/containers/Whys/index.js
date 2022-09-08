import GuidanceCard from "components/GuidanceCard/index.js";
import suitcase from 'images/briefcase.png'

const guidance = [{
    text: 'Choose your  career path',
    image: suitcase
},{
    text: '1-on-1 membership',
    image: suitcase
},{
    text: 'Get industry ready',
    image: suitcase
}]

export default function Whys() {
    return (
        <div className="bg-home-bg pb-20">
            <div className="ml-20 pt-20">
                <p className="text-mini-heading text-mini-heading-sz leading-tight">
                    <span className="text-heading-title">Why</span> Passion Ai ?
                </p>
            </div>

            <div className="flex lg:justify-between">
                <div className="mt-20 ml-20">
                    <video width="768" height="500" className="" controls>
                        <source src="movie.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="mt-40 mr-60">
                    <p className="text-sub-heading-2 text-sub-heading-sz"><span>"</span>Get to know it <br /> from Ram, our <br /> Passion guru <span>"</span></p>
                </div>
            </div>

            <div className="guidance mt-20">
                <div className="flex flex-col">
                    <div className="flex justify-center"><p className="text-mini-heading text-mini-heading-sz">Let’s choose wisely this time...</p> </div>
                    <div className="flex justify-center mt-4"><p className="text-regular text-regular-sz">Get career guidance and kick start your career</p></div>
                </div>

                <div className="guidance-cards mt-20 flex flex-row justify-around">
                    {guidance.map((item) => (
                         <GuidanceCard image={item.image} text={item.text}/>
                    ))}
                </div>
            </div>


        </div>
    )
}