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
    <div>
      <button>Portfolio</button>
      <button>Contact</button>
    </div>
    </div>
  </div>
};

export default Homepage;
