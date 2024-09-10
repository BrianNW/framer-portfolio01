import React from 'react'

const navLink = ({link}) => {
  return (
    <Link className='' href={link.url}>{link.title}</Link>
  )
}

export default navLink