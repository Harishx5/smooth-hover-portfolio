import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import TeamMember from "@/components/team/TeamMember";

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
    imageSrc: "/lovable-uploads/3eb28a75-2ef3-4cb5-b803-789310f841d4.png"
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
    imageSrc: "/lovable-uploads/6e3d085b-90b8-4ec8-b329-074ae08e1cf0.png"
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
    imageSrc: "/lovable-uploads/b8a74b31-c04e-4e4d-90a6-52fc0566eb49.png"
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
    imageSrc: "/lovable-uploads/ddcc4101-177d-4919-9dc6-28eefa2ba658.png"
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
    imageSrc: "/lovable-uploads/00772c7e-8354-4f06-8c15-5508290c1849.png"
  }
];

const Index = () => {
  return (
    <div className="relative overflow-hidden">
      <Navigation teamMembers={teamMembers} />
      <HeroSection />
      
      <div className="overflow-hidden">
        {teamMembers.map((member) => (
          <TeamMember key={member.id} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Index;
