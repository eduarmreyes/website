import React from 'react';
import Header from './header';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import 'sass/layout.scss';

// document.addEventListener('touchstart', onTouchStart, {passive: true});

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query AuthorQuery {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Eduardo Mejía Website' },
            {
              name: 'keywords',
              content: 'eduardo, mejía, eduardo mejía, front end, el salvador',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header author={data.site.siteMetadata.author} />
        {children}
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
