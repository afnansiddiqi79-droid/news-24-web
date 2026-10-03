import Link from 'next/link';
import React from 'react';

const Navlinks = async() => {
    const res=await fetch("https://news-api-v2.vercel.app/api/categories")
  const data=await res.json();
  const nav=data.data;
  const filternav=nav.filter(n=>n.scrapable)
    return (
        <div className='container mx-auto'>
        <div className='flex gap-4 justify-center mt-4  '>
         <Link href={"/"}>হোম</Link>
          {filternav.map((n,ind)=><Link key={ind} href={n.slug}>{n.title}</Link>)}  
        </div>
        </div>
    );
};

export default Navlinks;