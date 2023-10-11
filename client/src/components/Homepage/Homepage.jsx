import React, { useEffect, useRef } from "react";
import "./Homepage.Homepage.css";
import { Link } from "react-router-dom";
import gsap from "gsap";

import Bgvideo from "../../assets/Homebg.mp4";

function Homepage() {
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const socialIconsRef = useRef(null);

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
        video.pause(); // Pause the video at the last frame
        video.style.pointerEvents = "none"; // Disable clicks on the video
        tl.to(homepagetext, { duration: 1, opacity: 1 }); // Fade in text
        tl.to(socialicons, { duration: 1, opacity: 1 }); // Fade in social icons
      },
    });

    tl.to(video, { duration: 1, opacity: 0.6, filter: "blur(1px)" });
  }, []);

  const handleExploreClick = () => {
    const exploreTimeline = gsap.timeline();

    // Add animations to hide text and social icons
    exploreTimeline.to(textRef.current, { duration: 1, opacity: 0 });
    exploreTimeline.to(
      socialIconsRef.current,
      { duration: 1, opacity: 0 },
      "-=1"
    );
  };

  return (
    <div className="homepage">
      <section className="showcase">
        <header>
          <h2 className="logo">🌍TripCraft</h2>
        </header>
        <video
          ref={videoRef}
          src={Bgvideo}
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
          <Link to="/login" onClick={handleExploreClick}>
            Explore
          </Link>
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
