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
            <div className="p-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
                {/* BIOGRAPHY CONTAINER */}
                <div className="flex flex-col gap-12 justify-center">
                    {/* BIOGRAPHY TITLE */}
                    <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
                    <p className="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Inventore laboriosam, rem eligendi officia nihil, deserunt nisi ex neque corrupti id eos maiores, aliquam maxime fugit aspernatur amet ut culpa dignissimos!
                    </p>
                    {/* BIOGRAPHY SIGNATURE */}
                    <span className="italic">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius mollitia harum et.
                    </span>
                    
                {/* SVG BUTTON */}
                <div className="self-end">
                        <svg>My Signature</svg>
                    </div>
                </div>
                {/* SKILLS CONTAINER */}
                <div className="flex flex-col gap-12 justify-center">Skills</div>
                {/* SKILLS TITLE */}
                <h1 className="font-bold text-2xl">SKILLS</h1>

                {/* SKILLS LIST */}
                <div className="">Skills</div>
                    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                        Javascript
                    </div>
                {/* SKILLS SCROLL SVG */}
                <svg>Skill svg placeholder</svg>


                {/* EXPERIENCE CONTAINER */}
                <div className="">Experience</div>
            </div>

            {/* SVG CONTAINER */}
            <div className="hidden"></div>

        </div>
        </motion.div>
    )
}

export default AboutPage