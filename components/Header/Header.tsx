"use client";
import React, {useState, useEffect} from 'react';
import { Navbar } from "flowbite-react";
import styles from "./Header.module.css";
import header_logo from "../../public/logo.png";
import Image from 'next/image';

const Header = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (backgroundTransparacyVar < 1) {
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);
  
  return (
   <div className={styles.header}  style={{
    background: `rgba(64,68,85, ${backgroundTransparacy})`,
    boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
  }}>
      <div className="container mx-auto">
          <Navbar
          className={styles.header_nav}
    fluid={true}
    rounded={false}
  >
    <Navbar.Brand href="/">
      <Image
        src={header_logo}
        className="mr-3 w-11"
        alt="Flowbite Logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Navbar.Link
        href="/"
        active={true}
        className={styles.header_links && styles.header_linksActive}
      >
        Home
      </Navbar.Link>
      <Navbar.Link href="#" className={styles.header_links}>
        Process
      </Navbar.Link>
      <Navbar.Link href="#" className={styles.header_links}>
        About
      </Navbar.Link>
      <Navbar.Link href="#" className={styles.header_links}>
        Portfolio
      </Navbar.Link>
      <Navbar.Link href="#" className={styles.header_links}>
        Contact
      </Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
      </div>
   </div>
  )
}

export default Header;