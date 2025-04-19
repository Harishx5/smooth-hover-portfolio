
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
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
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-portfolio-purple/20 filter blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-portfolio-pink/20 filter blur-3xl animate-pulse-slow" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 gradient-text opacity-0 animate-fade-in-up" 
            style={{ animationDelay: "0.2s" }}>
          Our Team Portfolio
        </h1>
        <p className="text-lg sm:text-xl mb-8 md:mb-12 mx-auto text-gray-300 opacity-0 animate-fade-in-up"
           style={{ animationDelay: "0.4s" }}>
          Meet Our Amazing Team Members
        </p>
        
        <button 
          onClick={scrollToFirstMember}
          className="flex items-center justify-center mx-auto mt-8 md:mt-16 w-12 h-12 rounded-full bg-white/10 
                   hover:bg-white/20 transition-all duration-300 animate-float opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
          aria-label="Scroll down"
        >
          <ArrowDown className="text-white" size={24} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
