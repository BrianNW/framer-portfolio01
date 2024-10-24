import Image from 'next/image'

const Homepage = () => {
  return <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
    {/* IMAGE CONTAINER */}
      <div className='z-0 h-1/2 lg:h-full lg:w-1/2 relative'>
      <Image src="/hero.png" alt="" fill className="object-contain"/>
      </div>
    {/* TEXT CONTAINER */}
    <div className='h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center'>
    {/* TITLE */}
    <h1 className='text-4xl md:text-6xl font-bold'>Transforming ideas into pixel perfect reality</h1>
    <p className="w-full  md:text-xl"> Lorem Ipsum placeholder until I figure out better text to add</p>
    {/* BUTTONS */}
    <div className="w-full flex gap-4">
      <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">Portfolio</button>
      <button className="p-4 rounded-lg ring-1 ring-black">Contact</button>
    </div>
    </div>
  </div>
};

export default Homepage;
