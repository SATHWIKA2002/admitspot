import Link from "next/link";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
    <h1> Assignment is available on the route /contact-us</h1>
    <Link href={"/contact-us"} >click here</Link>
    <Toaster />
    </div>
  );
}
