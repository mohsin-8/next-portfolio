import Image from 'next/image';
import React from 'react';
import styles from "./Process.module.css";
import process_one_circle from "../../public/process1.png";
import process_two_circle from "../../public/process2.png";
import process_three_circle from "../../public/process3.png";
import process_one from "../../public/process_one.svg";
import process_two from "../../public/process_two.svg";
import process_three from "../../public/process_three.svg";

const Process = () => {
  return (
    <div className={styles.process}>
        <div className="container mx-auto">
            <div className='grid lg:grid-cols-3 md:grid-cols-3 gap-7'>
                <div className={styles.process_content}>
                    <div className={styles.process_img}>
                        <Image src={process_one_circle} className={styles.process_one_circle} alt="process_one_circle" />
                        <Image src={process_one} className={styles.process_one} alt="process_one" />
                    </div>

                    <div className={styles.process_heading}>
                        <h3>Pixel Perfect</h3>
                    </div>

                    <div className={styles.process_para}>
                        <p>
                            Most common methods for designing websites that work well on desktop is responsive and adaptive design.
                        </p>
                    </div>
                </div>

                <div className={styles.process_content}>
                    <div className={styles.process_img}>
                        <Image src={process_two_circle} className={styles.process_one_circle} alt="process_one_circle" />
                        <Image src={process_two} className={styles.process_one} alt="process_one" />
                    </div>

                    <div className={styles.process_heading}>
                        <h3>High Quality</h3>
                    </div>

                    <div className={styles.process_para}>
                        <p>
                            Most common methods for designing websites that work well on desktop is responsive and adaptive design.
                        </p>
                    </div>
                </div>

                <div className={styles.process_content}>
                    <div className={styles.process_img}>
                        <Image src={process_three_circle} className={styles.process_one_circle} alt="process_one_circle" />
                        <Image src={process_three} className={styles.process_one} alt="process_one" />
                    </div>

                    <div className={styles.process_heading}>
                        <h3>Awesome Idea</h3>
                    </div>

                    <div className={styles.process_para}>
                        <p>
                            Most common methods for designing websites that work well on desktop is responsive and adaptive design.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Process;