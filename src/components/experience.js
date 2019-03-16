import React from 'react'
import PropTypes from 'prop-types'

const Experience = () => (
  <section className="bg-blue-lightest bg-el-salvador">
    <div className="container mx-auto py-8 px-6">
      <div className="block md:flex">
        <div className="flex-1 text-blue-lightest bg-blue-transparent px-6 py-6 m-2">
          <h2 className="mt-6 mb-6">WORK EXPERIENCE</h2>
          <h3 className="mb-2">AgilityFeat, Inc.</h3>
          <h4 className="mb-4">
            FEB '16 - SEP '17 & SEP'18 - <i>CURRENT</i>
          </h4>
          <p className="mb-4 leading-normal">
            Part of the team that created{' '}
            <a className="text-white" href="https://usabili.me">
              https://usabili.me
            </a>
            . In charge of most of the Front End development of the product.
            Development was based on agile methodology.
          </p>
          <hr className="border border-solid border-blue-lightest mb-4" />
          <h3 className="mb-2">TechLatam</h3>
          <h4 className="mb-4">Sep '17 - Sep '18</h4>
          <p className="mb-4 leading-normal">
            In charge of the Front End development of TechLatam's web-based
            projects such as websites and dashboards. Responsible for{' '}
            <strong>top-notch web development</strong> based on beautiful
            designs.
          </p>
        </div>
        <div className="flex-1 text-blue-lightest bg-blue-transparent px-6 py-6 m-2">
          <h2 className="mt-6 mb-6">EDUCATION</h2>
          <h3 className="mb-2">UEES - B.S. Systems Engineering</h3>
          <h4 className="mb-4">'13 - '18</h4>
          <p className="mb-4 leading-normal">
            The most important part of my education is understand that what I
            learned in the university will be obsolete pretty fast and that we
            need to continue our education everyday.
          </p>
          <hr className="border border-solid border-blue-lightest mb-4" />
          <h3 className="mb-2">ITCA - Associated on Systems Engineering</h3>
          <h4 className="mb-4">'10 - '11</h4>
          <p className="mb-4 leading-normal">
            Started my web development career, it was crazy, we designed our
            websites using <code>tables</code> crazy days.
          </p>
        </div>
      </div>
      <code className="ml-2 text-blue-lightest">
        Photo by Oswaldo Martinez on Unsplash
      </code>
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
