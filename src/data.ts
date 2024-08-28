import Logo from "./logo.svg";

import Page1 from "./assets/Slides/1/1.svg";
import Page4 from "./assets/Slides/2/4.svg";

type PageAsset = {
  imageSrc: string;
  sounds: string[];
};

export const pagesAssets: PageAsset[] = [
  {
    imageSrc: Page1,
    sounds: [
      require("./assets/Slides/2/Landing.mp3"),
      require("./assets/Slides/1/Slide 1.mp3"),
      require("./assets/Slides/2/Landing.mp3"),
    ],
  },
  {
    imageSrc: Page4,
    sounds: [
      require("./assets/Slides/2/Landing.mp3"),
      require("./assets/Slides/1/Slide 1.mp3"),
    ],
  },
  {
    imageSrc: Logo,
    sounds: [require("./assets/Slides/2/Landing.mp3")],
  },
];
