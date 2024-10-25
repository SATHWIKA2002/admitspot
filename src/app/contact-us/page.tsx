import Footer from "./components/Footer";
import SectionOne from "./components/SectionOne";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";

export default function ContactUs(){
    return (
        <div className="bg-white">
        <div
        className="px-[5vw] md:px-[10vw] py-10 bg-white">
            <SectionOne />
            <SectionTwo />
            <SectionThree />
        </div>
        <Footer />
        </div>
    );
}