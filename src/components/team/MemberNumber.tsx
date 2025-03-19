
import { useEffect, useState } from "react";

interface MemberNumberProps {
  number: number;
  id: string;
  isVisible: boolean;
}

const MemberNumber = ({ number, isVisible }: MemberNumberProps) => {
  return (
    <div className="absolute top-10 left-0 w-full flex justify-center md:justify-start md:left-10 lg:left-16">
      <div className={`flex items-center gap-3 ${isVisible ? "animate-fade-in-up" : ""}`}>
        <div className="w-10 h-10 rounded-full bg-portfolio-purple flex items-center justify-center text-lg font-bold text-white animate-pulse-slow">
          {number}
        </div>
        <div className="h-0.5 w-16 bg-portfolio-purple/50 hidden md:block"></div>
      </div>
    </div>
  );
};

export default MemberNumber;
