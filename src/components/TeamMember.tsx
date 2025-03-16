
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
      className="min-h-screen w-full py-20 flex flex-col md:flex-row items-center justify-center gap-16 px-4 md:px-12 lg:px-20 relative"
    >
      <div className="absolute top-10 left-0 w-full flex justify-center md:justify-start md:left-10 lg:left-20">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-portfolio-purple flex items-center justify-center text-2xl font-bold text-white">
            {number}
          </div>
        </div>
      </div>

      <div className="w-full md:w-2/5 lg:w-1/3 max-w-md">
        <h2 className="text-4xl md:text-5xl mb-3 font-bold gradient-text">{name}</h2>
        <p className="text-lg md:text-xl mb-2 text-white">{title}</p>
        {subtitle && <p className="text-md mb-6 text-gray-300">{subtitle}</p>}

        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-3">
            <Mail className="social-icon" size={18} />
            <a href={`mailto:${email}`} className="text-gray-300 hover:text-white transition-colors">
              {email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="social-icon" size={18} />
            <a href={`tel:${phone}`} className="text-gray-300 hover:text-white transition-colors">
              {phone}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Github className="social-icon" size={18} />
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
            <Linkedin className="social-icon" size={18} />
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
          <div className="flex items-center gap-3 mb-3">
            <Code size={20} className="text-portfolio-purple" />
            <h3 className="text-xl font-semibold">Projects</h3>
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
        className="w-full md:w-3/5 lg:w-1/2 max-w-lg relative overflow-hidden rounded-xl"
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
          className={`absolute inset-0 bg-gradient-to-t from-portfolio-dark-blue/90 to-transparent opacity-0 transition-opacity duration-500 ${
            isHovered ? "opacity-70" : ""
          }`}
        ></div>
      </div>
    </section>
  );
};

export default TeamMember;
