import Logo from "./logo.svg";
import Page1 from "./assets/Image/1/1.svg";
import Page4 from "./assets/Image/1/4.svg";

type PageAsset = {
  imageSrc: string;
  sounds: string[];
};

export const pagesAssets: PageAsset[] = [
  {
    imageSrc: Page1,
    sounds: [
      require("./assets/audio/19/Landing.mp3"),
      require("./assets/audio/1/Slide 1.mp3"),
      require("./assets/audio/19/Landing.mp3"),
    ],
  },
  {
    imageSrc: Page4,
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
