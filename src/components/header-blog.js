import React from 'react'
import { css, jsx } from '@emotion/core'
import { Link } from 'gatsby'
// import PropTypes from 'prop-types'

const HeaderBlog = () => (
  /** @jsx jsx */
  <header className="pt-6">
    <div
      css={css`
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        padding: 0 40px;
      `}
    >
      <nav
        css={css`
          width=100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <Link
          to="/"
          css={css`
            text-decoration: none;
          `}
          className="text-black"
        >
          Home of Eduardo Mejía
        </Link>
        <div
          className="
            d-flex
            align-items-center
            "
        >
          <Link to="/blog">Blog</Link>
        </div>
      </nav>
    </div>
  </header>
)

export default HeaderBlog
