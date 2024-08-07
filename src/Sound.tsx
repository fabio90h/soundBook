import React, { useState } from 'react';
import { soundLibrary } from './data';

const Sound: React.FC<{}> = () => {

    const audio = document.getElementById("audio_tag") as HTMLAudioElement;
    const [play, setPlay] = useState(false);

    const handleSoundButton = () => {
        play ? setPlay(false) : setPlay(true);
        play && audio ? audio.pause() : audio!.play();
      }
    
    return <>{soundLibrary.map(sound => {
        return <>
        <button
            onClick={handleSoundButton}
          >hello
        </button>
          <audio id="audio_tag" src={sound} />
        </>
    }) }</>
}

export default Sound