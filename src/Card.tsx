import React from "react";
import styled from "styled-components";
import Replay from "./play-icon-rotate.svg";
import Play from "./play-solid-icon.svg";
import Stop from "./stop-icon-solid.svg";

import { PlayButton } from "./PlayButton";

const CardWrapper = styled.div`
  background: #eef3f7;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 15px 35px -5px rgba(50, 88, 130, 0.32);
  border-radius: 15px;
  padding: 30px;
  width: 90%;
  margin: auto;
  margin-top: 30vh;
  margin-bottom: 75px;

  max-height: 400px;
  max-width: 600px;
`;

const Cover = styled.div`
  width: 90%;
  position: relative;
  border-radius: 15px;
  z-index: 1;
  margin-top: -80px;

  height: 300px;
`;

const ImageWrapper = styled.div<{ $url: string }>`
  width: 100%;
  height: 85%;

  background-image: url(${(props) => props.$url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  flex-shrink: 0;
  position: relative;
  z-index: 2;
  border-radius: 15px;

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

const Table = styled.div`
  width: 90%;
  overflow-y: scroll;

  z-index: 1;

  height: 100px;
`;

const Icon = styled.img<{ disabled: boolean }>`
  width: 20px;
  height: 20px;

  cursor: ${(props) => (props.disabled ? "mouse" : "pointer")};
`;

const PlayBackdrop = styled.div`
  -o-backdrop-filter: blur(4.5px);
  -moz-backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  backdrop-filter: blur(4.5px);

  border-radius: 15px;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 100;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Player = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const CircleOfCompletionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`;

const CircleOfCompletion = styled.div<{ completed: boolean }>`
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: ${(props) => (props.completed ? "#9dd6a1" : "#ddddf4")};
`;

const ProgressBar = styled.progress<{ $done: boolean }>`
  height: 30px;
  width: 75%;

  height: 8px;
  background-color: #d0d8e6;

  &::-webkit-progress-bar {
    background-color: #d0d8e6;
    border-radius: 10px;
  }

  &::-webkit-progress-value {
    background-color: ${(props) => (props.$done ? "#9dd6a1" : "#a3b3ce")};
    border-radius: 10px;
  }
`;

const HorizontalLine = styled.hr`
  border: 1px solid #ccd0d4;
  opacity: 0.6;
`;

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
  const [audioDuration, setAudioDuration] = React.useState(0);
  const [audioCurrentTime, setAudioCurrentTime] = React.useState(0);
  const [playedArray, setPlayedArray] = React.useState(new Set());

  const limit = pageSounds.length;

  const handleOnClick = (index = counter) => {
    if (index === limit) return;

    const audio = document.getElementById(
      `audio_tag_page${pageNumber}-${index}`
    ) as HTMLAudioElement;

    if (indexPlaying === index) {
      audio.pause();
      setIndexPlaying(-1);
    } else {
      audio.currentTime = 0;
      setAudioDuration(audio.duration);

      audio.play();
      setIndexPlaying(index);
      setCounter(index);

      audio.addEventListener("timeupdate", () => {
        setAudioCurrentTime(audio.currentTime);
      });

      audio.addEventListener("ended", () => {
        setPlayedArray((prev) =>
          prev.add(`audio_tag_page${pageNumber}-${index}`)
        );
        setIndexPlaying(-1);
        setCounter((prev) => (prev < limit ? prev + 1 : prev));
      });
    }
  };

  const determineState = (
    index: number,
    audioPlaying: string | number | Function,
    audioDone: string | number | Function,
    audioStopped: string | number | Function
  ) => {
    // Audio is currently playing
    if (indexPlaying === index) {
      return audioPlaying;
    }
    // Audio is finished
    else if (playedArray.has(`audio_tag_page${pageNumber}-${index}`)) {
      return audioDone;
    }
    // Audio is stopped
    return audioStopped;
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
        <ImageWrapper $url={imageSrc}>
          <PlayBackdrop>
            <PlayButton
              onClick={() => handleOnClick()}
              playing={indexPlaying === -1}
              done={playedArray.size === limit}
            />
            <CircleOfCompletionContainer>
              {pageSounds.map((sound, index) => (
                <CircleOfCompletion
                  completed={playedArray.has(
                    `audio_tag_page${pageNumber}-${index}`
                  )}
                />
              ))}
            </CircleOfCompletionContainer>
          </PlayBackdrop>
        </ImageWrapper>
      </Cover>
      <Table>
        {pageSounds.map((sound, index) => (
          <>
            <Player>
              <audio id={`audio_tag_page${pageNumber}-${index}`} src={sound} />
              <Icon
                disabled={indexPlaying !== -1 && indexPlaying !== index}
                src={determineState(index, Stop, Replay, Play) as string}
                onClick={
                  indexPlaying !== -1 && indexPlaying !== index // Something is playing and it is not the one clicked
                    ? undefined
                    : () => handleOnClick(index)
                }
              />
              <ProgressBar
                $done={playedArray.has(`audio_tag_page${pageNumber}-${index}`)}
                max={audioDuration}
                value={
                  determineState(
                    index,
                    audioCurrentTime,
                    audioDuration,
                    0
                  ) as number
                }
              />
            </Player>
            {index < pageSounds.length - 1 && <HorizontalLine />}
          </>
        ))}
      </Table>
    </CardWrapper>
  );
};
