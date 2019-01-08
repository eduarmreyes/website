import React from 'react'
import Image from '../components/image'
import PropTypes from 'prop-types'

const AboutMe = ({ author, from, cta_text }) => (
  <section className="container mx-auto py-8">
    <div className="flex justify-center">
      <div className="my-photo w-1/2 md:w-full">
        <figure className="pt-4 m-0" style={{ maxWidth: '300px' }}>
          <Image />
          <figcaption className="pt-2">
            This is me, chilling in a town in El Salvador.
          </figcaption>
        </figure>
      </div>
      <div className="my-information w-1/2 md:w-full pt-4">
        <h4 className="mb-4">
          Hi, I'm Eduardo Mejía, Front End Developer from El Salvador, living in the US.
        </h4>
        <p className="mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, porro voluptas illo aspernatur fugit laboriosam rerum impedit? Neque sequi nemo deserunt temporibus harum quam, nobis cum explicabo omnis vel ipsum!
        </p>
        <p className="mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, porro voluptas illo aspernatur fugit laboriosam rerum impedit? Neque sequi nemo deserunt temporibus harum quam, nobis cum explicabo omnis vel ipsum!
        </p>
        <button className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">
          Hire Me
        </button>
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
