import React, { useEffect, useState, useRef } from 'react';
import db from '../../../firebaseConfig';
import { ref, set } from 'firebase/database';

interface AttendanceConfirmationPageProps {
  language: string;
}

export default function AttendanceConfirmationPage({
  language,
}: AttendanceConfirmationPageProps) {
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
    // Observer for animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% is visible
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

  const confirmAttendance = (e: any, isAttend: boolean) => {
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

    // Check if db is initialized before proceeding
    if (db) {
      if (sender === null) {
        sender = 'Guest';
      }

      sender += '-' + Math.floor(new Date().getTime() / 1000);

      const newMessage = {
        sender: sender,
        isAttend: isAttend,
        timestamp: formattedDate,
      };

      set(ref(db, 'attendances/' + sender), newMessage);
      setShowThankYou(true);
    } else {
      console.error('Firebase db is not initialized');
    }
  };

  return (
    <div className='text-[#855f58] w-full min-h-screen items-center flex flex-col justify-top relative font-cormorant-garamond'>
      <img
        alt='border gif'
        src='image/letter.png'
        className='absolute top-0 left-0 w-full h-screen object-cover transform -scale-x-100'
      />
      <div className='absolute w-full h-full p-5 flex flex-col items-center justify-center mt-[-50px]'>
        <img alt='border gif' src='image/dear-you.png' className='w-[150px]' />
        <div
          ref={formRef}
          className={`flex flex-col items-center justify-center space-y-5 mt-[-30px] pt-[-80px] transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-[30px]'
          }`}
        >
          <h1 className='font-tangerine text-[40px]'>
            {language == 'en' ? 'Confirm Attendance' : 'Konfirmasi Kehadiran'}
          </h1>
          {!showThankYou ? (
            <div className='flex space-x-2'>
              <button
                className='bg-[#855f58] text-white px-5 py-2 rounded-full'
                onClick={(e) => confirmAttendance(e, true)}
              >
                {language == 'en' ? 'Attend' : 'Hadir'}
              </button>
              <button
                className='bg-[#855f58] text-white px-5 py-2 rounded-full'
                onClick={(e) => confirmAttendance(e, false)}
              >
                {language == 'en' ? 'Not Attend' : 'Tidak Hadir'}
              </button>
            </div>
          ) : (
            <div className='text-center text-[#855f58] mt-5'>
              <h2 className='text-xl font-semibold'>
                {language == 'en'
                  ? 'Thank you for the confirmation!'
                  : 'Terimakasih atas konfirmasinya!'}
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
