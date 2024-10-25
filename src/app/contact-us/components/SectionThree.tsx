"use client";

import { sectionThreeData } from "@/constants/textConstants";
import Image from "next/image";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

// Define the type for the places in sectionThreeData
interface Place {
    title: string;
    time: string;
    location: string;
    icon1: string;
    number: string;
    icon2: string;
    mail: string;
    map: string;
}

interface MapCardProps {
    val: Place; // Use the defined Place type for val prop
}

export default function SectionThree() {
    const mapList = sectionThreeData.places.map((e, i) => {
        return (
            <MapCard 
                key={i}
                val={e}
            />
        );
    });

    return (
        <div className="flex flex-col-reverse md:grid md:grid-cols-[60%_40%] gap-0 md:gap-10">
            <Form />
            <div className="text-black text-xs font-medium block md:hidden pt-7 pb-3">
                {sectionThreeData.heading}
            </div>
            <div className="flex flex-col gap-5 md:gap-10">
                {mapList}
            </div>
            <Toaster />
        </div>
    );
}

interface InputType {
    placeholder: string;
    name: string;
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Type for handleChange
}

function InputText({ placeholder, name, value, handleChange }: InputType) {
    return (
        <input 
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={handleChange}
            className="
                h-[30px] md:h-[50px] border border-[#D3E2FF] md:border-[#88B1FF] 
                rounded-[8px] px-2 md:px-4 text-xs md:text-base
                mb-5 md:mb-0
                text-[#858686]" 
        />
    );
}

function Form() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        number: "",
        country: "",
        serve: ""
    });

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) { // Use the event type
        const { value, name } = event.target;
        setForm({
            ...form,
            [name]: value
        });
    }

    function onSubmit() {
        console.log("click");
        
        if (form.name === "" || form.email === "" || form.number === "" || form.country === "") {
            toast.error("Fill out mandatory fields!");
            return;
        }
    }

    return (
        <div className="
            flex flex-col
            justify-around
            bg-[#F2F4FF] md:bg-[#D3E2FF] p-5 md:p-10
            border rounded-[8px] 
            border-[#D3E2FF] md:border-[#72A2FF]">
            <InputText  
                placeholder={"Full Name*"}
                name={"name"}
                value={form.name}
                handleChange={handleChange}
            />
            <InputText  
                placeholder={"Email*"}
                name={"email"}
                value={form.email}
                handleChange={handleChange}
            />
            <InputText  
                placeholder={"Phone number*"}
                name={"number"}
                value={form.number}
                handleChange={handleChange}
            />
            <InputText  
                placeholder={"Country of Residence*"}
                name={"country"}
                value={form.country}
                handleChange={handleChange}
            />
            <InputText  
                placeholder={"How can we serve you"}
                name={"serve"}
                value={form.serve}
                handleChange={handleChange}
            />
            <button className="bg-[#263238] rounded-[8px] h-[30px] md:h-[50px] hidden md:block"
                onClick={onSubmit}>
                {sectionThreeData.btnText}
            </button>
            <button className="bg-[#263238] rounded-3xl h-[30px] md:h-[50px] block md:hidden"
                onClick={onSubmit}>
                {sectionThreeData.submit}
            </button>
        </div>
    );
}

function MapCard({ val }: MapCardProps) { // Use the defined MapCardProps type
    return (
        <div className="
            md:border rounded-[15px] 
            border-[#C2CAFA] text-black 
            md:text-center md:p-8">
            <div className="text-sm md:text-2xl font-medium">{val.title}</div>
            <div className="text-xs md:text-base text-[#061A31] py-2 md:py-3">{val.time}</div>
            <div className="text-left text-[#858686] text-xs md:text-sm">{val.location}</div>
            <div className="flex flex-row justify-between py-3">
                <div className="flex flex-row gap-1">
                    <Image
                        src={val.icon1}
                        alt="call"
                        height={10}
                        width={10}
                    />
                    <p className="text-xs md:text-sm font-normal text-[#03396C]">{val.number}</p>
                </div>
                <div className="flex flex-row gap-1">
                    <Image
                        src={val.icon2}
                        alt="mail"
                        height={10}
                        width={10}
                    />
                    <p className="text-xs md:text-sm font-normal text-[#03396C]">{val.mail}</p>
                </div>
            </div>
            <Image 
                src={val.map}
                alt="map"
                height={60}
                width={300}
                className="w-[100%]"
            />
        </div>
    );
}
