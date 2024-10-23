type PageAsset = {
  imageSrc: string;
  sounds: string[];
};

export const pagesAssets: PageAsset[] = [];
for (let slide = 1; slide < 36; slide++) {
  let sounds = [];
  try {
    const sound = require(`./assets/slides/${slide}/${slide}.mp3`);
    sounds.push(sound);
  } catch (e) {
    console.error(e);
  }
  pagesAssets.push({
    imageSrc: require(`./assets/slides/${slide}/${slide}.jpg`),
    sounds,
  });
}
