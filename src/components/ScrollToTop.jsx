import { useEffect, useState } from "react";
import '../App.css'
function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null;

  return (
    <button
      onClick={goTop}
      className="fixed bottom-6 
      right-6 bg-blue-500 text-white px-3 py-2 rounded-full shadow-lg 
      hover:bg-blue-600 transition-all cursor-pointer"
    >
      ↑ Top
    </button>
  );
}

export default ScrollToTop;