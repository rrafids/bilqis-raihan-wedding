import { useEffect, useState, useRef } from 'react';

export default function BridePage() {
  const [isVisible, setIsVisible] = useState(false);
  const brideRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Start animation when visible
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    const currentRef = brideRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={brideRef}
      className={`w-full min-h-screen flex flex-col justify-start relative overflow-hidden bg-gray-300 p-5 font-serif pt-12 ${
        isVisible ? 'animate-fade-in' : ''
      }`}
    >
      <img
        alt="Background flower"
        src="image/bg-flower-light.png"
        className="absolute top-0 left-0 w-full h-screen object-cover"
      />
      <div className="absolute">
        <div className="flex w-full items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="220"
            height="45"
            viewBox="0 0 176 36"
            className="text-[#5f443f]"
          >
            <text x="0" y="30" fill="currentColor" fontSize="24" fontFamily="serif">
              Bride Page Title
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
