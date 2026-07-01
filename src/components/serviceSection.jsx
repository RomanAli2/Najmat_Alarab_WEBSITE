import React,{useState,useEffect} from "react";
import { useForm, ValidationError } from '@formspree/react';

function ServiceSection(){
const [serviceLength, setServiceLength] = React.useState(5);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [state, handleSubmit] = useForm("mojodbgq");

    const [emailForm,setEmailForm] = useState(false)
     useEffect(() => {
      if (state.succeeded) {
        setShowSuccessMessage(true);
        setEmailForm(false);
    
        const timer = setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
    
        return () => clearTimeout(timer);
      }
    }, [state.succeeded]);

 const servicesData = [
  {
    title:  "New Business Set Up",
    icon:"fa-solid fa-building",
    services: [
     
      "New & Renewal Trade License",
      "Online EJARI (Commercial & Residential)",
      "Voucher Discount",
      "2 Years Freelance Visa",
      "Partner Visa",
      "Family Visa",
      "Quota Approval",
      "Same & Change Location Payment Voucher Available",
      "Over Stay Fine Remove"
    ]
  },
  {
    title: "Dubai 2 Year Freelance Visa",
    icon:"fa-solid fa-address-card",
    services: [
      "Offer Letter (MOL)",
      "Labour Approval",
      "Visa",
      "Change of Status",
      "Labour Card",
      "Medical",
      "Emirates ID",
      "Visa Stamping",
      "ILOE Insurance",
      "NOC",
      "WPS Documents"
    ]
  },
  {
    title: "Dubai 2 Year Freelance Visa 10 Days Processing Only",
    icon:"fa-solid fa-stopwatch",
    
    services: [
      "New Business Set Up",
      "New & Renewal Trade License",
      "Online Office EJARI, Shop EJARI and Residential EJARI Available",
      "Voucher Discount",
      "2 Years Freelance Visa",
      "Partner Visa",
      "Family Visa",
      "Quota Approval",
      "Same & Change Location Payment Voucher Available"
    ]
  },
  {
    title: "EJARI Services",
    icon:"fa-solid fa-file-lines",

    services: [
      "Separate Office EJARI",
      "Business Center EJARI",
      "Residential EJARI",
      "Shop EJARI",
      "Labour Camp EJARI",
      "Warehouse EJARI",
      "EJARI Required For License Renewal",
      "EJARI Required For Labour Registration",
      "EJARI Required For Bank Account Opening"
    ]
  },
  {
    title: "Work Visa / Employment Visa",
    icon:"fa-solid fa-users",

    services: [
      "Professionals Working In UAE",
      "All Documentation Will Be Provided",
      "Includes Medical Test, Emirates ID, And Residency",
      "For Long-Term Stays And Work",
      "Visa Duration Is 2 Years"
    ]
  },
  {
    title: "Business Setup In Dubai",
    icon:"fa-solid fa-briefcase",

    services: [
      "Freezone, Mainland & Offshore",
      "Trade License And PRO Services",
      "Company Formation Residency Services"
    ]
  }
];
const [expandedCard, setExpandedCard] = React.useState(null);

    return(
        <section id="Service"
         className=" bg-slate-100 ">
        <div data-aos="fade-down" className='flex flex-col justify-center mt-3'>
        <span className="text-center">
           
            <h1 className="text-xl poppins-extralight text-blue-800 md:text-2xl pt-8 ">Our Best Service</h1>
        </span><br/>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
        {
  servicesData.map((section, index) => (
    <div className="bg-white shadow p-2  rounded-sm m-4" key={index}>
<span className="flex items-center gap-2 ">
  <div className={` p-4 w-15 mt-1 h-15 text-center  flex justify-center items-center rounded-full text-white  ${index===0||index===2||index===4?'bg-yellow-600':' bg-blue-900'} `}>
  <i className={`text-lg ${section.icon}`}></i></div>
      <h2 className="text-xl m-2 poppins-extralight">{section.title} :</h2>

</span>
{section.services
  .slice(0, expandedCard === index ? section.services.length : 5)
  .map((service, i) => (
    <p className="m-2" key={i}>
      {service}
    </p>
))}
{section.services.length > 5 && (
  <p
    onClick={() => {
      setExpandedCard(expandedCard === index ? null : index);
    }}
    className="text-blue-800 p-3 cursor-pointer"
  >
    {expandedCard === index ? "See Less..." : "See More..."}
  </p>
)}

<div className="flex  items-end">
  <a onClick={()=>
       {
         setEmailForm(true)
       }
        }
          className="bg-transparent m-2 cursor-pointer border border-black  text-black hover:text-yellow-600  text px-3 py-2 rounded-md hover:border-yellow-600 text-center"
        >
          Apply Now <i className="fa-solid fa-arrow-right"></i>
        </a>
</div>

     
    </div>
    
  ))
}
        </div>
        </div>
        
{/* email form toggle*/}

{emailForm&&(
   <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
    <div className="relative bg-white shadow rounded-md p-6 w-80">
         <button
        onClick={() => setEmailForm(false)}
        className="absolute top-2 right-3 text-red-500 hover:text-red-600 cursor-pointer"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
<br/>
    <form className="text-center flex flex-col gap-2" onSubmit={handleSubmit}>
      <input
        id="Name"
        type="name"
        placeholder="Enter Full Name"
        name="Name"
        required
        className="px-4.5 border border-slate-500 rounded-sm py-2"
      />

       <input
        id="number"
        type="number"
        placeholder="Your Number"
        name="Number"
        className="px-4.5 border border-slate-500 rounded-sm py-2"
        required
      />
     
      <input
        id="email"
        type="email"
        placeholder="Your Email"
        name="email"
        className="px-4.5 border border-slate-500 rounded-sm py-2"
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        className="px-4.5 border border-slate-500 rounded-sm py-2"
        name="message"
        placeholder="Message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button  className="bg-blue-800 cursor-pointer  text-white px-3 py-1.5 rounded-md" type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
        </div>
    </div>
)}

{showSuccessMessage&& (
    <div className="fixed top-5 right-5  bg-white shadow-md rounded-md p-4 z-50"> 
        <h1 className="text-green-600"><i className="fa-solid fa-circle-check"></i> Message Sent Successfully!</h1>
    </div>
)}
        </section>



    )
}

export default ServiceSection;