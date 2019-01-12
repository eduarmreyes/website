import React from 'react'
import Image from '../components/image'
import PropTypes from 'prop-types'

const AboutMe = ({ author, from, cta_text }) => (
  <section className="container mx-auto py-8 px-6">
    <div className="md:flex justify-center">
      <div className="my-photo w-full md:w-1/2">
        <figure className="pt-4 m-0" style={{ maxWidth: '300px' }}>
          <Image />
          <figcaption className="pt-2">
            This is me, chilling in a town in El Salvador.
          </figcaption>
        </figure>
      </div>
      <div className="my-information w-full md:w-1/2 pt-4 mt-4">
        <h4 className="mb-4 leading-normal">
          Hi, I'm Eduardo Mejía, Front End Developer from El Salvador, living in the US.
        </h4>
        <p className="mb-4 leading-normal">
          I am from <a href="https://elsalvador.travel/en/" target="_blank" rel="noopener noreferrer">El Salvador</a>. A nice country with a lot of good things in a tiny amount of earth.
        </p>
        <p className="mb-4 leading-normal">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, porro voluptas illo aspernatur fugit laboriosam rerum impedit? Neque sequi nemo deserunt temporibus harum quam, nobis cum explicabo omnis vel ipsum!
        </p>
        <a href="mailto:eduar.mreyes@gmail.com" className="no-underline"><span role="img" aria-label="email emoji">📧</span> Send me an email</a>
      </div>
    </div>
  </section>
)

AboutMe.propTypes = {
  author: PropTypes.string,
}

AboutMe.defaultProps = {
  author: '',
}

export default AboutMe
