import Image from 'next/image'

const Homepage = () => {
  return <div className='flex flex-col'>
    {/* IMAGE CONTAINER */}
      <div className='h-1/2 relative'>
      <Image src="/hero.png" alt="" fill className="object-contain"/>
      </div>
    {/* TEXT CONTAINER */}
    <div className='h-1/2'>
    {/* TITLE */}
    <h1>Transforming ideas into pixel perfect reality</h1>
    <p>Lorem Ipsum placeholder until I figure out better text to add</p>
    </div>
  </div>
};

export default Homepage;
