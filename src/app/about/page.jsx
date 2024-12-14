"use client"

import {motion} from "framer-motion"

const AboutPage = () => {
    return (
        <motion.div 
        className="h-full" 
        initial={{y:"-200vh"}} 
        animate={{y:"0%"}} 
        transition={{duration:1}}> 

        {/* CONTAINER */}
        <div className="">
            {/* TEXT CONTAINER */}
            <div className="p-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 flex flex-col gap-24">
                {/* BIOGRAPHY CONTAINER */}
                <div className=""></div>
                {/* SKILLS CONTAINER */}
                <div className=""></div>
                {/* EXPERIENCE CONTAINER */}
                <div className=""></div>
            </div>

            {/* SVG CONTAINER */}
            <div className="hidden"></div>

        </div>
        </motion.div>
    )
}

export default AboutPage