import Logo from "./logo.svg";

type PageAsset = {
  imageSrc: string;
  sounds: string[];
};

export const pagesAssets: PageAsset[] = [
  {
    imageSrc: Logo,
    sounds: [
      require("./assets/audio/19/Landing.mp3"),
      require("./assets/audio/1/Slide 1.mp3"),
      require("./assets/audio/19/Landing.mp3"),
    ],
  },
  {
    imageSrc: Logo,
    sounds: [
      require("./assets/audio/19/Landing.mp3"),
      require("./assets/audio/1/Slide 1.mp3"),
    ],
  },
  {
    imageSrc: Logo,
    sounds: [require("./assets/audio/19/Landing.mp3")],
  },
];
