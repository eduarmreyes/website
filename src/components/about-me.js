import React from 'react'
import Image from '../components/image'

const AboutMe = () => (
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
          Hi, I'm Eduardo Mejía, Front End Developer from El Salvador, living in
          the US.
        </h4>
        <p className="mb-4 leading-normal">
          I am from{' '}
          <a
            href="https://elsalvador.travel/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            El Salvador
          </a>
          . A nice country with a lot of good things in a tiny amount of earth.
          It's so tiny that you're able to be at the beach in the morning and
          have a great old town tour at the afternoon, you could even go to a
          nice mall at night and be back to your place all in one day.
        </p>
        <p className="mb-4 leading-normal">
          I decided to be a Software Developer because I like the idea to create
          nice things to make life easier to others, I also was impacted when I
          realized I could be really good at this just by having a laptop and
          internet, the fact that a boy from El Salvador can compite with people
          that was upbrought in a country with different opportunities gave me
          hope my future was as bright as my imagination.
        </p>
        <p className="mb-4 leading-normal">
          Fun fact about me, I am a former shortstop baseball player, I even
          played representing my country for a couple of years, wonderful,
          amazing, fill with beautiful memories.
        </p>
        <p className="mb-2">
          <a href="https://twitter.com/eduarmreyes" className="no-underline">
            <span role="img" aria-label="bird emoji">
              🐦
            </span>{' '}
            Find me on Twitter
          </a>
        </p>
        <p className="mb-2">
          <a href="mailto:eduar.mreyes@gmail.com" className="no-underline">
            <span role="img" aria-label="email emoji">
              📧
            </span>{' '}
            Send me an email
          </a>
        </p>
      </div>
    </div>
  </section>
)

export default AboutMe
