'use client';
import { useEffect, useRef, useState } from 'react';
import OpeningPage from './components/OpeningPage';
import WelcomePage from './components/WelcomePage';
import PrayerPage from './components/PrayerPage';
import BridePage from './components/BridePage';
import GroomPage from './components/GroomPage';
import InvitationDetailPage from './components/InvitationDetailPage';
import GiftPage from './components/GiftPage';
import ClosingPage from './components/ClosingPage';
import KindWordPage from './components/KindWordPage';
import AttendanceConfirmationPage from './components/AttendanceConfirmationPage';

function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isOpeningPageVisible, setIsOpeningPageVisible] = useState(true);
  const [language, setLanguage] = useState<string>('en'); // Default language: English

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

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    let lang = params.get('lang');

    if (!lang) {
      lang = 'id';
    }

    setLanguage(lang);
  }, []);

  const toggleLanguage = () => {
    // Determine the new language
    const newLanguage = language === 'en' ? 'id' : 'en';
    setLanguage(newLanguage);

    // Get the current URL and its query parameters
    const currentUrl = new URL(window.location.href);
    const params = currentUrl.searchParams;

    // Update the `lang` query parameter
    if (params.has('lang')) {
      params.set('lang', newLanguage); // Update existing `lang`
    } else {
      params.append('lang', newLanguage); // Add `lang` if not present
    }

    // Update the URL and refresh the page
    currentUrl.search = params.toString();
    window.location.href = currentUrl.toString();
  };

  return (
    <div
      className='relative flex flex-col items-center'
      style={{ backgroundImage: 'image/bg-bw-flower.png' }}
    >
      {/* Language Toggle Button */}
      <div className='absolute top-4 right-4 z-[9999]'>
        <button
          onClick={toggleLanguage}
          className='bg-gray-400 text-white py-1 px-3 rounded-lg shadow-lg opacity-80 text-[15px]'
        >
          {language === 'en' ? '🇺🇸 EN' : '🇮🇩 ID'}{' '}
        </button>
      </div>

      <div className='overflow-hidden w-full max-w-[450px] '>
        <audio ref={audioRef} loop>
          <source src='audio/canon-in-d.mp3' type='audio/mp3' />
          Your browser does not support the audio element.
        </audio>

        {/* Conditional rendering for pages */}
        {isOpeningPageVisible ? (
          <OpeningPage
            onOpenInvitation={() => setIsOpeningPageVisible(false)}
            language={language}
          />
        ) : (
          <div className='transition-opacity duration-1000 ease-in-out opacity-100'>
            <WelcomePage language={language} />
            <PrayerPage language={language} />
            <BridePage language={language} />
            <GroomPage language={language} />
            <InvitationDetailPage language={language} />
            <AttendanceConfirmationPage language={language} />
            <KindWordPage language={language} />
            <GiftPage language={language} />
            <ClosingPage language={language} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
