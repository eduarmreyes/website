import React from 'react';
// import Helmet from 'react-helmet'
// import { StaticQuery, graphql } from 'gatsby'
import SEO from 'components/SEO';
import HeaderBlog from 'components/header-blog';
// import Footer from 'components/Footer'
// import SubFooter from 'components/SubFooter'
// import MenuMobile from 'components/MenuMobile'
import 'sass/blog.scss';

const LayoutBlog = props => {
  return (
    <React.Fragment>
      <SEO />
      <div className={`page${props.bodyClass ? ` ${props.bodyClass}` : ''}`}>
        <div id="wrapper" className="wrapper">
          <HeaderBlog />
          {props.children}
        </div>
        {/* <Footer />
        <SubFooter /> */}
      </div>
    </React.Fragment>
  );
};

export default LayoutBlog;
