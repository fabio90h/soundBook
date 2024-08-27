import React from "react";
import styled from "styled-components";

const Liner = styled.span`
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: #ddddf4;
  opacity: 1;

  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
`;

const PlayButtonWrapper = styled.div<{ open: boolean; next: boolean }>`
  width: 40px;
  height: 40px;

  margin: 75px auto;
  z-index: 100;

  width: 40px;
  height: 40px;

  position: relative;

  cursor: ${(props) => (props.next ? "mouse" : "pointer")};

  animation-delay: 3s;
  animation: ${(props) =>
    props.next && props.open ? "bounce 2s infinite" : "none"};

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateX(30px);
    }
    40% {
      transform: translateX(0px);
    }
    60% {
      transform: translateX(15px);
    }
  }

  span:nth-child(1) {
    //top side
    transform: ${(props) => (props.open ? "rotate(30deg)" : "left center")};

    left: ${(props) => (props.open ? "-7%" : "0")};
    top: ${(props) => (props.open ? "25%" : "0px")};

    width: 100%;
  }

  span:nth-child(2) {
    //left side
    transform: ${({ next, open }) =>
      next && open ? "rotate(0deg)" : "rotate(90deg)"};
    left: -50%;
    top: 50%;

    width: 100%;
  }

  span:nth-child(3) {
    //right side
    width: ${(props) => (props.open ? "0px" : "100%")};

    transform: rotate(90deg);

    left: 50%;
    top: 50%;
  }

  span:nth-child(4) {
    //bottom side
    transform: ${(props) => (props.open ? "rotate(-30deg)" : "left center")};

    left: ${(props) => (props.open ? "-8%" : "0%")};
    top: ${(props) => (props.open ? "75%" : "100%")};

    width: 100%;
  }
`;

type Props = {
  playing: boolean;
  done: boolean;
  onClick(): void;
};

export const PlayButton: React.FC<Props> = ({ onClick, playing, done }) => {
  const [open, setOpen] = React.useState(playing);
  const [next, setNext] = React.useState(done);

  React.useEffect(() => {
    setOpen(playing);
  }, [playing]);

  React.useEffect(() => {
    setNext(done);
  }, [done]);

  return (
    <PlayButtonWrapper
      next={next}
      open={open}
      onClick={() => {
        onClick();
        setOpen(playing);
      }}
    >
      <Liner></Liner>
      <Liner></Liner>
      <Liner></Liner>
      <Liner></Liner>
    </PlayButtonWrapper>
  );
};
