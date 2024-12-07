"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import "../globals.css";
import Button from "./ui/Button";
const Footer = () => {
  const route = useRouter();
  return (
    <>
      <footer>
        <div className="sec1">
          <div>
            <h1>Sadaf Shahab</h1>
            <p>Front End Developer</p>
          </div>

          <Image
            src="/images/footerlogo.png"
            width={800}
            height={500}
            alt="footer-logo"
            className="footer-logo"
          />
        </div>
        <div className="sec2">
          <h1>Menu</h1>
          <ul className="footer-menu">
            <li>
              <Link href="/" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="link">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="link">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="sec3">
          <div className="follow">
            <div className="follow-me">
              <h1>Follow Me</h1>
              <div className="social-links footer-follow-link">
                <Link href="https://x.com/sadafshahab12">
                  <Image
                    src="/images/socialicon1.png"
                    alt="social-icon"
                    width={500}
                    height={500}
                    className="social-icon icon-shadow"
                  />
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=61556555833599">
                  <Image
                    src="/images/socialicon2.png"
                    alt="social-icon"
                    width={500}
                    height={500}
                    className="social-icon icon-shadow"
                  />
                </Link>
                <Link href="https://www.instagram.com/sadafshahab12/">
                  <Image
                    src="/images/socialicon6.png"
                    alt="social-icon"
                    width={500}
                    height={500}
                    className="social-icon icon-shadow"
                  />
                </Link>
                <Link href="https://www.linkedin.com/in/sadaf-shahab-ssr123">
                  <Image
                    src="/images/socialicon4.png"
                    alt="social-icon"
                    width={500}
                    height={500}
                    className="social-icon icon-shadow"
                  />
                </Link>
                <Link href="https://github.com/sadafshahab12">
                  <Image
                    src="/images/socialicon5.png"
                    alt="social-icon"
                    width={500}
                    height={500}
                    className="social-icon icon-shadow"
                  />
                </Link>
              </div>
            </div>

            <div className="join-me">
              <h1>Join Me</h1>
              <form>
                <input type="email" placeholder="Email Address" />
                <div
                  onClick={() =>
                    route.push(
                      "https://whatsapp.com/channel/0029VavNVEC0QeagHWhkXD0A"
                    )
                  }
                >
                  <Button btnText="Join Me" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
