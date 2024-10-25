import phoneImg from '@/public/images/phone-img.svg';
import emailImg from '@/public/images/email.svg';
import whatsappImg from '@/public/images/whatsapp.svg';
import imgOne from "@/public/images/office.svg";
import imgTwo from "@/public/images/arrow.svg";
import antiImg from "@/public/images/anti-arrow.svg";
import tickImg from "@/public/images/tick.svg";
import callImg from "@/public/images/call.svg";
import mailImg from "@/public/images/mail.svg";
import tempMap from "@/public/images/temp.svg";
import pinImg from "@/public/images/pin.svg";
import shareImg from "@/public/images/share.svg";
import phone from "@/public/images/calling.svg";
import mailing from "@/public/images/emaill.svg";
import linkedin from "@/public/images/linkedin.svg";
import insta from "@/public/images/insta.svg";
import wha from "@/public/images/wha.svg";
import fb from "@/public/images/fb.svg";
import yt from "@/public/images/yt.svg";
import tt from "@/public/images/tt.svg";

export const sectionOneData={
    heading:"Contact Us",
    subheading:"Resolve your Education and Immigration Queries with our experts",
    info:"Reach out to us to inquire about various services offered at AdmitSpot",
    tileData:[
        {
            icon:phoneImg,
            text1:"Call",
            text2:"+1-905-783-7708"
        },
        {
            icon:emailImg,
            text1:"E-mail",
            text2:"info@admitspot.com"
        },
        {
            icon:whatsappImg,
            text1:"Whatsapp",
            text2:"+1-905-783-7708"
        },
    ]
};

export const sectionTwoData={
    heading:"Virtual Office",
    subheading:"Schedule a session with one of our Experts.",
    points:[
        "Free consultation up to 30 mins",
        "Join From anywhere",
        "Get all your queries answered"  
    ],
    img1:imgOne,
    img2:imgTwo,
    antiImg:antiImg,
    tick:tickImg
}

export const sectionThreeData={
    submit:"Submit",
    btnText:"Request a callback",
    heading:"Request a callback from us",
    places:[
        {
            title:"Ontario Office",
            time:"Mon-Fri 9:30am - 6pm",
            location:"Suite1500, 4 Robert Speck Pkwy, Mississauga, Ontario, Canada, L4Z 1S1",
            number:"+1-905-783-7708",
            mail:"info@admitspot.com",
            icon1:callImg,
            icon2:mailImg,
            map:tempMap
        },
        {
            title:"New Brunswick Office ",
            time:"Mon-Fri 9:30am - 6pm",
            location:"Suite 406, 82 Westmorland Street, Fredericton, New Brunswick, Canada, E3B 3L3",
            number:"+1-506-999-7708",
            mail:"info@admitspot.com",
            icon1:callImg,
            icon2:mailImg,
            map:tempMap
        }
    ]
};

export const footerData={
    copyright:"© 2023 AdmitSpot, Inc. All rights reserved.",
    location1:"Ontario, Canada Get Directions",
    location2:"New Brunswick, Canada Get Directions",
    phone:"+1-9057837708",
    email:"info@admitspot.com",
    contactus:"Contact Us:",
    pin:pinImg,
    call:phone,
    mail:mailing,
    share:shareImg,
    links:[
        {
            heading:"Company",
            options:["About us","Contact us"]
        },
        {
            heading:"Solutions",
            options:["Students","Universities","Employers"]
        },
        {
            heading:"Support",
            options:["Immigration services","Blogs","Virtual offices"]
        },
        {
            heading:"Legal",
            options:["Terms & Conditions","Privacy policy","Cookies policy"]
        },
    ],
    socialMedia:[linkedin,insta,wha,fb,yt,tt]
};