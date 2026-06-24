import React from "react";
function ServiceSection(){
 const servicesData = [
  {
    title: "Services",
    services: [
      "New Business Set Up",
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
    services: [
      "Freezone, Mainland & Offshore",
      "Trade License And PRO Services",
      "Company Formation Residency Services"
    ]
  }
];

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
    <div className="bg-slate-100 shadow p-2 rounded-sm m-4" key={index}>
      <h2 className="text-2xl m-2 poppins-extralight">{section.title} :</h2>

      {section.services.map((service, i) => (
        <p className="m-2 " key={i}>{service}</p>
      ))}
    </div>
  ))
}
        </div>
        </div>
        </section>
    )
}

export default ServiceSection;