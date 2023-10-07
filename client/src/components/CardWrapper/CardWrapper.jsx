import React from "react";
import { useState, useEffect, useRef } from "react";
import "./CardWrapper.CardWrapper.scss";
import Tilt from "react-parallax-tilt";
import data from "../../data/data.json";
import dummyData from "../../data/dummyData.json";

const CardWrapper = () => {
  console.log(dummyData);
  return (
    <div className="CardWrapper">
      <h1>{dummyData.city}</h1>
      <div className="wrapper">
        <div className="center-line"></div>
        {dummyData.days.map((item, index) => (
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
          {detail.places.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </section>
      </div>
    </Tilt>
  );
};

export default CardWrapper;
