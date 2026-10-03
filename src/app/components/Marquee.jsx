import React from 'react';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

const Marquee =async () => {
    const res=await fetch("https://news-api-v2.vercel.app/api/news?limit=10")
    const data=await res.json();
    const headline=data.data
    
    return (
       
     <div className=" bg-red-700 text-white">
  <div className="flex container mx-auto">
    
    <div className="bg-red-800 py-1 font-bold px-5">
      সর্বশেষ
    </div>

    <MarqueeText
      className="py-1"
      direction="right"
      duration={10}
    >
      {headline.map((h) => (
        <span key={h.id}>
          <span>{h.title}</span>
          <span className="mx-5">•</span>
        </span>
      ))}
    </MarqueeText>

  </div>
</div>

    );
};

export default Marquee;