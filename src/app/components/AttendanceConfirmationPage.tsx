import React from 'react';
import db from '../../../configuration';

export default function AttendanceConfirmationPage() {
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
    <div>
      <h1>Konfirmasi kehadiran</h1>
      <button onClick={(e) => confirmAttendance(e, true)}>Hadir</button>
      <button onClick={(e) => confirmAttendance(e, false)}>Tidak Hadir</button>
    </div>
  );
}
