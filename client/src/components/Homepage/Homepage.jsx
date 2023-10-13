import React, { useEffect, useRef } from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
import gsap from "gsap";

import Bgvideo from "../../assets/Homebg.mp4";
import NewVideo from "../../assets/Homebg2.mp4"; // The new video

function Homepage() {
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const socialIconsRef = useRef(null);
  const newVideoRef = useRef(null);

  const [showNewVideo, setShowNewVideo] = React.useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const homepagetext = textRef.current;
    const socialicons = socialIconsRef.current;

    // Create a timeline for animations
    const tl = gsap.timeline();

    // Start by hiding text and social icons
    gsap.set(homepagetext, { opacity: 0 });
    gsap.set(socialicons, { opacity: 0 });

    tl.to(video, {
      duration: 2,
      opacity: 1,
      filter: "blur(0)",
      onComplete: () => {
        video.pause();
        video.style.pointerEvents = "none";
        tl.to(homepagetext, { duration: 1, opacity: 1 });
        tl.to(socialicons, { duration: 1, opacity: 1 });
      },
    });

    tl.to(video, { duration: 1, opacity: 0.6, filter: "blur(1px)" });
  }, []);

  const handleExploreClick = () => {
    const exploreTimeline = gsap.timeline();

    exploreTimeline.to(textRef.current, { duration: 1, opacity: 0 });
    exploreTimeline.to(
      socialIconsRef.current,
      { duration: 1, opacity: 0 },
      "-=1"
    );

    const newTimeline = gsap.timeline();

    const video = videoRef.current;
    newTimeline.to(video, { duration: 1, opacity: 0 });

    const newVideo = newVideoRef.current;
    newTimeline.to(newVideo, { duration: 1, opacity: 1 });
    newTimeline.call(() => {
      newVideo.play();

      gsap.to(newVideo, { duration: 0.2, opacity: 0 });

      setTimeout(() => {
        window.location.href = "/login";
      }, 0);
    });

    setShowNewVideo(true);
  };

  return (
    <div className="homepage">
      <section className="showcase">
        <header>
          <h2 className="logo">🌍Tripcraft</h2>
        </header>
        <video
          ref={videoRef}
          src={Bgvideo}
          autoPlay
          muted
          className="video-bg"
        />
        <video
          ref={newVideoRef}
          src={NewVideo}
          style={{ display: showNewVideo ? "block" : "none" }}
          autoPlay
          muted
          className="video-bg"
        />
        <div className="overlay"></div>
        <div ref={textRef} className="text">
          <h2>Explore the World</h2>
          <p>
            Click the "Explore" button below to begin your journey. Whether
            you're looking for a relaxing beach getaway, a cultural expedition,
            or an adrenaline-pumping adventure, Trip Craft has you covered.
            Let's start crafting your next adventure today!
          </p>
          <button className="Explore_button" onClick={handleExploreClick}>
            Explore
          </button>
        </div>
        <ul ref={socialIconsRef} className="social">
          <li>
            <a href="#">
              <img src="https://i.ibb.co/x7P24fL/facebook.png" alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://i.ibb.co/Wnxq2Nq/twitter.png" alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://i.ibb.co/ySwtH4B/instagram.png"
                alt="Instagram"
              />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Homepage;
