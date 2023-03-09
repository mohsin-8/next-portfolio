"use client";
//useSWR allows the use of SWR inside function components
import React from "react";
import styles from "./Portfolio.module.css";
import Image from "next/image";
import portData from "../../json/portfolio.json";
import Link from "next/link";

import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1">
          <div className={styles.portfolio_content}>
            <span>Portfolio</span>

            <h3>My Amazing Works</h3>

            <p>
              Most common methods for designing websites that work well on
              desktop is <br />
              responsive and adaptive design
            </p>
          </div>
        </div>

        <div className={styles.portMainContent}>
          <div className="grid lg:grid-cols-3 md:grid-cols-3 md:gap-7">
            {portData.port.map((data): any => {
              Fancybox.bind('[data-fancybox="gallery"]', {
                // Your custom options
              });
              return (
                <div className={styles.port_box} key={data.id}>
                  <Link
                    href={data.image}
                    data-fancybox="gallery"
                    data-caption={data.name}
                  >
                    <Image
                      src={data.image}
                      className={styles.port_image}
                      width={350}
                      height={350}
                      alt={data.name}
                    />
                  </Link>
                  <h1>{data.name}</h1>
                  <div className={styles.websiteLinkDiv}>
                    <Link
                      href={data.link}
                      className={styles.websiteLink}
                      target="_blank"
                    >
                      {data.link}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
