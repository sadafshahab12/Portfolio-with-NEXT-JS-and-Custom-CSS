"use client";
import Link from "next/link";
import React, { useState } from "react";
import "../globals.css";
import Image from "next/image";
import Button from "./ui/Button";
import { useRouter } from "next/navigation";

const HeroSec = () => {
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
      <section className="hero-section">
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
        <div className="hero">
          <div className="center">
            <h5>Welcome To My Portfolio</h5>
            <h1>Shaping the Future with Every Project</h1>
            <h3>Building {`Tomorrow’s`} Web, One Line of Code at a Time</h3>

            <p>
              As a passionate{" "}
              <strong className="bold">Front-End Developer</strong> specializing
              in <strong className="color">Next JS</strong> I craft seamless,
              high-performance web experiences that shape the digital future.
              With a focus on clean code and innovative solutions, I turn
              visions into responsive, user-friendly applications that stand the
              test of time. Let’s build something extraordinary together.
            </p>
            <div className="social-links">
              <Link href="https://x.com/sadafshahab12">
                <Image
                  src="/images/socialicon1.png"
                  alt="social-icon"
                  width={500}
                  height={500}
                  className="social-icon"
                />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=61556555833599">
                <Image
                  src="/images/socialicon2.png"
                  alt="social-icon"
                  width={500}
                  height={500}
                  className="social-icon"
                />
              </Link>
              <Link href="https://www.instagram.com/sadafshahab12/">
                <Image
                  src="/images/socialicon3.png"
                  alt="social-icon"
                  width={500}
                  height={500}
                  className="social-icon"
                />
              </Link>
            </div>
            <div className="hero-btn">
              <div
                onClick={() => route.push("https://github.com/sadafshahab12")}
              >
                <Button btnText="Hire Me" />
              </div>
              <div onClick={() => route.push("https://wa.me/+923402195735")}>
                <Button btnText="Contact Me" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSec;
