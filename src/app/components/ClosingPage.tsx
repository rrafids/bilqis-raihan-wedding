interface ClosingPageProps {
  language: string;
}

export default function ClosingPage({ language }: ClosingPageProps) {
  return (
    <div
      className={`relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gray-300 transition-opacity duration-1000`}
    >
      <img
        alt='border gif'
        src='image/heaven-gate-bg.png'
        className='absolute top-0 left-0 w-full h-screen object-cover'
      />

      <div className='z-10 flex flex-col items-center'>
        <p className='font-cormorant-garamond text-[#855f58] text-[20px]'>
          {language == 'en' ? 'The Wedding of' : 'Pernikahan'}
        </p>
        <div className='flex flex-col space-y-[-50px] items-center'>
          <span className='text-[#855f58] font-royal-wedding text-[80px]'>
            Bilqis
          </span>
          <span className='text-[#855f58] font-royal-wedding text-[80px]'>
            &
          </span>
          <span className='text-[#855f58] font-royal-wedding text-[80px]'>
            Raihan
          </span>
        </div>

        <div className='flex flex-col items-center mt-[30px] space-y-5'>
          <div className='flex flex-col items-center space-y-1'>
            <h1 className='text-[#855f58] text-[15px] italic'>#meRAjutQISah</h1>
          </div>
        </div>
      </div>

      <img
        alt='top-left-gif'
        src='gif/birds-tp.gif'
        className='absolute top-[0px] w-full h-[175px] z-999 transform'
      />

      <div className='absolute bottom-0 w-full text-center text-white py-3 font-cormorant-garamond font-medium bg-[#cb968d] z-999'>
        <p>Made with 🤍 by Raihan</p>
      </div>
    </div>
  );
}
