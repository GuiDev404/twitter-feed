import React from 'react'

const Header = ({ title }) => {
  return (
    <header className='header'>
      <h2 className='header__title'>{title}</h2>
    </header>
  )
}

export default Header
