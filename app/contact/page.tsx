"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../components/ui/Button";
import "../globals.css";

const Contact = () => {
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
      <header className="contact-section ">
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
        <section className="contact-me">
          <h1>Contact Me</h1>
          <h4>{`Let's`} Connect and Create Something Amazing</h4>
          <p>
            {` I’d`} love to hear from you! Whether you have a project in mind,
            a question, or just want to say hello, feel free to reach out. Let’s
            collaborate and bring your ideas to life.
          </p>
          <div className="contact-content">
            <div className="content1">
              <h1>Get in Touch</h1>
              <p className="content-highlight">
                Have a question or want to <span>start a project?</span> Fill
                out the form below, and {`I'll`} get back to you as soon as
                possible!
              </p>
              <div className="content-card">
                <Image
                  src="/images/contact1.jpg"
                  alt="contact"
                  width={500}
                  height={500}
                  className="content-img"
                />
                <form action="">
                  <input type="text" name="name" placeholder="Your Name" />
                  <input type="email" name="email" placeholder="Email" />
                  <textarea name="message" placeholder="Message"></textarea>
                  <Button btnText="Send Message" />
                </form>
              </div>
            </div>
            <div className="content2">
              <h2>Email Me Directly</h2>
              <p className="content-highlight">
                If you prefer to email me directly, feel <span>free</span> to
                send a message to:
              </p>
              <div className="content-card">
                <Image
                  src="/images/contact22.jpg"
                  alt="conact"
                  width={500}
                  height={500}
                  className="content2-img"
                />
                <Link
                  href="mailto:sadafshahabsr12@gmail.com"
                  className="content2-email"
                >
                  sadafshahabsr12@gmail.com
                </Link>
                <Link
                  href="mailto:sadafshahab123@yahoo.com"
                  className="content2-email"
                >
                  sadafshahab123@yahoo.com
                </Link>
              </div>
              <p className="content-highlight">
                For business inquiries or collaborations, {`don't`} hesitate to{" "}
                <span>reach out!</span>
              </p>
            </div>
            <div className="content3">
              <h2>Follow me</h2>

              <p className="content-highlight">
                Stay up-to-date with my{" "}
                <span>latest projects and adventures</span> by following me on{" "}
                <span>social media</span>.
              </p>
              <div className="content-card">
                <div className="images">
                  <Image
                    src="/images/folowbg.jpg"
                    alt="insta"
                    width={500}
                    height={500}
                    className="social-images"
                  />
                </div>

                <div className="social-links footer-follow-link contact-links ">
                  <Link
                    href="https://x.com/sadafshahab12"
                    className="contact-link contact-link-address"
                  >
                    <Image
                      src="/images/socialicon1.png"
                      alt="social-icon"
                      width={500}
                      height={500}
                      className="social-icon icon-shadow"
                    />
                    Twitter
                  </Link>
                  <Link
                    href="https://www.facebook.com/profile.php?id=61556555833599"
                    className="contact-link contact-link-address"
                  >
                    <Image
                      src="/images/socialicon2.png"
                      alt="social-icon"
                      width={500}
                      height={500}
                      className="social-icon icon-shadow"
                    />
                    Facebook
                  </Link>
                  <Link
                    href="https://www.instagram.com/sadafshahab12/"
                    className="contact-link contact-link-address"
                  >
                    <Image
                      src="/images/socialicon6.png"
                      alt="social-icon"
                      width={500}
                      height={500}
                      className="social-icon icon-shadow"
                    />
                    Instagram
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/sadaf-shahab-ssr123"
                    className="contact-link contact-link-address"
                  >
                    <Image
                      src="/images/socialicon4.png"
                      alt="social-icon"
                      width={500}
                      height={500}
                      className="social-icon icon-shadow"
                    />
                    LinkedIn
                  </Link>
                  <Link
                    href="https://github.com/sadafshahab12"
                    className="contact-link contact-link-address"
                  >
                    <Image
                      src="/images/socialicon5.png"
                      alt="social-icon"
                      width={500}
                      height={500}
                      className="social-icon icon-shadow"
                    />
                    Github
                  </Link>
                </div>
              </div>
            </div>
            <div className="content4">
              <h2>Location & Availability</h2>
              <p className="content-highlight">
                Currently based in <span>Karachi, Pakistan</span>
              </p>
              <Image
                src="/images/contact4.avif"
                alt="contact-image"
                width={500}
                height={500}
                className="content-img4"
              />
              <p className="content-highlight">
                Available for{" "}
                <span>
                  Freelance work, project collaborations, and consultations.
                </span>{" "}
                Reach out to discuss how we can work together.
              </p>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Contact;
