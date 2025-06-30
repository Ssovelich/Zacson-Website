"use client";

import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import styles from "./VideoBanner.module.css";

const VideoBanner = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className={styles.videoBanner}>
      <div className={`container ${styles.videoContent}`}>
        <h2 className={styles.videoTitle}>Watch Our Training in Action</h2>
        {!showVideo ? (
          <button className={styles.playButton} onClick={() => setShowVideo(true)}>
            <FaPlay />
          </button>
        ) : (
          <div className={styles.videoWrapper}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/kAUVOHB3XYM?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
}

export default VideoBanner;
