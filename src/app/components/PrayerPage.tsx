'use client';
import { useEffect, useState, useRef } from 'react';

interface PrayerPageProps {
  language: string;
}

export default function PrayerPage({ language }: PrayerPageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const prayerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Start animation when the component is visible
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    const currentPrayerRef = prayerRef.current; // Store the ref value in a variable

    if (currentPrayerRef) {
      observer.observe(currentPrayerRef);
    }

    return () => {
      if (currentPrayerRef) {
        observer.unobserve(currentPrayerRef); // Use the stored reference
      }
    };
  }, []);

  return (
    <div
      ref={prayerRef}
      className='w-full min-h-screen flex flex-col justify-top relative overflow-hidden bg-gray-300 p-5 font-cormorant-garamond'
    >
      <img
        alt='border gif'
        src='image/bg-prayer.png'
        className='absolute top-0 left-0 w-max h-screen object-cover'
      />

      <div className='absolute top-[50px] space-y-3 pe-3'>
        <h1
          className={`text-[#855f58] text-right pe-5 mt-3 text-[25px] z-100 transition-all duration-[2000ms] ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-[-30px]'
          }`}
        >
          وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًا
          لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ
          إِنَّ فِى ذَٰلِكَ لَءَايَٰتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
        </h1>

        <p
          className={`text-[17px] p-3 italic text-[#5f443f] transition-all duration-[2000ms] delay-[500ms] ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-[-30px]'
          }`}
        >
          {language == 'en'
            ? 'And one of His signs is that He created for you spouses from among yourselves so that you may find comfort in them. And He has placed between you compassion and mercy. Surely in this are signs for people who reflect.'
            : 'Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.'}
        </p>

        <h1
          className={`p-3 text-[17px] text-[#845c56] italic mt-3 transition-all duration-[2000ms] delay-[1000ms] ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-[-30px]'
          }`}
        >
          Q.S. Ar Rum:21
        </h1>
      </div>
    </div>
  );
}
