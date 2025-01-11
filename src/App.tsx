import { useEffect, useRef, useState } from 'react';
import OpeningPage from './components/OpeningPage';
import WelcomePage from './components/WelcomePage';
import PrayerPage from './components/PrayerPage';
import BridePage from './components/BridePage';
import GroomPage from './components/GroomPage';
import InvitationDetailPage from './components/InvitationDetailPage';
import GiftPage from './components/GiftPage';
import ClosingPage from './components/ClosingPage';

function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isOpeningPageVisible, setIsOpeningPageVisible] = useState(true);

  // Function to start the audio when the user interacts with the page
  const handleUserInteraction = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.log('Audio playback was prevented by the browser: ', err);
      });
    }
    document.removeEventListener('click', handleUserInteraction);
  };

  useEffect(() => {
    document.addEventListener('click', handleUserInteraction);
    return () => {
      document.removeEventListener('click', handleUserInteraction);
    };
  });

  return (
    <div className='overflow-hidden'>
      {/* <audio ref={audioRef} loop>
        <source src='audio/you-are-still-the-one.mp3' type='audio/mp3' />
        Your browser does not support the audio element.
      </audio> */}

      {/* Conditional rendering for pages */}
      {isOpeningPageVisible ? (
        <OpeningPage onOpenInvitation={() => setIsOpeningPageVisible(false)} />
      ) : (
        <div className='transition-opacity duration-1000 ease-in-out opacity-100'>
          <WelcomePage />

          <PrayerPage />

          <BridePage />

          <GroomPage />

          <InvitationDetailPage />

          <GiftPage />

          <ClosingPage />

          {/* <div>
          <div>Gallery 1</div>
          <div>Gallery 2</div>

          <div>Sumbangan Page</div>

          <div>Sweet words</div>

          <div>Closing Invitation Page</div> */}
        </div>
      )}
    </div>
  );
}

export default App;
