
import { useState, useEffect } from "react";
import MemberNumber from "./MemberNumber";
import MemberContact from "./MemberContact";
import MemberProjects from "./MemberProjects";
import MemberImage from "./MemberImage";

interface ProjectItem {
  name: string;
}

interface TeamMemberProps {
  id: string;
  number: number;
  name: string;
  title: string;
  subtitle?: string;
  email: string;
  phone: string;
  githubUrl: string;
  linkedinUrl: string;
  projects: ProjectItem[];
  imageSrc: string;
}

const TeamMember = ({
  id,
  number,
  name,
  title,
  subtitle,
  email,
  phone,
  githubUrl,
  linkedinUrl,
  projects,
  imageSrc,
}: TeamMemberProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(id);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [id]);

  return (
    <section
      id={id}
      className={`min-h-screen w-full py-16 md:py-24 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-4 md:px-10 lg:px-16 relative transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <MemberNumber number={number} id={id} isVisible={isVisible} />
      
      <MemberContact 
        name={name}
        title={title}
        subtitle={subtitle}
        email={email}
        phone={phone}
        githubUrl={githubUrl}
        linkedinUrl={linkedinUrl}
        isVisible={isVisible}
      />

      <div className={`w-full md:w-2/5 lg:w-1/3 max-w-md ${isVisible ? "animate-fade-in-right" : ""}`}>
        <MemberProjects projects={projects} isVisible={isVisible} />
      </div>

      <MemberImage 
        name={name}
        title={title}
        imageSrc={imageSrc}
        isVisible={isVisible}
      />
    </section>
  );
};

export default TeamMember;
