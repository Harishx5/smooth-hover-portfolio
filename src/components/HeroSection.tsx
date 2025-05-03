
import { ArrowDown } from "lucide-react";
import { useEffect } from "react";
import { initScrollAnimations } from "@/utils/scrollAnimations";

const HeroSection = () => {
  useEffect(() => {
    // Initialize all scroll animations
    const observer = initScrollAnimations();
    
    // Clean up the observer when component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToFirstMember = () => {
    const firstMember = document.getElementById("member-1");
    if (firstMember) {
      window.scrollTo({
        top: firstMember.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen w-full flex flex-col items-center justify-center relative px-4 py-16 md:py-0">
      <div className="absolute inset-0 bg-portfolio-dark-blue z-0" />
      
      {/* Decorative elements with enhanced animations */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-portfolio-purple/20 filter blur-3xl animate-pulse-slow parallax-scroll parallax-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-portfolio-pink/20 filter blur-3xl animate-pulse-slow parallax-scroll parallax-medium" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Main Title - larger size to match reference image */}
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          Our Team Portfolio
        </h1>
        
        {/* Subtitle - adjusted to match reference image */}
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300">
          Meet Our Amazing Team Members
        </p>
        
        <button 
          onClick={scrollToFirstMember}
          className="flex items-center justify-center mx-auto mt-16 w-14 h-14 rounded-full bg-white/10 
                   hover:bg-white/20 transition-all duration-300 animate-float reveal-on-scroll scale stagger-3 magnetic"
          aria-label="Scroll down"
        >
          <ArrowDown className="text-white" size={24} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
