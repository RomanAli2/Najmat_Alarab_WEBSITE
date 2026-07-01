import React from "react";
import '../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
function HeroSection(){
const ArrayForCards = [
  {
    icon: "fa-solid fa-globe",
    heading: "Visit Visa",
    para: "Tourist, business, and family visit visas for all major countries."
  },
  {
    icon: "fa-solid fa-stamp",
    heading: "Visa Stamping",
    para: "Assistance with visa stamping, renewals, and document processing."
  },
  {
    icon: "fa-solid fa-graduation-cap",
    heading: "Freelance Visa",
    para: "Freelance work visa assistance for international professionals."
  },
  {
    icon: "fa-solid fa-users",
    heading: "Family Visa",
    para: "Family sponsorship, spouse, and dependent visa services."
  },
  {
    icon: "fa-solid fa-file-lines",
    heading: "Documents Clearing",
    para: "Document attestation, legalization, and clearance services."
  },
  {
    icon: "fa-solid fa-people-roof",
    heading: "PRO Service",
    para: "PRO, typing, government liaison, and business support services."
  },
];
    AOS.init();
    return(
        <>
     <section id="Home" className="relative flex items-start md:items-center  pt-15 h-[99vh] md:h-[95vh] w-full">
    
    <div  alt="Dubai Visa Services" className="absolute top-7 inset-0 bg-[url('/bg4.png')] md:bg-[url('/bg3.png')] bg-cover bg-center"></div>
    <div className="absolute inset-0 smallDevice "></div>
    <div   data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="800" className="relative z-10 ">
    <span className="   pt-18 md:pt-0 flex-col ml-5 flex ">
    <p className="text-md md:text-2xl lg:text-3xl text-yellow-600 ">YOUR JOURNEY ,OUR EXPERTIES </p>
    <h1 className="text-2xl mt-2  poppins-extralight md:text-5xl lg:text-6xl text-blue-900">Najmat Alarab <br/> Documents Clearing</h1>
    <p className="text-xs  md:text-md italic  ml-2 text-wrap  mx-auto  max-w-xl">Providing professional visa, immigration, and document clearing services with  accuracy, transparency, and dedicated customer support.</p>
    </span>
    <span className="flex gap-4 ml-5  flex-wrap  mt-6">
      <a
         href="https://wa.me/971545049455"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-900 text-white px-2 md:px-3 py-1.5 md:py-1.5 rounded-md hover:bg-blue-900 text-center"
        >
          <i className="fa-brands fa-whatsapp"></i> Whatsapp
        </a>
        <a
          href="#Service"
          rel="noopener noreferrer"
          className="bg-transparent border border-yellow-600 text-yellow-600  px-2 md:px-3 py-1.5 md:py-1.5 rounded-md hover:text-yellow-700 hover:border-yellow-700 cursor-pointer text-center"
        >
    Explore Services <i className="fa-solid fa-arrow-right"></i>
        </a>
    </span>
    </div>
</section>
<div className='bg-white m-3 '>
<h5 className="text-center text-yellow-600 font-semibold pt-5">- WHAT WE OFFER -</h5>
<h4 className="text-blue-800 text-center text-lg md:text-2xl poppins-extralight">Our Visa & Documents Service</h4>
<div className="grid grid-cols-1 sm:grid-cols-3  md:grid-cols-3 lg:grid-cols-6 justify-around">
  {ArrayForCards.map((items, index) => (
    <div
      data-aos="flip-up"
      key={index}
      className="flex flex-col items-center text-center shadow m-5 p-5  md:w-auto bg-white/90 rounded-sm"
    >
      <div className={`flex justify-center items-center h-14 w-14 rounded-full ${index===0||index===2||index===4?'bg-yellow-600':' bg-blue-900'} `}>
        <i className={`${items.icon}  text-2xl text-white`}></i>
      </div>

      <span className="mt-4">
        <h2 className="font-bold">{items.heading}</h2>
        <p>{items.para}</p>
      </span>
    </div>
  ))}
</div></div>
</>
)
}


export default HeroSection;