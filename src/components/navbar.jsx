const Navbar = () => {
    return (
        <div className = 'h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
           {/* Logo */}
            <div className='1'>
                <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
                    <span className="text-white">Briannw</span>
                    <span className ="w-12 h-8 rounded bg-white text-black flex items-center justify-center">.com</span>
                </Link>
            </div>

            {/* Responsive Menu */}
            <div className='2'></div>
                {/* Menu Button */}
                <button>
                    <div clasName="w-10 h-1 bg-black rounded"></div>    
                    <div clasName="w-10 h-1 bg-black rounded"></div>    
                    <div clasName="w-10 h-1 bg-black rounded"></div>    
                </button>                
            </div>
    )
}

export default Navbar