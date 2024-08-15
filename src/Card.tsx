import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  //   border: 1px solid red;
  background: #eef3f7;
  //   width: 410px;
  min-height: 300px;
  //   height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  //   box-shadow: 0px 15px 35px -5px rgba(50, 88, 130, 0.32);
  //   box-shadow: 0px 55px 75px -10px rgba(76, 70, 124, 0.5);
  box-shadow: 0px 15px 35px -5px rgba(50, 88, 130, 0.32);
  //   box-shadow: 3.2px 6.4px 6.4px hsl(0deg 0% 0% / 0.4);
  border-radius: 15px;
  padding: 30px;

  @media screen and (max-width: 576px), (max-height: 500px) {
    // width: 95%;
    margin: 35px;
    margin-top: 75px;
    // min-height: initial;
    // margin-bottom: 30px;
    max-width: 400px;
  }
`;

const Cover = styled.div`
  width: 300px;
  height: 250px;
  //   margin-left: -70px;
  //   border: 1px solid red;
  flex-shrink: 0;
  position: relative;
  //   z-index: 2;
  border-radius: 15px;
  z-index: 1;

  @media screen and (max-width: 576px), (max-height: 500px) {
    .player-cover {
      margin-top: -70px;
      margin-bottom: 25px;
      width: 290px;
      height: 230px;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

const ImageWrapper = styled.div<{ $url: string }>`
  width: 300px;
  height: 300px;
  background-image: url(${(props) => props.$url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  //   border: 1px solid purple;
  flex-shrink: 0;
  position: relative;
  z-index: 2;
  border-radius: 15px;

  @media screen and (max-width: 576px), (max-height: 500px) {
    margin-top: -70px;
    margin-bottom: 25px;
    width: 290px;
    height: 230px;
    margin-left: auto;
    margin-right: auto;
  }

  &:after {
    content: "";
    background: inherit;
    width: 100%;
    height: 100%;
    box-shadow: 0px 10px 40px 0px rgba(76, 70, 124, 0.5);
    display: block;
    z-index: 2;
    position: absolute;
    border-radius: 15px;
  }

  &:before {
    content: "";
    background: inherit;
    width: 100%;
    height: 100%;
    box-shadow: 0px 10px 40px 0px rgba(76, 70, 124, 0.5);
    display: block;
    z-index: 1;
    position: absolute;
    top: 30px;
    transform: scale(0.9);
    filter: blur(10px);
    opacity: 0.9;
    border-radius: 15px;
  }
`;

// const Image = styled.img`
//   //   border: 1px solid yellow;
//   background-color: blue;
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;
//   width: 100%;
//   height: 100%;
//   border-radius: 15px;
//   position: absolute;
//   left: 0;
//   top: 0;
// `;

export const Card: React.FC<{
  pageNumber: number;
  pageSounds: string[];
  imageSrc: string;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  counter: number;
  wasSwiped: boolean;
  setWasSwiped: React.Dispatch<React.SetStateAction<boolean>>;
}> = (props) => {
  const {
    pageNumber,
    pageSounds,
    imageSrc,
    setCounter,
    counter,
    wasSwiped,
    setWasSwiped,
  } = props;

  // -1 means no track is being played
  const [indexPlaying, setIndexPlaying] = React.useState(-1);
  const [playedArray, setPlayedArray] = React.useState(new Set());
  const limit = pageSounds.length;

  const handleOnClick = (index = counter) => {
    if (index === limit) return;

    const audio = document.getElementById(
      `audio_tag_page${pageNumber}-${index}`
    ) as HTMLAudioElement;

    console.log(`audio_tag_page${pageNumber}-${index}`);

    if (indexPlaying === index) {
      audio.pause();
      setIndexPlaying(-1);
    } else {
      audio.currentTime = 0;
      audio.play();
      setIndexPlaying(index);
      setCounter(index);
      audio.addEventListener("ended", () => {
        setPlayedArray((prev) =>
          prev.add(`audio_tag_page${pageNumber}-${index}`)
        );
        setIndexPlaying(-1);
        setCounter((prev) => (prev < limit ? prev + 1 : prev));
      });
    }
  };

  // Reset when the cards are swiped
  React.useEffect(() => {
    if (wasSwiped) {
      setWasSwiped(false);
      setIndexPlaying(-1);
      setPlayedArray(new Set());
    }
  }, [setWasSwiped, wasSwiped]);

  return (
    <CardWrapper id={`${pageNumber}`}>
      <Cover>
        <ImageWrapper
          $url={
            "data:image/jpeg;base64,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"
          }
        />
        {/* <Image  />
        </ImageWrapper> */}
      </Cover>
      <button disabled={counter === limit} onClick={() => handleOnClick()}>
        MAIN
      </button>
      {pageSounds.map((sound, index) => (
        <>
          <audio id={`audio_tag_page${pageNumber}-${index}`} src={sound} />
          <button
            disabled={indexPlaying !== -1 && indexPlaying !== index}
            onClick={() => handleOnClick(index)}
          >
            {indexPlaying === index
              ? "pause"
              : playedArray.has(`audio_tag_page${pageNumber}-${index}`)
              ? "done"
              : "play"}
          </button>
        </>
      ))}
    </CardWrapper>
  );
};
