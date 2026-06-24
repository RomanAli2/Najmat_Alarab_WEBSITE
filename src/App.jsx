import './App.css'
import AboutSection from './components/AboutSectiom'
import BlogSection from './components/blogSection'
import ContctSection from './components/contactSection'
import FooterSection from './components/FooterSection'
import HeaderSection from './components/headerSection'
import HeroSection from './components/heroSection'
import ScrollToTop from './components/ScrollToTop'
import ServiceSection from './components/serviceSection'
function App() {
  return (
    <>
    <HeaderSection/>
    <HeroSection/>
    <ServiceSection/>
    <AboutSection/>
    <ScrollToTop/>
    <BlogSection/>
      <ContctSection/>
      <FooterSection/>
    </>
  )
}

export default App
