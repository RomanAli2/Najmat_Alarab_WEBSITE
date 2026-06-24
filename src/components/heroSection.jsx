import React from "react";
import '../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
function HeroSection(){
    const ArrayForCards=[
        {icon:'fa-solid fa-passport',heading:"Taking Care",para:"Immigration & Visa Process"},
        {icon:'fa-solid fa-id-card',heading:"Quick & Easy Visa Application",para:"Apply Online"},
        {icon:'fa-solid fa-handshake',heading:"Advice",para:"Expert & Experince Consultants"},

    ]
    AOS.init();
    return(
        <>
     <section id="Home" className="relative flex items-center justify-center pt-15 h-[95vh] w-full">
    
    <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center"></div>
    <div className="absolute inset-0 bg-linear-to-r from-black/80 to-black/50"></div>
    <div   data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="800"className="relative z-10 ">
    <span className="text-white   text-center flex-col flex ">
    <p className="text-xl">Welcome to</p>
    <h1 className="text-3xl mt-2  poppins-extralight2 md:text-5xl">Najmat Alarab Documents Clearing</h1>
    <p className="text-sm  md:text-md italic text-wrap  mx-auto  max-w-xl">Providing professional visa, immigration, and document clearing services with  accuracy, transparency, and dedicated customer support.</p>
    </span>
    <span className="flex gap-4 flex-wrap justify-center mt-6">
      <a
         href="https://wa.me/971545049455"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 text-center"
        >
          <i className="fa-brands fa-whatsapp"></i> Whatsapp
        </a>
        <a
          href="#Service"
          rel="noopener noreferrer"
          className="bg-transparent border  text-white px-3 py-2 rounded-md hover:text-slate-300 hover:border-slate-300 cursor-pointer text-center"
        >
    Explore Services <i className="fa-solid fa-arrow-right"></i>
        </a>
    </span>
    </div>
</section>
 <div className="bg-gray-200 flex  flex-wrap justify-around">
    {ArrayForCards.map((items,index)=>
        <div data-aos="flip-up" className="text-center  m-5 p-5 w-full md:w-auto bg-white rounded-sm" key={index}>
        <span><i className={`${items.icon} text-2xl text-blue-500`}></i></span>
        <span>
            <h2 className="font-bold ">{items.heading}</h2>
            <p>{items.para}</p>
        </span>
        </div>
    )}
    </div>
</>
)
}


export default HeroSection;