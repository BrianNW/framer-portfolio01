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
                    {/* BIOGRAPHY QUOTE */}
                    <span className="italic">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius mollitia harum et.
                    </span>
                    
                    {/* SVG SIGNATURE */}
                    <div className="self-end">
                        <svg>My Signature</svg>
                    </div>
                
                
                {/* BIOGRAPHY SCROLL SVG */}
                    <motion.svg
                    initial={{ opacity: 0.2, y: 0 }}
                    animate={{ opacity: 1, y: "10px" }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width={50}
                    height={50}
                    >
                    <path
                        d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                        stroke="#000000"
                        strokeWidth="1"
                    ></path>
                    <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                    <path
                        d="M15 11L12 14L9 11"
                        stroke="#000000"
                        strokeWidth="1"
                    ></path>
                    </motion.svg>
                </div>

                {/* SKILLS CONTAINER */}
                <div className="flex flex-col gap-12 justify-center">
                    {/* SKILLS TITLE */}
                    <h1 className="font-bold text-2xl">SKILLS</h1>
                    {/* SKILLS LIST */}
                    <div className="flex gap-4 flex-wrap">
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                            Javascript
                        </div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                            React
                        </div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                            Python
                        </div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                            MySQL
                        </div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                            Javascript
                        </div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                            React
                        </div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                            Python
                        </div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                            MySQL
                        </div>
                    </div>
                    {/* SKILLS SCROLL SVG */}
                    <motion.svg
                    initial={{ opacity: 0.2, y: 0 }}
                    animate={{ opacity: 1, y: "10px" }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width={50}
                    height={50}
                    >
                    <path
                        d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                        stroke="#000000"
                        strokeWidth="1"
                    ></path>
                    <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                    <path
                        d="M15 11L12 14L9 11"
                        stroke="#000000"
                        strokeWidth="1"
                    ></path>
                    </motion.svg>
                </div>

                {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            
          >
            {/* EXPERIENCE TITLE */}
            
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    White Label Solutions
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I provide White Label solutions in both Web Development and SEO for organizations looking to offload work but keep branding {" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2022 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    {/* Company Name here */}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Search Engine Optimzation
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I develop strategies and implement standard practices for effective on and off page SEO{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2020 - Present{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    {/* Company Name here */}
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelance Web Development{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I provided cost effective Web Solutions like Websites for small to medium businesses{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2013 - Present{" "}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>            
          </div>
        </div>
            {/* SVG CONTAINER */}
            <div className="hidden"></div>

        </div>
        </motion.div>
    )
}

export default AboutPage