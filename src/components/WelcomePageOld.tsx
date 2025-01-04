export default function WelcomePage() {
  return (
    <div className='w-full flex flex-col justify-center items-center bg-gray-300 relative'>
      <img alt='border gif' src='images/floral.gif' />

      <div className='flex flex-col absolute h-screen sm:mt-[-10px] items-center text-[30px] place-content-center text-[#7258a6] z-10 p-4 text-center font-bold'>
        <div className='font-millerstone font-bold space-y-1'>
          <p className='text-[15px]'>The Wedding of</p>
          <h1 className='text-[23px]'>Bilqis and Raihan</h1>
        </div>

        <img
          className='mt-[25px] rounded-[400px] z-10 sm:w-[400px] w-[300px] blur-xs border-4 border-solid border-[#e2e2e2]'
          alt='bilqisfa-raihan'
          src='images/bilqisfa-raihan.png'
        />
      </div>
    </div>
  );
}
