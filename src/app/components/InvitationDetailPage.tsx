import { useEffect, useState, useRef } from 'react';
import { CalendarDateRangeIcon, MapPinIcon } from '@heroicons/react/24/solid';

interface InvitationDetailPageProps {
  language: string;
}

export default function InvitationDetailPage({
  language,
}: InvitationDetailPageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const detailRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentDetailRef = detailRef.current; // Copy detailRef.current to a local variable

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Start animation when the component is visible
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (currentDetailRef) {
      observer.observe(currentDetailRef);
    }

    return () => {
      if (currentDetailRef) {
        observer.unobserve(currentDetailRef);
      }
    };
  }, []);

  return (
    <div
      ref={detailRef}
      className='w-full items-center min-h-screen flex flex-col justify-top relative overflow-hidden bg-[#F4E8DE] p-5 font-cormorant-garamond pt-[50px]'
    >
      <img
        alt='border gif'
        src='image/bg-akad-1.png'
        className={`absolute top-3 left-0 w-full h-screen object-cover transition-all duration-[3000ms] ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
      />

      {/* <img
        alt='pink flower gif'
        src='gif/pink-flower.gif'
        className={`absolute bottom-0 right-[-30px] w-[230px] transition-all duration-[3000ms] delay-[500ms] ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-[30px]'
        }`}
      /> */}

      {/* <img
        alt='three butterflies gif'
        src='gif/three-butterflies.gif'
        className={`absolute top-0 left-[-30px] w-[175px] transition-all duration-[3000ms] delay-[1000ms] ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-[-30px]'
        }`}
      /> */}

      <div
        className={`absolute flex flex-col items-center pt-[100px] w-[250px] transition-all duration-[3000ms] delay-[1500ms] ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-[30px]'
        }`}
      >
        {/* <img
          alt='wedding ring'
          src='image/wedding-ring.png'
          className={`w-[75px] opacity-60 transition-all duration-[3000ms] ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-[-30px]'
          }`}
        /> */}

        <p
          className={`font-tangerine text-[45px] text-[#5f443f] mt-[30px] transition-all duration-[3000ms] delay-[1500ms] ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-[-30px]'
          }`}
        >
          {language == 'en' ? 'Reception' : 'Ngunduh Mantu'}
        </p>
        <div className='flex flex-col items-center mt-[20px]'>
          <div className='flex flex-col items-center space-y-1'>
            <CalendarDateRangeIcon
              width='40px'
              className={`text-[#5f443f] transition-all duration-[3000ms] delay-[2000ms] ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-[-30px]'
              }`}
            />
            <p
              className={`text-[20px] font-cormorant-garamond font-semibold text-[#5f443f] transition-all duration-[3000ms] delay-[2000ms] ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-[-30px]'
              }`}
            >
              {language == 'en'
                ? 'Saturday, 26 April 2025'
                : 'Sabtu, 26 April 2025'}
            </p>
            <p
              className={`text-[19px] font-cormorant-garamond text-[#5f443f] transition-all duration-[3000ms] delay-[2500ms] ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-[-30px]'
              }`}
            >
              {language == 'en'
                ? '11 AM - 1 PM Jakarta Time'
                : '11.00 WIB - 13.00 WIB'}
            </p>
          </div>
          <div className='flex flex-col items-center mt-[30px] font-cormorant-garamond'>
            <MapPinIcon
              width='40px'
              className={`text-[#5f443f] transition-all duration-[3000ms] delay-[3000ms] ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-[-30px]'
              }`}
            />
            <p
              className={`text-[20px] font-cormorant-garamond font-semibold text-[#5f443f] mt-[10px] transition-all duration-[3000ms] delay-[3000ms] ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-[-30px]'
              }`}
            >
              {language == 'en' ? "D'Garden Restaurant" : "Resto D'Garden"}
            </p>
            <p
              className={`text-[#5f443f] text-[17px] text-center mt-2 transition-all duration-[3000ms] delay-[3500ms] ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-[-30px]'
              }`}
            >
              Jl. DR. Soeparno No.97
            </p>
            <p
              className={`text-[#5f443f] text-[17px] text-center transition-all duration-[3000ms] delay-[3500ms] ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-[-30px]'
              }`}
            >
              Arcawinangun, Kec. Purwokerto Timur, Kabupaten Banyumas
            </p>
            <p
              className={`text-[#5f443f] text-[17px] text-center transition-all duration-[3000ms] delay-[3500ms] ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-[-30px]'
              }`}
            >
              Jawa Tengah
            </p>
            <a
              href='https://maps.app.goo.gl/dF9bKenf6puwUPYVA?g_st=com.google.maps.preview.copy'
              className={`bg-[#5f443f] text-white py-3 px-5 rounded-full mt-[30px] transition-all duration-[3000ms] delay-[4500ms] ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-[-30px]'
              }`}
            >
              Google Maps
            </a>

            {/* <p
              className={`mt-5 text-[18px] italic text-center w-[400px] font-cormorant-garamond text-[#5f443f] transition-all duration-[3500ms] delay-[5000ms] ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-[-30px]'
              }`}
            >
              {language == 'en'
                ? '(Wedding party will be held in Purwokerto)'
                : '(Resepsi akan dilaksanakan di Purwokerto)'}
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
