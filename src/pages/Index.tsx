
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import TeamMember from "@/components/TeamMember";

const teamMembers = [
  {
    id: "member-1",
    number: 1,
    name: "SK Harish Kanna",
    title: "AI-Powered Software Developer",
    subtitle: "Prompt Engineering & No-Code/Low-Code Development",
    email: "harishkanna068@gmail.com",
    phone: "+91 8056073997",
    githubUrl: "github.com/Harishx5",
    linkedinUrl: "linkedin.com/in/harishkanna23",
    projects: [
      { name: "Hoops Hub" },
      { name: "Hella The Chatbot" },
      { name: "Skill Swap" },
      { name: "Invex-AI" },
      { name: "Library Management System" }
    ],
    imageSrc: "/lovable-uploads/2e85b698-8faf-49bb-ac30-5f1848fcdffa.png"
  },
  {
    id: "member-2",
    number: 2,
    name: "G Haribalakrishnan",
    title: "AI Developer",
    email: "haribalakrishnan160@gmail.com",
    phone: "+91 9789053788",
    githubUrl: "github.com/haribalakrishnan098",
    linkedinUrl: "linkedin.com/in/haribalakrishnan-g-0898b7275",
    projects: [
      { name: "Library Management System" },
      { name: "Event Management System" }
    ],
    imageSrc: "/lovable-uploads/d0cbe4ce-742e-414e-9e2c-730afc94809e.png"
  },
  {
    id: "member-3",
    number: 3,
    name: "Gowtham J",
    title: "Frontend Developer",
    email: "gowthamj0055@gmail.com",
    phone: "+91 6369861958",
    githubUrl: "github.com/gowthamj",
    linkedinUrl: "linkedin.com/in/gowtham-j-375586356",
    projects: [
      { name: "Event Management" },
      { name: "Netflix Clone" }
    ],
    imageSrc: "/lovable-uploads/29117118-49b9-4cd3-b2ca-65615e94e8aa.png"
  },
  {
    id: "member-4",
    number: 4,
    name: "R Madhumitha",
    title: "Full Stack Web Developer",
    email: "no.42madhumitha.r@example.com",
    phone: "+91 7358556518",
    githubUrl: "github.com/madhzz11",
    linkedinUrl: "linkedin.com/in/madhumitha5",
    projects: [
      { name: "Student Registration Form" },
      { name: "Library Management System" }
    ],
    imageSrc: "/lovable-uploads/fa6bfae9-47a4-4bb0-b973-de0c0c0010ed.png"
  },
  {
    id: "member-5",
    number: 5,
    name: "K M Subasree",
    title: "AI Developer",
    email: "subhamurali2717@gmail.com",
    phone: "+91 6369710059",
    githubUrl: "github.com/Subasree2717",
    linkedinUrl: "linkedin.com/in/subasree-k-m-5b0a95268",
    projects: [
      { name: "Personal Portfolio" },
      { name: "Responsive Landing Webpage" },
      { name: "Social Media Account Creation (MERN Stack)" }
    ],
    imageSrc: "/lovable-uploads/a2257d9b-4e30-43d6-8736-e846928ebc96.png"
  }
];

const Index = () => {
  return (
    <div className="relative">
      <Navigation teamMembers={teamMembers} />
      <HeroSection />
      
      {teamMembers.map((member) => (
        <TeamMember key={member.id} {...member} />
      ))}
    </div>
  );
};

export default Index;
