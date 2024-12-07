import Image from "next/image";
import React from "react";
import "../../globals.css";
import Button from "./Button";
import Badge from "./Badge";
import { useRouter } from "next/navigation";

interface CardContent {
  src: string;
  title: string;
  description: string;
  githubLink: string;
}
const ProjectCard = ({ src, title, description, githubLink }: CardContent) => {
  const route = useRouter();
  return (
    <div className="project-card">
      <div className="project-card-img">
        <Image
          src={src}
          alt="about-card"
          width={500}
          height={500}
          className="img"
        />
      </div>

      <div className="card-body">
        <div className="badges">
          <Badge badgeName="Next JS" />
          <Badge badgeName="Tailwind CSS" />
        </div>
        <h2 className="project-card-title">{title}</h2>
        <p className="project-card-text">{description}</p>
        <div onClick={() => route.push(`${githubLink}`)}>
          <Button btnText="Live Demo" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
