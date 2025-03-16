
import { Mail, Phone, Github, Linkedin, Code, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { 
  HoverCard,
  HoverCardTrigger,
  HoverCardContent 
} from "@/components/ui/hover-card";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
      className={`min-h-screen w-full py-20 flex flex-col md:flex-row items-center justify-center gap-16 px-4 md:px-12 lg:px-20 relative transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute top-10 left-0 w-full flex justify-center md:justify-start md:left-10 lg:left-20">
        <div className={`flex items-center gap-4 ${isVisible ? "animate-fade-in-up" : ""}`}>
          <div className="w-14 h-14 rounded-full bg-portfolio-purple flex items-center justify-center text-2xl font-bold text-white animate-pulse-slow">
            {number}
          </div>
        </div>
      </div>

      <div className={`w-full md:w-2/5 lg:w-1/3 max-w-md ${isVisible ? "animate-fade-in-up" : ""}`}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <h2 className="text-4xl md:text-5xl mb-3 font-bold gradient-text hover:scale-105 transition-transform duration-300 cursor-pointer">
                {name}
              </h2>
            </TooltipTrigger>
            <TooltipContent side="right" className="bg-portfolio-purple text-white border-none">
              <p>{name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <p className="text-lg md:text-xl mb-2 text-white">{title}</p>
        {subtitle && <p className="text-md mb-6 text-gray-300">{subtitle}</p>}

        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-300">
            <Mail className="social-icon group-hover:animate-pulse-slow" size={18} />
            <HoverCard>
              <HoverCardTrigger asChild>
                <a 
                  href={`mailto:${email}`} 
                  className="text-gray-300 group-hover:text-portfolio-purple transition-colors hover:underline"
                >
                  {email}
                </a>
              </HoverCardTrigger>
              <HoverCardContent className="bg-portfolio-dark-blue border border-portfolio-purple text-white">
                Send an email to {name}
              </HoverCardContent>
            </HoverCard>
          </div>
          <div className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-300">
            <Phone className="social-icon group-hover:animate-pulse-slow" size={18} />
            <HoverCard>
              <HoverCardTrigger asChild>
                <a 
                  href={`tel:${phone}`} 
                  className="text-gray-300 group-hover:text-portfolio-purple transition-colors hover:underline"
                >
                  {phone}
                </a>
              </HoverCardTrigger>
              <HoverCardContent className="bg-portfolio-dark-blue border border-portfolio-purple text-white">
                Call {name}
              </HoverCardContent>
            </HoverCard>
          </div>
          <div className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-300">
            <Github className="social-icon group-hover:animate-pulse-slow" size={18} />
            <HoverCard>
              <HoverCardTrigger asChild>
                <a
                  href={`https://${githubUrl.replace(/^https?:\/\//, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 group-hover:text-portfolio-purple transition-colors hover:underline"
                >
                  {githubUrl.replace(/^https?:\/\//, '')}
                </a>
              </HoverCardTrigger>
              <HoverCardContent className="bg-portfolio-dark-blue border border-portfolio-purple text-white">
                View {name}'s GitHub profile
              </HoverCardContent>
            </HoverCard>
          </div>
          <div className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-300">
            <Linkedin className="social-icon group-hover:animate-pulse-slow" size={18} />
            <HoverCard>
              <HoverCardTrigger asChild>
                <a
                  href={`https://${linkedinUrl.replace(/^https?:\/\//, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 group-hover:text-portfolio-purple transition-colors hover:underline"
                >
                  {linkedinUrl.replace(/^https?:\/\//, '')}
                </a>
              </HoverCardTrigger>
              <HoverCardContent className="bg-portfolio-dark-blue border border-portfolio-purple text-white">
                Connect with {name} on LinkedIn
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>

        <div className={`transition-all duration-500 delay-200 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
          <div className="flex items-center gap-3 mb-3">
            <Code size={20} className="text-portfolio-purple animate-pulse-slow" />
            <h3 className="text-xl font-semibold">Projects</h3>
          </div>
          <ul className="space-y-2">
            {projects.map((project, index) => (
              <li 
                key={index} 
                className="project-item group hover:translate-x-2 transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="group-hover:text-portfolio-purple transition-colors">
                  {project.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div 
        className={`w-full md:w-3/5 lg:w-1/2 max-w-lg relative overflow-hidden rounded-xl shadow-2xl shadow-portfolio-purple/20 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`w-full aspect-[4/5] rounded-xl overflow-hidden transition-transform duration-500 ease-out transform ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        >
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>
        <div
          className={`absolute inset-0 bg-gradient-to-t from-portfolio-dark-blue/90 via-portfolio-purple/20 to-transparent transition-opacity duration-500 ${
            isHovered ? "opacity-70" : "opacity-0"
          }`}
        ></div>
        <div
          className={`absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 ${
            isHovered ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <h3 className="text-white text-xl font-bold mb-2">{name}</h3>
          <p className="text-white/80">{title}</p>
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
