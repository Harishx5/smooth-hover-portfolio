
import { Mail, Phone, Github, Linkedin } from "lucide-react";
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

interface MemberContactProps {
  name: string;
  title: string;
  subtitle?: string;
  email: string;
  phone: string;
  githubUrl: string;
  linkedinUrl: string;
  isVisible: boolean;
}

const MemberContact = ({
  name, 
  title,
  subtitle,
  email,
  phone,
  githubUrl,
  linkedinUrl,
  isVisible
}: MemberContactProps) => {
  return (
    <div className={`w-full md:w-2/5 lg:w-1/3 max-w-md ${isVisible ? "animate-fade-in-up" : ""}`}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <h2 className="text-3xl md:text-4xl mb-3 font-bold gradient-text hover:scale-105 transition-transform duration-300 cursor-pointer">
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
    </div>
  );
};

export default MemberContact;
