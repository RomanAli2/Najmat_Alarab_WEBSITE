
import React from "react"
import '../App.css'
function AboutSection() {
    return(
<section id="About" className="min-h-[80vh] py-10">
  <h2 className="text-3xl font-semibold text-center mb-10"><br/>
    About Us
  </h2>

  <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-5">

    {/* Image */}
    <div className="flex-1 flex justify-center">
      <img
        src="/about.png"
        alt="About"
        className="rounded-lg w-full max-w-md"
      />
    </div>

    {/* Content */}
    <div className="flex-1 max-w-2xl text-left">
      <p className="mb-5 leading-6 text-gray-700">
        Najmat Alarab Documents Clearing is a trusted consultancy dedicated
        to providing reliable visa, immigration, and document clearing
        services across the UAE. We simplify complex government procedures
        and paperwork, helping individuals, families, and businesses
        complete their documentation efficiently and without hassle.
      </p>

      <p className="mb-5 leading-6 text-gray-700">
        Our experienced team is committed to delivering accurate guidance,
        transparent processes, and timely support for all your visa and
        document-related needs. Whether you require visa assistance,
        business documentation, or government approvals, we ensure a smooth
        and professional experience from start to finish.
      </p>

      <p className="mb-4">
        <strong>Our Mission:</strong> To provide fast, reliable, and
        customer-focused document clearing solutions while maintaining the
        highest standards of professionalism and integrity.
      </p>

      <p>
        <strong>Our Vision:</strong> To become one of the most trusted
        document clearing and visa service providers in the UAE by
        delivering exceptional customer service and efficient solutions.
      </p>
    </div>

  </div>
</section>

    )
}

export default AboutSection