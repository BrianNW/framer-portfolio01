"use client"

import { AnimatePresence } from 'framer-motion'
import React from 'react'
import Navbar from './navbar'
import {motion} from 'framer-motion';
import { usePathname } from 'next/navigation';

const TransitionProvider = ({children}) => {

  const pathName = usePathname()

  return (
    <AnimatePresence mode="wait">
        <div key={pathName} className="w-screen h-screen bg-gradient-to-b from-blue-50 to-red-100">
          <motion.div className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{height:"0vh"}} exit={{height:"140vh"}} transition={{duration:0.5, ease:"easeOut"}}/>
          
          <motion.div className="h-screen w-screen fixed bg-red-500 rounded-t-[100px] bottom-0 z-40"
          initial={{height:"140vh"}} animate={{height:"0vh", transition: {delay: 2}}}/>
          <div className ="h-24">
            <Navbar />
          </div>
          <div className ="h-[calc(100vh-6rem)]">
            {children}
          </div>
        </div>
    </AnimatePresence>

  )
}

export default TransitionProvider