
import { Mail, Phone, Github, Linkedin, Code } from "lucide-react";
import { useState } from "react";

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

  return (
    <section
      id={id}
      className="min-h-screen w-full py-24 flex flex-col md:flex-row items-center justify-center gap-10 px-4 md:px-8 relative"
    >
      <div className="absolute top-8 left-0 w-full flex justify-center md:justify-start md:left-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-portfolio-purple flex items-center justify-center text-3xl font-bold text-white">
            {number}
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 max-w-lg">
        <h2 className="text-5xl md:text-6xl mb-2 font-bold gradient-text">{name}</h2>
        <p className="text-xl md:text-2xl mb-2 text-white">{title}</p>
        {subtitle && <p className="text-md md:text-lg mb-6 text-gray-300">{subtitle}</p>}

        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3">
            <Mail className="social-icon" size={20} />
            <a href={`mailto:${email}`} className="text-gray-300 hover:text-white transition-colors">
              {email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="social-icon" size={20} />
            <a href={`tel:${phone}`} className="text-gray-300 hover:text-white transition-colors">
              {phone}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Github className="social-icon" size={20} />
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {githubUrl.replace("https://", "")}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Linkedin className="social-icon" size={20} />
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {linkedinUrl.replace("https://", "")}
            </a>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-4">
            <Code size={24} className="text-portfolio-purple" />
            <h3 className="text-2xl font-semibold">Projects</h3>
          </div>
          <ul className="space-y-2">
            {projects.map((project, index) => (
              <li key={index} className="project-item">
                {project.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div 
        className="w-full md:w-1/2 max-w-xl relative overflow-hidden rounded-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`w-full aspect-[3/4] rounded-2xl overflow-hidden transition-transform duration-500 ease-out transform ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        >
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div
          className={`absolute inset-0 bg-gradient-to-t from-portfolio-dark-blue/80 to-transparent opacity-0 transition-opacity duration-500 ${
            isHovered ? "opacity-60" : ""
          }`}
        ></div>
      </div>
    </section>
  );
};

export default TeamMember;
