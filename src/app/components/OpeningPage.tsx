'use client';
import { useState, useEffect } from 'react';

interface OpeningPageProps {
  onOpenInvitation: () => void;
}

export default function OpeningPage({ onOpenInvitation }: OpeningPageProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [recipientName, setRecipientName] = useState<string>('Guest');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get('to');
    if (to) {
      setRecipientName(decodeURIComponent(to));
    }
  }, []);

  const handleOpenInvitation = () => {
    setIsVisible(false);
    setTimeout(() => {
      onOpenInvitation(); // Call the parent-provided handler
    }, 1000); // Match the animation duration
  };

  return (
    <div
      className={`relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gray-300 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100 z-50' : 'opacity-0 pointer-events-none'
      }`}
    >
      <img
        alt='border gif'
        src='image/heaven-gate-bg.png'
        className='absolute top-0 left-0 w-full h-screen object-cover'
      />

      <div className='z-10 flex flex-col items-center'>
        <p className='font-serif text-[#855f58]'>The Wedding of</p>
        <div className='flex flex-col space-y-[-50px] items-center'>
          <span className='text-[#855f58] font-royal-wedding text-[80px]'>
            Bilqis
          </span>
          <span className='text-[#855f58] font-royal-wedding text-[80px]'>
            &
          </span>
          <span className='text-[#855f58] font-royal-wedding text-[80px]'>
            Raihan
          </span>
        </div>

        <div className='flex flex-col items-center mt-[30px] space-y-5'>
          <div className='flex flex-col items-center space-y-1'>
            <h1 className='text-[#855f58]'>Dear,</h1>
            <h1 className='text-[#855f58] text-[17px] font-semibold'>
              {recipientName}
            </h1>
          </div>
          <button
            className='text-[15px] animated-zoom text-white bg-[#855f58] rounded-full px-5 py-3 hover:scale-105 transform transition'
            onClick={handleOpenInvitation}
          >
            Open Invitation
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