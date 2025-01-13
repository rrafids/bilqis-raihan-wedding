'use client';
import { useState, useEffect, useRef } from 'react';

interface OpeningPageProps {
  onOpenInvitation: () => void;
  language: string;
}

export default function OpeningPage({
  onOpenInvitation,
  language,
}: OpeningPageProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [recipientName, setRecipientName] = useState<string>('');
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get('to');
    if (to) {
      setRecipientName(decodeURIComponent(to));
    } else {
      setRecipientName('Guest');
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, []);

  const handleOpenInvitation = () => {
    setIsVisible(false);
    setTimeout(() => {
      onOpenInvitation(); // Call the parent-provided handler
    }, 1000); // Match the animation duration
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gray-300 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100 z-50' : 'opacity-0 pointer-events-none'
      }`}
    >
      <img
        alt='border gif'
        src='image/heaven-gate-bg.png'
        className='absolute top-0 left-0 w-full h-screen object-cover'
      />

      <div className='z-10 mt-[15px] flex flex-col items-center'>
        <p
          className={`text-[20px] font-cormorant-garamond text-[#855f58] transition-all duration-[2000ms] ${
            hasIntersected
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-[-30px]'
          }`}
        >
          {language == 'en' ? 'The Wedding of' : 'Pernikahan'}
        </p>
        <div
          className={`flex flex-col space-y-[-60px] items-center transition-all duration-[2000ms] delay-[300ms] ${
            hasIntersected
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-[-30px]'
          }`}
        >
          <span className='text-[#855f58] font-royal-wedding text-[80px]'>
            Bilqis
          </span>
          <span className='text-[#855f58] font-royal-wedding text-[80px]'>
            {' '}
            &{' '}
          </span>
          <span className='text-[#855f58] font-royal-wedding text-[80px]'>
            Raihan
          </span>
        </div>

        <div
          className={`flex flex-col items-center mt-[20px] space-y-5 transition-all duration-[2000ms] delay-[500ms] ${
            hasIntersected
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-[-30px]'
          }`}
        >
          <div className='flex flex-col items-center space-y-1'>
            <h1 className='text-[#855f58]'>Dear,</h1>
            <h1 className='text-[#855f58] text-[17px] font-semibold'>
              {recipientName}
            </h1>
          </div>
          <p className='italic font-cormorant-garamond text-[#855f58]'>
            {language == 'en' ? "You're invited!" : 'Anda diundang!'}
          </p>
          <button
            className='text-[15px] animated-zoom text-white bg-[#855f58] rounded-full px-5 py-3 hover:scale-105 transform transition'
            onClick={handleOpenInvitation}
          >
            {language == 'en' ? 'Open Invitation' : 'Buka Undangan'}
          </button>
        </div>
      </div>

      <img
        alt='top-left-gif'
        src='gif/birds-tp.gif'
        className='absolute top-[0px] w-full h-[175px] z-999 transform'
      />
    </div>
  );
}
