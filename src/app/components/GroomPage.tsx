import { useEffect, useState, useRef } from 'react';

interface GroomPageProps {
  language: string;
}

export default function BridePage({ language }: GroomPageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const brideRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentBrideRef = brideRef.current; // Copy brideRef.current to a local variable

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Start animation when the component is visible
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (currentBrideRef) {
      observer.observe(currentBrideRef);
    }

    return () => {
      if (currentBrideRef) {
        observer.unobserve(currentBrideRef);
      }
    };
  }, []);

  return (
    <div
      ref={brideRef}
      className='w-full min-h-screen flex flex-col justify-top relative overflow-hidden bg-gray-300 p-5 font-cormorant-garamond pt-[50px]'
    >
      <img
        alt='border gif'
        src='image/bg-1.png'
        className='absolute top-0 left-0 w-full h-screen object-cover'
      />
      <div className='absolute'>
        <div
          className={`text-[#5f443f] flex w-full items-center justify-center text-[65px] transition-all duration-[2000ms] ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-[-30px]'
          }`}
        >
          &
        </div>

        <div className='mt-[50px] grid grid-cols-2'>
          <div className='col-span-1 flex flex-col place-content-center text-left space-y-[-10px]'>
            <h1
              className={`text-[30px] font-tangerine text-[#5f443f] transition-all duration-[2000ms] delay-[1000ms] ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-[-30px]'
              }`}
            >
              {language == 'en' ? 'The Groom' : 'Mempelai Pria'}
            </h1>
            <h1
              className={`text-[#5f443f] font-royal-wedding text-[75px] transition-all duration-[2000ms] delay-[1500ms] ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-[-30px]'
              }`}
            >
              Raihan
            </h1>
          </div>

          <div className='col-span-1 flex flex-col items-end justify-content-end w-full'>
            <img
              alt='the bride img'
              src='image/the-groom.png'
              className={`w-[200px] shadow-xl rounded-t-full border-4 border-opacity-30 border-white transition-all duration-[2000ms] delay-[1000ms] ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-[-30px]'
              }`}
            />
            <div
              className={`flex items-center space-x-2 w-max text-[#5f443f] mt-2 bg-[#e0d8d6] py-1 px-3 rounded-lg transition-all duration-[2000ms] delay-[1000ms] ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-[-30px]'
              }`}
            >
              <img
                alt='instagram icon'
                src='image/ig.png'
                className='w-[20px] h-[20px]'
              />
              <p>@raihanrafids</p>
            </div>
          </div>
        </div>

        <div
          className={`mt-[20px] flex flex-col items-start space-y-2 py-2 rounded-l-xl transition-all duration-[2000ms] delay-[2000ms] ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-[-30px]'
          }`}
        >
          <h1 className='font-semibold text-[#5f443f] text-[20px]'>
            Raihan Rafid Adityo, S.Kom
          </h1>
          <p className='text-[#5f443f]'>
            {language == 'en'
              ? 'First Son of Mr. Irwanto Adi & Mrs. Setyo Rini'
              : 'Putra Pertama dari Bapak Irwanto Adi & Ibu Setyo Rini'}
          </p>
        </div>
      </div>
    </div>
  );
}
