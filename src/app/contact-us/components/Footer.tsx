import { footerData } from "@/constants/textConstants";
import bottomCard from "@/public/images/bottom-card.svg";
import btmCard from "@/public/images/btm-card.svg";
import Logo from "@/public/images/logo.svg";
import Image from "next/image";

export default function Footer(){
    const iconList=footerData.socialMedia.map((e,i)=>{
        return (
            <Image
                key={i}
                src={e}
                alt="social"
                height={26}
                width={26}
            /> 
        );
    });

    return (
        <div>
            <Image
            src={bottomCard}
            alt="bottom card"
            height={1}
            width={1}
            className="h-[100%] w-[100%] hidden md:block"
            />
            <Image
            src={btmCard}
            alt="bottom card"
            height={1}
            width={1}
            className="h-[100%] w-[100%] block md:hidden"
            />
            <div className="bg-[#263238] flex flex-col px-5 md:px-[10vw] 
            py-5 md:py-12 justify-between md:flex-row">
                <div>
                    <Image 
                        src={Logo}
                        alt="bottom card"
                        height={30}
                        width={140}
                    />
                    <div className="text-xs text-[#BABABA] pt-[10px]">{footerData.copyright}</div>
                    <div className="flex-row gap-4 my-3 flex md:hidden">
                        {iconList}
                    </div>
                    <div className="text-xs text-[#9EBBFD] block md:hidden">{footerData.contactus}</div>
                    <div className="flex flex-row items-center pt-[15px]">
                        <Image 
                            src={footerData.pin}
                            alt="bottom card"
                            height={20}
                            width={10}
                        />
                        <div className="px-2 text-xs font-medium">
                            {footerData.location1.substring(0,16)}
                            <span className="text-[#9ebbfd]">{footerData.location1.substring(16)}</span>
                        </div>
                        <Image 
                            src={footerData.share}
                            alt="bottom card"
                            height={20}
                            width={20}
                        />
                    </div>
                    <div className="flex flex-row items-center pt-[15px]">
                        <Image 
                            src={footerData.pin}
                            alt="bottom card"
                            height={20}
                            width={10}
                        />
                        <div className="px-2 text-xs font-medium">
                            {footerData.location2.substring(0,21)}
                            <span className="text-[#9ebbfd]">{footerData.location2.substring(21)}</span>
                        </div>
                        <Image 
                            src={footerData.share}
                            alt="bottom card"
                            height={20}
                            width={20}
                        />
                    </div>
                    <div className="flex flex-row pt-[15px]">
                        <Image 
                            src={footerData.call}
                            alt="bottom card"
                            height={20}
                            width={10}
                        />
                        <span className="px-2 text-xs font-medium">{footerData.phone}</span>
                    </div>
                    <div className="flex flex-row pt-[15px]">
                        <Image
                            src={footerData.mail}
                            alt="bottom card"
                            height={20}
                            width={10}
                        />
                        <span className="px-2 text-xs font-medium">{footerData.email}</span>
                    </div>
                </div>
                <div className="w-[100%] md:w-[65%] mt-5 md:mt-0">
                    <div className="grid grid-cols-2 gap-4 md:gap-0 md:flex md:flex-row justify-between">
                        {footerData.links.map((e,i)=>{
                            return (
                                <div key={i}>
                                    <div className="text-xs text-[#9EBBFD]">{e.heading}</div>
                                    {e.options.map((ele,inx)=>{
                                        return (
                                            <div key={inx} className="text-xs text-white pt-[15px] cursor-pointer">{ele}</div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex-row-reverse gap-5 mt-10 hidden md:flex">
                        {iconList}
                    </div>
                </div>
            </div>
        </div>
    );
}