import React, { useState } from "react";
import { pagesSounds } from "./data";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card } from "./Card";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

/**
 * TODO:
 * - Change the custom button from play to pause
 * - Need to add image to the pages (need to remove the text)
 * - Custom Button to be on the bottom of the page
 * - Custom Button changes color when completed
 *
 * - Main button plays and goes to the next track [DONE]
 * - Swipe right goes to the next page [DONE]
 * - Option to select the next sound manually [DONE]
 *
 * - When track is done it has to vibrate the phone.
 */

const Sound: React.FC<{}> = () => {
  const [counter, setCounter] = useState(0);
  const [wasSwiped, setWasSwiped] = useState(false);

  const handleAfterSwipe = (previousSlide: number) => {
    const audio = document.getElementById(
      `audio_tag_page${previousSlide}-${counter}`
    ) as HTMLAudioElement;

    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    setWasSwiped(true);
    setCounter(0);
  };

  return (
    <Carousel
      responsive={responsive}
      swipeable={true}
      draggable={true}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      afterChange={(previousSlide) => handleAfterSwipe(previousSlide)}
    >
      {pagesSounds.map((pageSounds, index) => {
        return (
          <Card
            key={index}
            pageSounds={pageSounds}
            pageNumber={index}
            wasSwiped={wasSwiped}
            setWasSwiped={setWasSwiped}
            counter={counter}
            setCounter={setCounter}
          />
        );
      })}
    </Carousel>
  );
};

export default Sound;
