import React from 'react'
import {BsLinkedin, BsStackOverflow} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com/in/maggie-messer/' target='_blank' rel='noreferrer'><BsLinkedin/></a>
        <a href='https://github.com/magmesser' target='_blank' rel='noreferrer'><FaGithub/></a>
        <a href='https://stackoverflow.com/users/19587405/magmesser?tab=profile' target='_blank' rel='noreferrer'><BsStackOverflow/></a>
    </div>
  )
}

export default HeaderSocials