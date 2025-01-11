import { useState, useEffect, useRef } from 'react';

export default function GiftPage() {
  const [isVisible, setIsVisible] = useState(false); // Animation trigger
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const giftRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentGiftRef = giftRef.current; // Copy giftRef.current to a local variable

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animations when visible
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (currentGiftRef) {
      observer.observe(currentGiftRef);
    }

    return () => {
      if (currentGiftRef) {
        observer.unobserve(currentGiftRef);
      }
    };
  }, []);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000); // Reset copied state after 2 seconds
  };

  return (
    <div
      ref={giftRef}
      className='w-full items-center min-h-screen flex flex-col justify-top relative overflow-hidden bg-gray-300 p-5 font-serif pt-[50px]'
    >
      {/* Background Image */}
      <img
        alt='gift page bg'
        src='image/gift-page-bg.png'
        className='absolute top-0 left-0 w-full h-screen object-cover'
      />

      {/* Content Section */}
      <div
        className={`absolute flex flex-col items-center mt-[100px] transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Title */}
        <h1
          className={`text-[#5f443f] font-royal-wedding text-[75px] transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Tanda Kasih
        </h1>

        {/* Description */}
        <p
          className={`text-center w-[350px] text-gray-500 font-serif transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Doa restu dan kehadiran Bapak/Ibu/Saudara/i di pernikahan kami sudah
          lebih dari cukup bagi kami. Namun, jika berkenan memberikan hadiah,
          kami telah menyediakan amplop digital. Terima kasih.
        </p>

        {/* Bank BCA Details */}
        <div
          className={`text-center mt-10 font-serif space-y-2 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className='text-[#5f443f] font-semibold'>Bank BCA</p>
          <p className='text-gray-500'>Aulia Bilqisfa Az Zahra</p>
          <div className='flex items-center justify-center space-x-2'>
            <p className='text-gray-500'>7772565596</p>
            <button
              onClick={() => handleCopy('7772565596')}
              className={`bg-[#5f443f] text-white px-3 py-1 rounded-full text-sm transition-transform duration-300 ${
                copiedText === '7772565596'
                  ? 'scale-105 bg-green-500'
                  : 'hover:scale-110'
              }`}
            >
              {copiedText === '7772565596' ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>

        {/* E-Wallet Details */}
        <div
          className={`text-center mt-5 font-serif space-y-2 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className='text-[#5f443f] font-semibold'>E-Wallet (OVO/Gopay)</p>
          <div className='flex items-center justify-center space-x-2'>
            <p className='text-gray-500'>082240237910</p>
            <button
              onClick={() => handleCopy('082240237910')}
              className={`bg-[#5f443f] text-white px-3 py-1 rounded-full text-sm transition-transform duration-300 ${
                copiedText === '082240237910'
                  ? 'scale-105 bg-green-500'
                  : 'hover:scale-110'
              }`}
            >
              {copiedText === '082240237910' ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
