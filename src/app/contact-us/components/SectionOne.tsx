import Image from "next/image";
import { sectionOneData } from '@/constants/textConstants';
import bcall from "@/public/images/bcall.svg";
import bmail from "@/public/images/bmail.svg";
import bwha from "@/public/images/bwha.svg";
import bfar from "@/public/images/bfar.svg";
import back from "@/public/images/back.svg";

export default function SectionOne(){
    const tileList=sectionOneData.tileData.map((e,i)=>{
        return <Tile 
                key={i}
                id={i}
                icon={e.icon}
                text1={e.text1}
                text2={e.text2}
            />;
    })
    return (
        <div>
            <div 
            className="fixed flex md:hidden flex-row items-center top-0 py-4 w-[100%] text-black bg-white shadow-md shadow-[#AFC8F633]"
            >
                <Image
                    src={back}
                    alt="phone"
                    width={20}
                    height={20}
                    className="scale-50 md:scale-100"
                />
                <p className="text-xs font-medium">{sectionOneData.heading}</p>
            </div>
            <div
            className="text-4xl text-[#263238] font-semibold 
            hidden md:block
            "
            >{sectionOneData.heading}</div>
            <div
            className="text-xs font-medium text-black mt-10
            md:text-2xl
            "
            >{sectionOneData.subheading}</div>
            <div
            className="text-xs font-normal text-[#025B95] mb-10
            md:text-xl"
            >{sectionOneData.info}</div>
            <div
            className="flex flex-row justify-between"
            >{tileList}
            </div>
        </div>
    );
}

interface tileType{
    id:number;
    icon:string;
    text1:string;
    text2:string;
}
function Tile({id,icon,text1,text2}:tileType){
    return (
        <div 
        className={`flex flex-col py-2 md:py-5
        justify-center w-[40vw] md:w-[25vw] shadow-md shadow-[#AFC8F633]
        border rounded-sm border-gray-100
        ${id==2?"hidden md:block":""}
         `}>
            <div className="h-[40px] md:h-[50px] px-5">
                <Image
                    src={icon}
                    alt="phone"
                    width={id==1?50:40}
                    height={40}
                    className="scale-50 md:scale-100"
                />
            </div>
            <div className="text-black text-2xl font-medium hidden md:block px-5"
            >{text1}</div>
            <div className="text-[#03396C] text-xs md:text-base font-medium px-5"
            >{text2}</div>
            <hr className="my-2 block md:hidden" />
            {
                id===0?<div className="flex-row justify-evenly items-center flex md:hidden">
                <Image
                    src={bcall}
                    alt="phone"
                    width={10}
                    height={10}
                />
                <div className="h-[14px] w-[1px] bg-gray-100"></div>
                <Image
                    src={bmail}
                    alt="phone"
                    width={10}
                    height={10}
                />
                <div className="h-[14px] w-[1px] bg-gray-100"></div>
                <Image
                    src={bwha}
                    alt="phone"
                    width={10}
                    height={10}
                />
            </div>:
            <div className="flex-row justify-center flex md:hidden">
                <Image
                    src={bfar}
                    alt="phone"
                    width={10}
                    height={10}
                />
            </div>
            }
        </div>
    );
}