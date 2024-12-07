import Image from "next/image";
import React from "react";
import "../../globals.css";

interface CardContent {
  src: string;
  title: string;
  description: string;
  
}
const Card = ({ src, title, description }: CardContent) => {
  return (
    <div className="card">
      <div className="card-img">
      <Image
        src={src}
        alt="about-card"
        width={500}
        height={500}
        className="img"
      />
      </div>

      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default Card;
