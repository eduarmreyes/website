import React from 'react'
import PropTypes from 'prop-types'

const Experience = () => (
  <section className="bg-grey-lightest">
    <div className="container mx-auto py-8 px-6">
      <h1 className="text-center">
        My Experience
      </h1>
      <h3 className="text-grey-darker text-center mt-6 mb-6">
        As a Front End developer, the way I craft out great websites is as follows
      </h3>
      <div class="flex">
        <div class="flex-1 text-grey-darker text-center bg-teal-dark px-6 py-6 m-2">
          <span role="img" aria-label="artist palette emoji">
            🎨
          </span>
          <p className="mt-4 text-teal-lightest">
            Design
          </p>
        </div>
        <div class="flex-1 text-grey-darker text-center bg-blue-dark px-6 py-6 m-2">
          <span role="img" aria-label="laptop computer emoji">
            💻
          </span>
          <p className="mt-4 text-blue-lightest">
            Development
          </p>
        </div>
        <div class="flex-1 text-grey-darker text-center bg-indigo-dark px-6 py-6 m-2">
          <span role="img" aria-label="computer emoji">
            📊
          </span>
          <p className="mt-4 text-indigo-lightest">
            Testing
          </p>
        </div>
        <div class="flex-1 text-grey-darker text-center bg-pink-dark px-6 py-6 m-2">
          <span role="img" aria-label="computer emoji">
            🚀
          </span>
          <p className="mt-4 text-pink-lightest">
            Launch
          </p>
        </div>
      </div>
    </div>
  </section>
)

Experience.propTypes = {
  author: PropTypes.string,
}

Experience.defaultProps = {
  author: '',
}

export default Experience
