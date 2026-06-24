function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-gray-700 pb-6">
        
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <img
            src="/logo/icon.png"
            alt="Najmat Alarab Logo"
            className="w-16 h-16 rounded-full object-cover"
          />
          <h1 className="text-lg md:text-xl font-semibold">
            Najmat Alarab Documents Clearing
          </h1>
        </div>

      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact</h2>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white transition">📞 +971 545059455</li>
            <li className="hover:text-white transition">📧 sajidhussain4741@gmail.com</li>
            <li className="hover:text-white transition">
              📍 United Arab Emirates, Deira Dubai Al Baraha
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Services</h2>
          <ul className="space-y-2 text-gray-300">
            <li>✔ New Business Setup</li>
            <li>✔ 2 Years Freelance Visa</li>
            <li>✔ Same & Change Location Payment Voucher Available</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        © 2026 All Rights Reserved
      </div>

    </footer>
  );
}

export default FooterSection;