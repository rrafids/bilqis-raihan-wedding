import React, { useEffect, useState } from 'react';
import db from '../../../configuration';

export default function KindWordPage() {
  const [recipientName, setRecipientName] = useState<string>('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get('to');
    if (to) {
      setRecipientName(decodeURIComponent(to));
    } else {
      setRecipientName('Guest');
    }
  }, []);

  const confirmAttendance = (e: any, isAttend: boolean) => {
    e.preventDefault();
    const params = new URLSearchParams(window.location.search);
    const sender = params.get('to');

    const formattedDate = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Jakarta', // GMT+7 timezone
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    }).format(new Date());

    const ref = db.ref('attendances');
    const newMessage = {
      sender: sender,
      isAttend: isAttend,
      timestamp: formattedDate, // Optional: Add a timestamp
    };

    ref.once('value', (snapshot) => {
      const messages = snapshot.val() || [];
      ref.set([...messages, newMessage]); // Overwrite with updated array
    });
  };

  return (
    <div className='text-[#855f58] w-full min-h-screen items-center place-content-center flex flex-col justify-top relative font-cormorant-garamond pt-[50px] bg-gray-300'>
      <img
        alt='border gif'
        src='image/letter.png'
        className='absolute top-0 left-0 w-full h-screen object-cover'
      />
      <div className='absolute w-full p-10 flex flex-col items-center'>
        <div className='flex flex-col items-center space-y-5'>
          <h1 className='font-tangerine text-[40px] mt-[50px]'>
            Konfirmasi Kehadiran
          </h1>
          <div className='flex space-x-2'>
            <button
              className='bg-[#855f58] text-white px-5 py-2 rounded-full'
              onClick={(e) => confirmAttendance(e, true)}
            >
              Hadir
            </button>
            <button
              className='bg-[#855f58] text-white px-5 py-2 rounded-full'
              onClick={(e) => confirmAttendance(e, false)}
            >
              Tidak Hadir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
