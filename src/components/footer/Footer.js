import React from 'react'
import './Footer.css'
import {BsLinkedin, BsStackOverflow} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='#top' className='footer__logo'>MAGMESSER</a>

      <ul className='permalinks'>
        <li><a href='#top'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

    <div className='footer__socials'>
        <a href='https://linkedin.com/in/maggie-messer/' target='_blank' rel='noreferrer'><BsLinkedin/></a>
        <a href='https://github.com/magmesser' target='_blank' rel='noreferrer'><FaGithub/></a>
        <a href='https://stackoverflow.com/users/19587405/magmesser?tab=profile' target='_blank' rel='noreferrer'><BsStackOverflow/></a>
    </div>

    <div className='footer__copyright'>
      <small>&copy; Maggie &hearts; Messer </small>
    </div>

    </footer>
  )
}

export default Footer