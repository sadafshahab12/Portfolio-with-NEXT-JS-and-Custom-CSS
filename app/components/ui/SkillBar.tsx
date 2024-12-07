import React, { useState, useEffect } from "react";
import "../../globals.css";
import Image from "next/image";
interface TPercent {
  percentage: number;
  src: string;
}
const SkillBar = ({ percentage, src }: TPercent) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWidth((prev) => {
        if (prev < percentage) {
          return prev + 1; // Increment the width by 1% every interval
        }
        clearInterval(interval); // Stop the interval when the target percentage is reached
        return prev;
      });
    }, 30); // Adjust the speed by changing the interval time (in ms)

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [percentage]);

  return (
    <div className="skill-bar">
      <div className="icon">
        <Image
          src={src}
          alt="skill-icon"
          width={500}
          height={500}
          className="skill-icon"
        />
      </div>
      <div className="bar">
        <div
          className="percentage"
          style={{ width: `${width}%` }}
          data-percentage={`${width}%`}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
