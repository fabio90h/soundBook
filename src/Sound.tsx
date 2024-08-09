import React, { useState } from "react";
import { soundLibrary } from "./data";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";

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

const Card = styled.div`
  border: 1px solid red;
`;

const Sound: React.FC<{}> = () => {
  const [play, setPlay] = useState(false);

  const handleSoundButton = (index: number) => {
    const audio = document.getElementById(
      `audio_tag_${index}`
    ) as HTMLAudioElement;
    play ? setPlay(false) : setPlay(true);
    play && audio ? audio.pause() : audio!.play();
  };

  const handleAfterSwipe = (previousSlide: number) => {
    const audio = document.getElementById(
      `audio_tag_${previousSlide}`
    ) as HTMLAudioElement;

    audio.pause();
    audio.currentTime = 0;
  };

  return (
    <Carousel
      responsive={responsive}
      swipeable={true}
      draggable={true}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      afterChange={(previousSlide, state) => handleAfterSwipe(previousSlide)}
    >
      {soundLibrary.map((sound, index) => {
        return (
          <Card key={`sound-${index}`}>
            <button onClick={() => handleSoundButton(index)}>hello</button>
            <audio controls id={`audio_tag_${index}`} src={sound} />
          </Card>
        );
      })}
    </Carousel>
  );
};

export default Sound;
