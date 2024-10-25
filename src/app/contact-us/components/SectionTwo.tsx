import { sectionTwoData } from "@/constants/textConstants";
import Image from "next/image";

export default function SectionTwo(){

    const tickList=sectionTwoData.points.map((e,i)=>{
        return (
            <Points 
                key={i}
                text={e}
            />
        );
    })
    return (
        <div className="dynamic-bg
        flex flex-col-reverse md:flex-row border p-5 md:p-10 my-10
        rounded-[8px] border-[#CEDDFE]
        relative overflow-hidden
        "
        >
            <div className="absolute top-5 md:top-10 right-5 md:right-[3.5%] z-10">
                <Image 
                    src={sectionTwoData.img2}
                    alt="tick"
                    width={35}
                    height={30}
                    className="hidden md:block"
                />
                <Image 
                    src={sectionTwoData.antiImg}
                    alt="tick"
                    width={35}
                    height={30}
                    className="block md:hidden"
                />
            </div>
            <div className="absolute bg-[#88B1FF] w-[10%] h-[100%] top-0 right-0 hidden md:block"></div>
            <Image 
                src={sectionTwoData.img1}
                alt="office"
                width={300}
                height={233}
                className="h-[140px] md:h-[233px]"
            />
            <div className="ml-0 md:ml-5 flex flex-col justify-center">
                <div
                className="text-sm md:text-3xl text-[#061A31] font-medium"
                >{sectionTwoData.heading}</div>
                <div
                className="text-xs md:text-xl text-[#061A31] my-2 md:my-6"
                >{sectionTwoData.subheading}</div>
                <div>
                    {tickList}
                </div>
            </div>
        </div>
    );
}

function Points({text}:{text:string}){
    return (
        <div className="flex flex-row items-center">
            <Image 
                src={sectionTwoData.tick}
                alt="tick"
                height={25}
                width={25}
                className="scale-50 md:scale-100"
            />
            <p className="text-[#2476FF] text-xs md:text-base" >{text}</p>
        </div>
    )
}