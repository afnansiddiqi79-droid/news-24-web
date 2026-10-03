import Image from "next/image";
import React from "react";
import Navlinks from "./Navlinks";

const Navber = () => {
    const date=new Date().toLocaleDateString("bn-BD",
        {
            dateStyle:"full"
        }
    )
  return (
    <div>
      <div className="container mx-auto">
        <nav className="grid grid-cols-3">
          <div>
            
          </div>

          <div className="flex mt-3 gap-2 justify-start">
            <Image
              className="w-10 h-10"
              src="/logo.webp"
              alt="Logo"
              width={40}
              height={40}
            />
            <div>
            <h2 className="font-bold text-xl
             text-red-700">Bangla News 24</h2>
             
             <p className="font-extralight 
              text-gray-600 ">{date}</p>
             </div>
          </div>

          <div className="flex  gap-3 items-center justify-end">
            <button className="font-extralight
             btn  " >সাইন ইন</button>
<button className="bg-red-700 
font-extralight
 btn text-white ">সাইন আপ</button>
          </div>
        </nav>
        <Navlinks></Navlinks>
      </div>
    </div>
  );
};

export default Navber;