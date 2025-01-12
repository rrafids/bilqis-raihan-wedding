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

  const createMessage = (e: any) => {
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

    const ref = db.ref('messages');
    const newMessage = {
      sender: sender,
      message: e.target.message.value,
      timestamp: formattedDate, // Optional: Add a timestamp
    };

    ref.once('value', (snapshot) => {
      const messages = snapshot.val() || [];
      ref.set([...messages, newMessage]); // Overwrite with updated array
    });
  };

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
    <div className='text-[#855f58] w-full min-h-screen flex flex-col justify-top relative font-cormorant-garamond pt-[50px] bg-gray-300'>
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

        <h1 className='font-tangerine text-[50px] mt-[90px]'>Doa & Ucapan</h1>
        <div className='flex flex-col space-y-3 w-full mt-10'>
          <form onSubmit={createMessage} className='space-y-3'>
            <div>
              <label>Nama</label>
              <input
                placeholder='Nama'
                className='p-3 w-full rounded-lg'
                defaultValue={recipientName}
              />
            </div>

            <div>
              <label>Beri Doa & Ucapan...</label>
              <textarea
                name='message'
                className='p-3 w-full rounded-lg'
              ></textarea>
            </div>

            <button
              type='submit'
              className='bg-[#855f58] text-white py-2 rounded-full w-max px-7 float-right'
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
