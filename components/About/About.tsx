import Image from 'next/image';
import React from 'react';
import styles from "./About.module.css";
import aboutimg from "../../public/about.jpg";
import brushesImg from "../../public/brushes.png";
import brushes2 from "../../public/brushes2.png";
import Link from 'next/link';

const About = () => {
  return (
    <div className={styles.about}>
        <Image src={brushesImg} className={styles.brushes_Img} alt="brushesImg" />
        <Image src={brushes2} className={styles.brushes2_Img} alt="brushesImg" />
        <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 flex items-center">
                <div className={styles.aboutImg}>
                    <Image src={aboutimg} alt='about_image' />
                </div>

                <div className={styles.about_content}>
                    <span>I&apos;m a Developer</span>
                    <h3>
                        I Can Develop Anything <br /> You Want
                    </h3>

                    <p>
                        Hello there! I&apos;m a Web App Developer, and I&apos;m very passionate and dedicated to my work. 
                        With 1 years experience as a professional Web App Developer, I have acquired the skills 
                        and knowledge necessary to make your project a success. I enjoy every step of the 
                        design process, from discussion and collaboration.
                    </p>

                    <div className='mt-12'>
                        <Link href="#" className="orangeBtn">
                            About Me
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;