
import { useState } from "react";

interface MemberImageProps {
  name: string;
  title: string;
  imageSrc: string;
  isVisible: boolean;
}

const MemberImage = ({ name, title, imageSrc, isVisible }: MemberImageProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`w-full md:w-2/5 lg:w-1/3 max-w-sm relative overflow-hidden rounded-xl shadow-2xl shadow-portfolio-purple/20 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`w-full aspect-[3/4] rounded-xl overflow-hidden transition-transform duration-500 ease-out transform ${
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
  );
};

export default MemberImage;
