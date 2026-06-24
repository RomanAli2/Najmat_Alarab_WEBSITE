import React from "react";
function ServiceSection(){
const [serviceLength, setServiceLength] = React.useState(5);
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
         className=" bg-white ">
        <div data-aos="fade-down" className='flex flex-col justify-center mt-3'>
        <span className="text-center">
           
            <h1 className="text-xl poppins-extralight2 md:text-2xl">Our Best Service</h1>
        </span><br/>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
        {
  servicesData.map((section, index) => (
    <div className="bg-slate-100 shadow p-2  rounded-sm m-4" key={index}>
<span className="flex gap-2 ">
  <h2 className="bg-white p-4 w-15 mt-1 h-15 text-center rounded-full text-blue-500">
  <i className={`text-lg ${section.icon}`}></i></h2>
      <h2 className="text-2xl m-2 poppins-extralight">{section.title} :</h2>

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
    className="text-blue-500 p-3 cursor-pointer"
  >
    {expandedCard === index ? "See Less..." : "See More..."}
  </p>
)}
     
    </div>
  ))
}
        </div>
        </div>
        </section>
    )
}

export default ServiceSection;