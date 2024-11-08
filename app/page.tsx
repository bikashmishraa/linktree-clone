import Image from "next/image";
import connectDB from "../lib/mongodb";

try {
  connectDB();
}
catch (error) {
  console.log(error);
  console.log('mongodb connection in page.tsx')
}
export default function Home() {
  return (
    <main>
      <section className="min-h-screen bg-[#254f1a] grid grid-cols-2">
        <div className="mx-[5vw] text-[#d2e823]">
          <h1 className=" text-[5vw] leading-[95%] mt-[50%] text-[#d2e823] italic font-bold font-modern-antiqua-regular">
          Get Everything in single click
          </h1>
          <p className="mt-[5%] text-[1.5vw]">
          Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          
          <div className="mt-[5%] flex gap-2">
            <input type="text" placeholder="linktre/username" className="bg-white p-3 rounded text-black"/>
            <button className="bg-[#d2e823] text-[#6b6b5f] p-2 rounded-xl">Claim your Linktree</button>
          </div>
        </div>
        <div className="mt-[25%]">
          <Image src={"/home.png"} alt="logo" width={500} height={500}/>
        </div>
      </section>
      <section className="min-h-screen bg-red-900 ">

      </section>
    </main>
  );
}
