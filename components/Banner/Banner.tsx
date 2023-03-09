import React from "react";
import styles from "./Banner.module.css";
import Link from "next/link";
import Image from "next/image";
import banner_img from "../../public/banner_img.png";
import next_logo from "../../public/next.png";
import TS from "../../public/typescript.png";
import js_svg_icon from "../../public/js.svg.png";
import bg_banner from "../../public/banner.jpg";

const Banner = () => {
  return (
    <div className={styles.banner} id="banner">
      <Image src={bg_banner} className={styles.bgbannerImg} alt="bg_banner" />
      <div className="container mx-auto">
        <div
          className={`grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-12 flex items-center
            ${styles.banner_container}`}
          // style={{
          //   maxWidth: "1230px",
          //   margin: "auto",
          //   marginTop: "100px",
          // }}
        >
          <div className={styles.banner_content}>
            <h3>Hello, I&apos;m</h3>

            <h1>Mohsin Ali Khan</h1>

            <p className={`text-3xl lg:text-2xl text-white ${styles.para}`}>
              A
              <span className="text-green-400">
                {" "}
                NextJs Frontend Developer{" "}
              </span>
              From <span className="text-purple-400">Karachi</span>
            </p>

            <div className="mt-5">
              <p
                className={`text-2xl font-light text-white ${styles.banner_text}`}
              >
                I&apos;m creative NextJs Frontend Developer based in Karachi,
                and I&apos;m very passionate and dedicated to my work.
              </p>
            </div>

            <div className={`${styles.mainBtnDiv} mt-16 lg:mt-10`}>
              <Link href="#" className="orangeBtn">
                About Me
              </Link>
            </div>
          </div>

          <div className={styles.banner_img_div}>
            <Image
              src={banner_img}
              className={styles.bannerImg}
              alt="banner img"
            />

            <Image
              src={next_logo}
              className={styles.next_logo_img}
              alt="banner img"
            />

            <Image
              src={TS}
              className={styles.react_logo_img}
              alt="banner img"
            />

            <Image
              src={js_svg_icon}
              className={styles.js_logo_img}
              alt="banner img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
