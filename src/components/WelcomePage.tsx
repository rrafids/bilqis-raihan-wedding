import { useState, useEffect } from 'react';

// Define the type for the leaf object
interface Leaf {
  id: number;
  size: number;
  left: number;
  delay: number;
  duration: number;
  type: string; // Add type for the leaf icon
}

export default function OpeningPage() {
  const [step, setStep] = useState(0);
  const [leaves, setLeaves] = useState<Leaf[]>([]); // Specify that leaves is an array of Leaf objects

  // List of different leaf icons (you can replace these with custom images or other emojis)
  const leafTypes = ['🍂', '🍃', '🌿'];

  useEffect(() => {
    // Trigger animation steps
    const interval = setInterval(() => {
      setStep((prevStep) => prevStep + 1);
    }, 1000); // Trigger the next step every second
    return () => clearInterval(interval); // Clean up the interval
  }, []);

  useEffect(() => {
    // Generate leaves dynamically
    const generateLeaves = () => {
      const leafCount = 8; // Number of falling leaves
      const newLeaves = Array.from({ length: leafCount }).map((_, index) => ({
        id: index,
        size: Math.random() * 2 + 1, // Random size (between 1 and 3)
        left: Math.random() * 100, // Random horizontal position
        delay: Math.random() * 5, // Random animation delay (between 0 and 5 seconds)
        duration: Math.random() * 8 + 12, // Increased animation duration (between 12 and 20 seconds)
        type: leafTypes[Math.floor(Math.random() * leafTypes.length)], // Randomly pick a leaf type
      }));
      setLeaves(newLeaves);
    };

    generateLeaves();
  }, []);

  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gray-300'>
      {/* Background Image */}
      <img
        alt='border gif'
        src='images/bg-flowers-pink.png'
        className='absolute top-0 left-0 w-max h-screen object-cover'
      />

      {/* Falling Leaves */}
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className='absolute leaf'
          style={{
            top: '-10%',
            left: `${leaf.left}%`,
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`,
            transform: `scale(${leaf.size})`,
          }}
        >
          {leaf.type} {/* Display the randomly selected leaf icon */}
        </div>
      ))}

      {/* Content */}
      <div className='flex flex-col absolute h-screen mt-[-150px] items-center place-content-center z-10 p-4 text-center font-bold'>
        <div className='space-y-[-15px]'>
          {/* Step 1: "The Wedding of" */}
          <p
            className={`text-[17px] text-[#855f58] font-times-new-roman transform transition-all duration-[1.5s] ease-in-out ${
              step >= 1
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            The Wedding of
          </p>

          {/* Step 2: "Bilqis & Raihan" */}
          <h1
            className={`mt-[20px] text-[#855f58] font-medium font-royal-wedding text-[75px] transform transition-all duration-[1.5s] ease-in-out ${
              step >= 2
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            Bilqis & Raihan
          </h1>
        </div>
        {/* Step 3: Image */}
        <div
          className={`relative transform transition-all duration-[1.5s] ease-in-out ${
            step >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Main Image */}
          <img
            className='border-4 border-opacity-50 border-white rounded-[100px] z-10 sm:w-[400px] w-[230px]'
            alt='bilqisfa-raihan'
            src='images/bilqisfa-raihan-clean.png'
          />

          {/* <img
            alt='bottom-left-gif'
            src='images/flower-bucket.gif' // Replace with the actual path to your GIF
            className='absolute bottom-[-90px] right-[-90px] w-[200px] z-999 transform rotate-[50deg] opacity-75' // Added opacity
          /> */}
        </div>
        <div
          className={`mt-[20px] rounded-lg px-[5px] py-[5px] transform transition-all duration-[1.5s] ease-in-out ${
            step >= 4 ? 'translate-y-0 opacity-90' : 'translate-y-10 opacity-0'
          }`}
        >
          <p
            className={`text-[17px] text-[#855f58] font-semibold font-times-new-roman`}
          >
            Sabtu, 8 Februari 2025
          </p>
        </div>
      </div>

      {/* GIF Image positioned at top-left corner */}
      <img
        alt='top-left-gif'
        src='images/leaves.gif' // Replace with the actual path to your GIF
        className='absolute top-[-75px] left-[-10px] w-[175px] h-[175px] z-999 transform rotate-[100deg] opacity-60' // Added opacity
      />

      <img
        alt='top-left-gif'
        src='images/leaves.gif' // Replace with the actual path to your GIF
        className='absolute top-[-30px] left-[-70px] w-[175px] h-[175px] z-999 transform rotate-[20deg] opacity-65' // Added opacity
      />

      <img
        alt='top-left-gif'
        src='images/leaves.gif' // Replace with the actual path to your GIF
        className='absolute top-[50px] left-[-80px] w-[175px] h-[175px] z-999 transform rotate-[50deg] opacity-70' // Added opacity
      />

      {/* GIF Image positioned at top-right corner */}
      <img
        alt='top-left-gif'
        src='images/leaves.gif' // Replace with the actual path to your GIF
        className='absolute top-[-75px] right-[-10px] w-[175px] h-[175px] z-999 transform rotate-[280deg] opacity-60' // Added opacity
      />

      <img
        alt='top-left-gif'
        src='images/leaves.gif' // Replace with the actual path to your GIF
        className='absolute top-[-30px] right-[-70px] w-[175px] h-[175px] z-999 transform rotate-[200deg] opacity-65' // Added opacity
      />

      <img
        alt='top-left-gif'
        src='images/leaves.gif' // Replace with the actual path to your GIF
        className='absolute top-[50px] right-[-80px] w-[175px] h-[175px] z-999 transform rotate-[230deg] opacity-70' // Added opacity
      />

      {/* <img
        alt='bottom-left-gif'
        src='images/three-butterflies.gif' // Replace with the actual path to your GIF
        className='absolute bottom-[150px] left-[-20px] w-[150px] h-[150px] z-999 transform rotate-[50deg] opacity-75' // Added opacity
      /> */}

      <img
        alt='bottom-left-gif'
        src='images/butterfly.gif' // Replace with the actual path to your GIF
        className='absolute bottom-[220px] left-[10px] w-[75px] z-999 transform rotate-[50deg] opacity-75' // Added opacity
      />
    </div>
  );
}
