"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Card from "../components/ui/Card";
import "../globals.css";
import SkillBar from "../components/ui/SkillBar";


const About = () => {
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
      <header className="about-section ">
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
      </header>
      <section className="about-content">
        <h1>About Me</h1>
        <p className="about-me">
          Hello, {`I’m`} <span className="highlight">Sadaf Shahab</span>, a
          passionate <span className="highlight">Front-End Developer</span> with
          a strong foundation in building responsive, dynamic, and user-friendly
          websites and applications. With a {`Bachelor's`} degree in Commerce, I
          bring a unique perspective to web development, blending business
          acumen with technical proficiency to create seamless digital
          experiences.
        </p>
        <div className="my-work">
          <h1>What I Do</h1>
          <div className="card-container">
            <div>
              <Card
                src="/images/mywork1.jpg"
                title="Web Development"
                description="Specializing in Next.js, HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS, I craft websites that are not only visually appealing but also highly functional."
              />
            </div>
            <div>
              <Card
                src="/images/mywork2.webp"
                title="Responsive Design"
                description="I ensure websites look great and perform seamlessly across all devices and screen sizes."
              />
            </div>
            <div>
              <Card
                src="/images/mywork3.webp"
                title=" UI/UX Focus"
                description="Leveraging my basic graphic design skills, I design intuitive, user-friendly interfaces that enhance the user experience."
              />
            </div>
            <div>
              <Card
                src="/images/mywork4.jpg"
                title="Performance Optimization"
                description="Committed to writing clean, efficient code that ensures fast loading times and great performance."
              />
            </div>
          </div>
          <div className="myskills">
            <h1>My Skills</h1>
            <div className="my-skills-bar">
              <SkillBar percentage={95} src="/images/extra3.webp" />
              <SkillBar percentage={90} src="/images/extra4.webp" />
              <SkillBar percentage={80} src="/images/extra5.webp" />
              <SkillBar percentage={85} src="/images/extra6.webp" />
              <SkillBar percentage={70} src="/images/extra9.png" />
              <SkillBar percentage={85} src="/images/extra2.webp" />
              <SkillBar percentage={50} src="/images/extra8.webp" />
              <SkillBar percentage={30} src="/images/extra7.webp" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
