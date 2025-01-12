import { useEffect, useState, useRef } from 'react';

export default function InvitationDetailPage() {
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
      className='w-full items-center min-h-screen flex flex-col justify-top relative overflow-hidden bg-gray-300 p-5 font-cormorant-garamond pt-[50px]'
    >
      <img
        alt='border gif'
        src='image/invitation-page.png'
        className={`absolute top-0 left-0 w-full h-screen object-cover transition-all duration-[3000ms] ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
      />

      <img
        alt='pink flower gif'
        src='gif/pink-flower.gif'
        className={`absolute bottom-0 right-[-30px] w-[230px] transition-all duration-[3000ms] delay-[500ms] ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-[30px]'
        }`}
      />

      <img
        alt='three butterflies gif'
        src='gif/three-butterflies.gif'
        className={`absolute top-0 left-[-30px] w-[175px] transition-all duration-[3000ms] delay-[1000ms] ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-[-30px]'
        }`}
      />

      <div
        className={`absolute flex flex-col items-center pt-[75px] w-[250px] transition-all duration-[3000ms] delay-[1500ms] ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-[30px]'
        }`}
      >
        <img
          alt='wedding ring'
          src='image/wedding-ring.png'
          className={`w-[100px] opacity-60 transition-all duration-[3000ms] ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-[-30px]'
          }`}
        />

        <p
          className={`font-royal-wedding text-[75px] text-[#5f443f] mt-[-20px] transition-all duration-[3000ms] delay-[1500ms] ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-[-30px]'
          }`}
        >
          Akad
        </p>
        <p
          className={`font-cormorant-garamond font-semibold text-[#5f443f] transition-all duration-[3000ms] delay-[2000ms] ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-[-30px]'
          }`}
        >
          Sabtu, 8 Februari 2025
        </p>
        <p
          className={`transition-all duration-[3000ms] delay-[2500ms] ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-[-30px]'
          }`}
        >
          08.00 - selesai
        </p>

        <p
          className={`font-cormorant-garamond font-semibold text-[#5f443f] mt-[20px] transition-all duration-[3000ms] delay-[3000ms] ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-[-30px]'
          }`}
        >
          RM. Ponyo Nagreg
        </p>
        <p
          className={`text-center mt-3 transition-all duration-[3000ms] delay-[3500ms] ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-[-30px]'
          }`}
        >
          Jl. Raya Bandung - Garut No.KM. 35, RT.4/RW.07, Citaman, Kec. Nagreg
        </p>
        <p
          className={`transition-all duration-[3000ms] delay-[4000ms] ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-[-30px]'
          }`}
        >
          Kabupaten Bandung, Jawa Barat
        </p>

        <a
          href='https://maps.app.goo.gl/x5BsJDLtvbt17zUv8?g_st=com.google.maps.preview.copy'
          className={`bg-[#5f443f] text-white py-3 px-5 rounded-full mt-[30px] transition-all duration-[3000ms] delay-[4500ms] ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-[-30px]'
          }`}
        >
          Google Maps
        </a>
      </div>
    </div>
  );
}
