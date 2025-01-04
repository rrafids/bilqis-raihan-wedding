import WelcomePage from './components/WelcomePage';
import { useEffect, useRef } from 'react';

function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Function to start the audio when the user interacts with the page
  const handleUserInteraction = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.log('Audio playback was prevented by the browser: ', err);
      });
    }
    // Remove the event listener after the audio starts playing
    document.removeEventListener('click', handleUserInteraction);
  };

  // Adding the click event listener when the component mounts
  useEffect(() => {
    document.addEventListener('click', handleUserInteraction);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleUserInteraction);
    };
  });

  return (
    <div>
      {/* <audio ref={audioRef} loop>
        <source src='audios/music.mp3' type='audio/mp3' />
        Your browser does not support the audio element.
      </audio> */}

      <WelcomePage />
      <div>
        Couple Profile Page
        <p>The Wedding of</p>
        <h1>Bilqisfa & Raihan</h1>
        <p>Foto</p>
      </div>

      <div>Opening bisa dengan doa2 / perkataan baik</div>

      <div>
        Undangan
        <h1>Profile The Bride</h1>
      </div>

      <div>
        <h1>Profile The Groom</h1>
      </div>

      <div>Count down</div>

      <div>Akad timeline & details</div>
      <div>Resepsi timeline & details</div>

      <div>Gallery 1</div>
      <div>Gallery 2</div>

      <div>Sumbangan Page</div>

      <div>Sweet words</div>

      <div>Closing Invitation Page</div>
    </div>
  );
}

export default App;
