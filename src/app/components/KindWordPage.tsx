import React from 'react';
import db from '../../../configuration';

export default function KindWordPage() {
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

  return (
    <div>
      <form onSubmit={createMessage}>
        <textarea name='message' placeholder='Masukkan ucapan'>
          Ucapan
        </textarea>
        <button type='submit'>Kirim</button>
      </form>
    </div>
  );
}
