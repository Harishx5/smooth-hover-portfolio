
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
}

interface NavigationProps {
  teamMembers: TeamMember[];
}

const Navigation = ({ teamMembers }: NavigationProps) => {
  const [activeSection, setActiveSection] = useState("hero");
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll to top button
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }

      // Find active section for the navigation
      const sections = ["hero", ...teamMembers.map(member => member.id)];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [teamMembers]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="fixed top-1/2 -translate-y-1/2 right-6 z-50 hidden md:block">
        <div className="flex flex-col gap-4">
          <button
            onClick={() => scrollToSection("hero")}
            className={`progress-indicator ${activeSection === "hero" ? "active" : ""}`}
            aria-label="Go to intro section"
          />
          {teamMembers.map((member) => (
            <button
              key={member.id}
              onClick={() => scrollToSection(member.id)}
              className={`progress-indicator ${activeSection === member.id ? "active" : ""}`}
              aria-label={`Go to ${member.name}'s section`}
            />
          ))}
        </div>
      </div>

      {showScrollToTop && (
        <button onClick={scrollToTop} className="scroll-to-top" aria-label="Scroll to top">
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
};

export default Navigation;
