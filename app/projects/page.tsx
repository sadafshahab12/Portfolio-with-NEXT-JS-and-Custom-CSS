"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "../globals.css";
import ProjectCard from "../components/ui/PorjectCard";

const Projects = () => {
  const route = useRouter();
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <>
      <header className="project-section ">
        <nav className="navbar">
          <div className="mb-logo-menu" onClick={handleMenu}>
            <Image
              src="/images/skill6.png"
              alt="bar"
              width={500}
              height={500}
              className="menu-bar"
            />
            <div className="logo">
              <h1 className="name">Sadaf Shahab</h1>
            </div>
          </div>

          <ul className={`nav-links ${open ? "open" : ""}`}>
            <li onClick={closeMenu}>
              <Link href="/" className="link">
                Home
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="/about" className="link">
                About
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="/projects" className="link">
                Projects
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="/contact" className="link">
                Contact
              </Link>
            </li>
          </ul>
          <div className="nav-icon">
            <Image
              src="/images/linkedin1.webp"
              alt="icon"
              width={500}
              height={500}
              className="icons"
              onClick={() =>
                route.push("https://www.linkedin.com/in/sadaf-shahab-ssr123")
              }
            />
            <Image
              src="/images/github2.png"
              alt="icon"
              width={500}
              height={500}
              className="icons"
              onClick={() => route.push("https://github.com/sadafshahab12")}
            />
          </div>
        </nav>
        <section className="project-sec">
          <h1>What {`I’ve`} Built</h1>
          <h3>From concept to code, each project tells a story.</h3>
          <div className="projects">
            <ProjectCard
              src="/images/myprojects/recent1.png"
              title="Code and Connect"
              description="At Code & Connect, we turn ideas into reality with innovative software and seamless connectivity solutions. Let’s build the future together."
              githubLink="https://miles-stone2-website-with-next-js-and-custom-css.vercel.app/"
            />
            <ProjectCard
              src="/images/myprojects/recent2.png"
              title="Code & Connect | Login And SignUp"
              description="Created a secure login and sign-out system using Next.js, Auth.js, and GitHub OAuth, featuring a custom-built UI for a seamless authentication experience."
              githubLink="https://code-connect-login-sign-out-page-with-next-js.vercel.app/"
            />
            <ProjectCard
              src="/images/myprojects/recent3.png"
              title="Post Sphere"
              description="Post Sphere is a Next.js website that displays posts from the JSONPlaceholder API with a simple, fast, and responsive interface."
              githubLink="https://next-js-assignment-post-api-post-sphere.vercel.app/"
            />
            <ProjectCard
              src="/images/myprojects/recent4.png"
              title="Taste Bite"
              description="Created Taste Bite, an online food delivery website offering a seamless ordering experience with an intuitive interface and fast navigation."
              githubLink="https://milestone-2-assignments-next-js-with-tailwind-css.vercel.app/"
            />
            <ProjectCard
              src="/images/myprojects/recent5.png"
              title="Rise Up"
              description="Created Rise Up, a website built with Next.js and Tailwind CSS, featuring a custom design crafted in Figma for a sleek and responsive user experience."
              githubLink="https://rise-up-website-next-js-assignment-7.vercel.app/"
            />
            <ProjectCard
              src="/images/myprojects/recent6.png"
              title="Sadaf Shahab | First Portfolio"
              description="Created my first portfolio website showcasing my skills, projects, and experience, designed for a clean and professional online presence."
              githubLink="https://next-js-assignment-5-portfolio.vercel.app/"
            />
            <ProjectCard
              src="/images/myprojects/recent7.png"
              title="Sadaf Shahab | Second Portfolio"
              description="Developed a new portfolio design in Figma, focusing on a modern and visually appealing layout to better highlight my work and expertise."
              githubLink="https://next-js-assignment-6-portfolio.vercel.app/"
            />
            <ProjectCard
              src="/images/myprojects/recent8.png"
              title="Book Hub"
              description="Created Book Hub, a book management website that allows users to easily organize, track, and manage their book collections with an intuitive interface."
              githubLink="https://monday-2-5-assignment-submission-november-11-class-10.vercel.app/"
            />
          </div>
        </section>
      </header>
    </>
  );
};

export default Projects;
