import { useState,useEffect } from "react"
import { useForm, ValidationError } from '@formspree/react';

function HeaderSection() {
      const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
    const [toggleHeader, setToggleHeader] = useState(false);
    const [contactBtn ,setContactBtn] = useState(false);
    const [emailForm,setEmailForm] = useState(false)
    const [state, handleSubmit] = useForm("mojodbgq");
    const [navBarLinkColor,setNavBarLinkColor]=useState('Home')
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
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
    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768);

            // Desktop par menu khud close ho jaye
            if (window.innerWidth > 768) {
                setToggleHeader(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    
    return(
      
        <header>
       <div className=" gap-5 border-b shadow border-black top-0 p-2 fixed z-50 w-full text-white  bg-blue-900 
            ">
       <div className="flex justify-around text-xs sm:text-sm md:text-md lg:text-lg ">
          <span className="hidden md:block">📍United Arab Emirates, Deira Dubai Al Baraha</span>
        <span  className="myElement">📧najmatalarab1@gmail.com</span>
        <span  className="">📞+971 545049455</span>

        <span className="flex gap-1">  
        <a href="https://www.instagram.com/najmatalarab1/" target="_blank">
    <i className="fa-brands fa-instagram  text-white 
    p-0.5 rounded-md bg-linear-to-r from-pink-400 to-red-400"></i> 
  </a>

  <a href="https://web.facebook.com/profile.php?id=61591483978152" target="_blank">
     <i className="fa-brands fa-facebook text-white text-center  "></i> 
  </a></span>
       </div>
        </div>
       <div className=" fixed w-full z-50 top-8 lg:top-10 p-2 bg-white shadow ">
        <nav className="flex items-center m-2 justify-between">
        <div className="logo flex gap-1 items-center ">
        {/* Logo */}
        <span>
        <img src="/logo/icon.png"
         alt="logo" className="h-9 md:h-11"/>
        </span>
        <span className="  
        ">
        <h1 className='text-md 
         poppins-extralight text-blue-900 md:text-lg lg:text-xl'>Najmat Alarab</h1>
        <h2 className="text-xs lg:text-md text-yellow-700 ">Documents Clearing</h2>
        </span>
        </div>
         
{isDesktop?        <div className="flex items-center gap-2 md:gap-4">
        <span className="nav-links flex gap-2 lg:text-xl md:gap-4 items-center">
            <a onClick={()=>{
              setNavBarLinkColor('Home')
            }}  href="#Home" className={`text-sm md:text-lg
        font-serif ${navBarLinkColor==='Home'?'text-blue-700 border-b border-blue-700':'text-black'}`}>Home</a>
         <a  onClick={()=>{
              setNavBarLinkColor('About')
            }}  href="#About" className={`text-sm md:text-lg
        font-serif ${navBarLinkColor==='About'?'text-blue-700 border-b border-blue-700':'text-black'}`}>About</a>
         <a onClick={()=>{
              setNavBarLinkColor('Service')
            }}  href="#Service" className={` text-sm md:text-lg
        font-serif ${navBarLinkColor==='Service'?'text-blue-700 border-b border-blue-700':'text-black'}`}>Service</a>
         <a onClick={()=>{
              setNavBarLinkColor('Blog')
            }}  href="#Blog" className={` text-sm md:text-lg
        font-serif ${navBarLinkColor==='Blog'?'text-blue-700 border-b border-blue-700':'text-black'}`}>Blog</a>
        
        </span>
        <span>
        <button onClick={()=>setContactBtn(true)} className="bg-blue-800 text-white px-3
         py-1 rounded-md text-sm md:text-lg cursor-pointer poppins-light">Contact</button>
        </span>
        </div>:
        <div>
<span onClick={() => setToggleHeader(!toggleHeader)} className="
 cursor-pointer p-2 hover:bg-gray-300  rounded-md bg-gray-200">
        <i className={`${toggleHeader?'fa-solid fa-xmark'
        :'fa-solid fa-list '} 
`}></i>
</span>
        </div> }
        </nav>
       </div>
{toggleHeader &&(
   <div className="flex flex-col text-center fixed w-full
    bg-white p-2 z-40 top-26 items-center gap-2 md:gap-4">
        <span className="nav-links w-full flex gap-2 flex-col md:gap-4 items-center">
            <a onClick={()=>{
              setNavBarLinkColor('Home')
              setToggleHeader(false)
            }}  href="#Home" className={`text-sm  md:text-lg
        font-serif ${navBarLinkColor==='Home'?'text-blue-700 border-b border-blue-700':'text-black'}`}>Home</a>
         <a  onClick={()=>{
              setNavBarLinkColor('About')
              setToggleHeader(false)
            }}  href="#About" className={`text-sm md:text-lg
        font-serif ${navBarLinkColor==='About'?'text-blue-700 border-b border-blue-700':'text-black'}`}>About</a>
         <a onClick={()=>{
              setNavBarLinkColor('Service')
              setToggleHeader(false)
            }}  href="#Service" className={` text-sm md:text-lg
        font-serif ${navBarLinkColor==='Service'?'text-blue-700 border-b border-blue-700':'text-black'}`}>Service</a>
       <a onClick={()=>{
              setNavBarLinkColor('Blog')
            }}  href="#Blog" className={` text-sm md:text-lg
        font-serif ${navBarLinkColor==='Blog'?'text-blue-700 border-b border-blue-700':'text-black'}`}>Blog</a>
        
        </span>
        <span className="w-full ">
        <button onClick={()=>{
            setContactBtn(true)
            setToggleHeader(false)
        }}  className={`bg-blue-800 cursor-pointer w-full hover:bg-blue-900 text-white px-3
         py-1 rounded-sm md:rounded-md text-sm md:text-lg poppins-
          ${toggleHeader ?"w-full":""}`}>Contact</button>
        </span>
        </div>
)}

{contactBtn && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
    
    <div className="relative bg-white shadow rounded-md p-6 w-80">
      
      {/* Close Button */}
      <button
        onClick={() => setContactBtn(false)}
        className="absolute top-2 right-3 text-red-500 hover:text-red-600 cursor-pointer"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>

      <div className="flex flex-col gap-3 mt-4">
        
        <a
         href="https://wa.me/971545049455"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-800 text-white px-3 py-2 rounded-md hover:bg-blue-900 text-center"
        >
          <i className="fa-brands fa-whatsapp"></i> Whatsapp
        </a>

        <a onClick={()=>
       {
         setEmailForm(true)
        setContactBtn(false)
       }
        }
          className="bg-blue-800 cursor-pointer text-white px-3 py-2 rounded-md hover:bg-blue-900 text-center"
        >
          <i className="fa-regular fa-envelope"></i> Email
        </a>

      </div>

    </div>

  </div>
)}

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

        </header>
    )
}

export default HeaderSection