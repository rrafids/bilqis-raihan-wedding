// KindWordPage.tsx
import React, { useEffect, useState, useRef } from 'react';
import db from '../../../firebaseConfig';
import { ref, set } from 'firebase/database';

interface KindWordPageProps {
  language: string;
}

export default function KindWordPage({ language }: KindWordPageProps) {
  const [recipientName, setRecipientName] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const formRef = useRef<HTMLDivElement | null>(null);

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
          setIsVisible(true); // Trigger animation
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the form is visible
    );

    const currentFormRef = formRef.current;
    if (currentFormRef) {
      observer.observe(currentFormRef);
    }

    return () => {
      if (currentFormRef) {
        observer.unobserve(currentFormRef);
      }
    };
  }, []);

  const createMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams(window.location.search);
    let sender = params.get('to');

    const formattedDate = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Jakarta', // GMT+7 timezone
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    }).format(new Date());
    if (db) {
      if (sender === null) {
        sender = 'Guest';
      }

      sender += '-' + Math.floor(new Date().getTime() / 1000);

      const newMessage = {
        sender: sender,
        message: (e.target as any).message.value,
        timestamp: formattedDate,
      };

      set(ref(db, 'messages/' + sender), newMessage);
      setShowThankYou(true);
    } else {
      console.error('Firebase db is not initialized');
    }
  };

  return (
    <div className='text-[#855f58] w-full min-h-screen flex flex-col justify-top relative font-cormorant-garamond pt-[50px] bg-gray-300'>
      <img
        alt='border gif'
        src='image/letter.png'
        className='absolute top-0 left-0 w-full h-screen object-cover'
      />
      <div className='absolute w-full p-[60px] flex flex-col items-center'>
        <h1 className='font-tangerine text-[50px] mt-[90px]'>
          {language == 'en' ? 'Wish & Prayer' : 'Doa & Ucapan'}
        </h1>
        <div
          ref={formRef}
          className={`flex flex-col space-y-3 w-full mt-10 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-[30px]'
          }`}
        >
          {showThankYou ? (
            <div className='text-center text-[#855f58] mt-5'>
              <h2 className='text-xl font-semibold'>
                {language == 'en'
                  ? 'Thank you for the message!'
                  : 'Terimakasih atas pesannya!'}
              </h2>
            </div>
          ) : (
            <form onSubmit={createMessage} className='space-y-3'>
              <div>
                <label>{language == 'en' ? 'Name' : 'Nama'}</label>
                <input
                  defaultValue={recipientName}
                  className='p-2 w-full rounded-lg opacity-70 border-2 border-transparent outline-none focus:outline-2 focus:border-2 focus:border-[#855f58]'
                />
              </div>

              <div>
                <label>
                  {language == 'en'
                    ? 'Send wish & prayer'
                    : 'Beri Doa & Ucapan...'}
                </label>
                <textarea
                  name='message'
                  className='p-2 w-full rounded-lg opacity-70 border-2 border-transparent outline-none focus:outline-2 focus:border-2 focus:border-[#855f58]'
                ></textarea>
              </div>

              <button
                type='submit'
                className='bg-[#855f58] text-white py-2 rounded-full w-max px-7 float-right'
              >
                {language == 'en' ? 'Send' : 'Kirim'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
