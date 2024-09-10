import React from 'react'
"use client"

const navLink = ({link}) => {

  const pathName = usePathName()

  return (
    <Link className='' href={link.url}>{link.title}</Link>
  )
}

export default navLink