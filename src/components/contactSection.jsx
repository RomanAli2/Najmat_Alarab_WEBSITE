function ContactSection() {
  return (
    <section className="py-10 px-5">
      <div className="bg-slate-100 max-w-6xl mx-auto rounded-xl p-8 shadow-sm">

        <h1 className="text-3xl font-bold text-blue-500 mb-6">
          Contact Us
        </h1>

        <div className="flex flex-col flex-wrap md:flex-row md:flex-wrap gap-6 text-gray-700">

          <div className="flex items-center gap-2">
            <i className="fa-brands fa-whatsapp text-green-500"></i>
            <span>
              <strong>Phone:</strong> +971 545059455
            </span>
          </div>

          <div className="flex items-center gap-2">
            <i className="fa-regular fa-envelope"></i>
            <span>
              <strong>Email:</strong> sajidhussain4741@gmail.com
            </span>
          </div>

          <div className="flex items-start gap-2 max-w-md">
            <i className="fa-solid fa-location-dot mt-1"></i>
            <span>
              <strong>Address:</strong> United Arab Emirates,
              Office Location Deira Dubai Al Baraha
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactSection;