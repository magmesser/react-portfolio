import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

    <div className='container portfolio__container'>
      <article className='portfolio__item'>
      <div className='portfolio__item-image'></div>
      <h3>This is project title</h3>
      <a href='https://github.com' className='btn' target='_blank' rel="noreferrer">GitHub Link</a>
      <a href='https://github.com' className='btn btn-primary' target='_blank' rel="noreferrer">Live Project Link</a>
      </article>
    </div>

    </section>
  )
}

export default Portfolio