const Navbar = () => {
    return (
        <div className = 'h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
           {/* Logo */}
            <div className='1'>
                <Link href="/" className="text-sm bg-black rounded-md p-1 font-semi">
                    <span className="text-white">Briannw</span>
                    <span>.com</span>
                </Link>
            </div>

            {/* Responsive Menu */}
            <div className='2'></div>
        
        </div>
    )
}

export default Navbar