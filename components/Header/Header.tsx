"use client";
import React, { useState, useEffect } from "react";
import { Navbar } from "flowbite-react";
import styles from "./Header.module.css";
import header_logo from "../../public/logo.png";
import Image from "next/image";

const Header = () => {
  const [navColor, setnavColor] = useState("transparent");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#2b2d33") : setnavColor("transparent");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div
      className={styles.header}
      style={{
        backgroundColor: navColor,
      }}
    >
      <div className="container mx-auto">
        <Navbar className={styles.header_nav} fluid={true} rounded={false}>
          <Navbar.Brand href="/">
            <Image
              src={header_logo}
              className={`mr-3 ${styles.logoImg}`}
              alt="Flowbite Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle className="bg-white" />
          <Navbar.Collapse>
            <Navbar.Link
              href="#banner"
              active={true}
              className={styles.header_links && styles.header_linksActive}
            >
              Home
            </Navbar.Link>
            <Navbar.Link href="#process" className={styles.header_links}>
              Process
            </Navbar.Link>
            <Navbar.Link href="#about" className={styles.header_links}>
              About
            </Navbar.Link>
            <Navbar.Link href="#portfolio" className={styles.header_links}>
              Portfolio
            </Navbar.Link>
            <Navbar.Link href="#contact" className={styles.header_links}>
              Contact
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
