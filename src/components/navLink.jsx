"use client"
import {usePathname} from 'next/navigation'
import React from 'react'
import Link from 'next/link';


const NavLink = ({link}) => {

  const pathName = usePathname()

  console.log(pathName)

  return (
    <Link className='' href={link.url}>{link.title}</Link>
  )
}

export default NavLink