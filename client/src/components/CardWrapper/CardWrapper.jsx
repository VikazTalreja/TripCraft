import React from "react";
import { useState, useEffect, useRef } from "react";
import "./CardWrapper.CardWrapper.scss";
import Tilt from "react-parallax-tilt";
import data from "../../data/data.json";

const CardWrapper = () => {
  // useEffect(() => {
  //   const scrollToTopButton = document.querySelector(".scroll-icon");
  //   const scrollableDiv = document.querySelector(".ItineraryLists"); // Replace with the appropriate class or ID of your div

  //   scrollToTopButton.addEventListener("click", () => {
  //     console.log("Hello");
  //     scrollableDiv.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //     });
  //   });
  // }, []);
  return (
    <div className="CardWrapper">
      <div className="wrapper">
        <div className="center-line">
          {/* <button className="scroll-icon">
            <i className="start fas fa-caret-up"></i>
          </button> */}
        </div>
        {data.days.map((item, index) => (
          <Card position={index + 1} detail={item} key={index} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ detail, position }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    const scrollDiv = document.querySelector(".ItineraryLists");

    const handleScroll = () => {
      if (!hasAnimated) {
        const slideInAt =
          scrollDiv.scrollTop + scrollDiv.clientHeight - card.offsetHeight / 2;
        const cardBottom = card.offsetTop + card.offsetHeight;
        const isHalfShown = slideInAt > card.offsetTop;
        const isNotScrolledPast = scrollDiv.scrollTop < cardBottom;

        if (isHalfShown && isNotScrolledPast) {
          setIsVisible(true);
          setHasAnimated(true); // Set hasAnimated to true after the animation
        }
      }
    };

    // Check if the card is initially visible without scrolling
    const slideInAt =
      scrollDiv.scrollTop + scrollDiv.clientHeight - card.offsetHeight / 2;
    const cardBottom = card.offsetTop + card.offsetHeight;
    const isHalfShown = slideInAt > card.offsetTop;
    const isNotScrolledPast = scrollDiv.scrollTop < cardBottom;

    if (isHalfShown && isNotScrolledPast) {
      setIsVisible(true);
      setHasAnimated(true); // Set hasAnimated to true initially
    }

    scrollDiv.addEventListener("scroll", handleScroll);

    return () => {
      scrollDiv.removeEventListener("scroll", handleScroll);
    };
  }, [hasAnimated]);
  return (
    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
      <div
        className={`Card ${isVisible ? "visible" : ""} row row-${
          position % 2 ? "1" : "2"
        }
        ${position % 2 ? "Card-1" : "Card-2"}
        `}
        ref={cardRef}
      >
        <section>
          <i className="icon fa-solid fa-location-dot"></i>
          <h1>Day {detail.day}</h1>
          {detail.activities.map((item, index) => (
            <li key={index}>{item[0]}</li>
          ))}
        </section>
      </div>
    </Tilt>
  );
};

export default CardWrapper;
