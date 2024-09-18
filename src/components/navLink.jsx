import React from 'react'
"use client"

import Link from 'next/link';
import {usePathName} from 'next/navigation'

const NavLink = ({link}) => {

  const pathName = usePathName()

  console.log(pathName)

  return (
    <Link className='' href={link.url}>{link.title}</Link>
  )
}

export default NavLink