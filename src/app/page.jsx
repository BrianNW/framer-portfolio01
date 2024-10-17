import Image from 'next/image'

const Homepage = () => {
  return <div className='h-full flex flex-col'>
    {/* IMAGE CONTAINER */}
      <div className='h-1/2 relative'>
      <Image src="/hero.png" alt="" fill className="object-contain"/>
      </div>
    {/* TEXT CONTAINER */}
    <div className='h-1/2 flex flex-column gap-8 items-center justify-center'>
    {/* TITLE */}
    <h1 className='text-4xl font-bold'>Transforming ideas into pixel perfect reality</h1>
    <p>Lorem Ipsum placeholder until I figure out better text to add</p>
    {/* BUTTONS */}
    <div className="flex gap-4">
      <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">Portfolio</button>
      <button className="p-4 rounded-lg ring-1 ring-black">Contact</button>
    </div>
    </div>
  </div>
};

export default Homepage;
