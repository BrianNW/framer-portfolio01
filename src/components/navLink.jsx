import React from 'react'
"use client"

const NavLink = ({link}) => {

  const pathName = usePathName()

  return (
    <Link className='' href={link.url}>{link.title}</Link>
  )
}

export default NavLink