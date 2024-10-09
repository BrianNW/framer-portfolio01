import Image from 'next/image'

const Homepage = () => {
  return <div className='flex flex-col'>
    {/* IMAGE CONTAINER */}
      <div className='h-1/2 relative'>
      <Image src="/hero.png" alt="" fill/>
      </div>
    {/* TEXT CONTAINER */}
    <div className='h-1/2'></div>
  </div>
};

export default Homepage;
