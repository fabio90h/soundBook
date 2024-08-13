import React, { useRef } from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  border: 1px solid red;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Card: React.FC<{
  pageNumber: number;
  pageSounds: string[];
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  counter: number;
  wasSwiped: boolean;
  setWasSwiped: React.Dispatch<React.SetStateAction<boolean>>;
}> = (props) => {
  const {
    pageNumber,
    pageSounds,
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
      <div>Page {pageNumber + 1}</div>
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
