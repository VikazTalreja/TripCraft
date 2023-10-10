import React from "react";
import { useState, useEffect, useRef } from "react";
import "./CardWrapper.CardWrapper.scss";
import Tilt from "react-parallax-tilt";

const CardWrapper = () => {
  const jsonString = sessionStorage.getItem("response");
  const data = JSON.parse(jsonString);

  return (
    <div className="CardWrapper">
      {console.log(data)}
      <h1>{data.city}</h1>
      <div className="wrapper">
        <div className="center-line"></div>
        {data.places.map((item, index) => (
          <Card position={index + 1} info={item} />
          // {console.log(item)}
          // <>
          //   <h1>{item.day}</h1>
          //   <h1>{item.activities}</h1>
          // </>
        ))}
      </div>
    </div>
    // <>
    //   <h1>works</h1>
    //   {console.log(data)}
    //   {console.log(data.places)}
    //   <h1>{data.city} is nice</h1>
    //   {data.places.map((item) => {
    //     console.log(item.day);

    //     {
    //       item.activities.map((_item) => {
    //         <h1>{_item[0][0]}</h1>;
    //         console.log(_item[0][0]);
    //       });
    //     }
    //   })}
    // </>
  );
};

const Card = ({ position, info }) => {
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
          <h1>Day {info.day}</h1>
          <ul>
            {info.activities.map((activity, index) => (
              <li key={index}>{activity[0][0]}</li>
            ))}
          </ul>
        </section>
      </div>
    </Tilt>
  );
};

export default CardWrapper;
