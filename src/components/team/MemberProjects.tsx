
import { Code } from "lucide-react";

interface ProjectItem {
  name: string;
}

interface MemberProjectsProps {
  projects: ProjectItem[];
  isVisible: boolean;
}

const MemberProjects = ({ projects, isVisible }: MemberProjectsProps) => {
  return (
    <div className={`transition-all duration-500 delay-200 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
      <div className="flex items-center gap-3 mb-3">
        <Code size={20} className="text-portfolio-purple animate-pulse-slow magnetic" />
        <h3 className="text-xl font-semibold reveal-text">
          <span className="inner">Projects</span>
        </h3>
      </div>
      <ul className={`space-y-2 wave-container ${isVisible ? "revealed" : ""}`}>
        {projects.map((project, index) => (
          <li 
            key={index} 
            className="project-item wave-item group hover:translate-x-2 transition-all duration-300 hover:scale-105"
          >
            <span className="group-hover:text-portfolio-purple transition-colors inline-block after:content-[''] after:block after:w-0 after:h-0.5 after:bg-portfolio-purple after:transition-all after:duration-300 group-hover:after:w-full">
              {project.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemberProjects;
