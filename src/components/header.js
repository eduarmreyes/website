import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Header = ({ author }) => (
  <header className="min-h-screen text-center bg-purple-darker border-t-6 border-blue-light flex items-center justify-center">
    <section className="container-hero padding-t-4 padding-b-4">
      <h1 className="text-8xl pt-3 pb-3 border-t-3 border-b-3 border-blue-light">
        <Link to="/" className="text-purple-lightest no-underline">
          {author}
        </Link>
      </h1>
      <p className="text-purple-lightest pt-3">
        #frontEnd #qualityCode #clearCommunication #writter
      </p>
    </section>
  </header>
)

Header.propTypes = {
  author: PropTypes.string,
}

Header.defaultProps = {
  author: '',
}

export default Header
