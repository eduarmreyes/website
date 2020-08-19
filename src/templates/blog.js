import React from 'react';
import { css, jsx } from '@emotion/core';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from 'components/SEO';
import LayoutBlog from 'layouts/blog';

const Blog = ({ data }) => {
  /** @jsx jsx */
  const {
    title,
    image,
    thanks,
    reading_time = null,
  } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  return (
    <LayoutBlog bodyClass="page-service">
      <SEO title={title} />
      <div className="strip strip-white strip-diagonal">
        <div
          className="pt-6 pt-md-10 m-auto"
          css={css`
            width: 100%;
            padding: 0 40px;
          `}
        >
          <div className="row justify-content-start">
            <div className="col-12 col-md-8">
              <div className="service service-single">
                <div
                  css={css`
                    max-width: 800px;
                    margin: 0 auto;
                    text-align: center;
                  `}
                >
                  <h1 className="title mt-6 pt-6 pb-3">{title}</h1>
                </div>
                <div
                  className="feature-image mb-3 mt-3"
                  css={css`
                    max-width: 900px;
                    margin: 0 auto;
                  `}
                >
                  <figure>
                    <Img
                      className="mb-2"
                      fluid={image.childImageSharp.fluid}
                      alt={title}
                    />
                    <figcaption
                      className="text-sm leading-none text-grey-darkest"
                      css={css`
                        max-width: 800px;
                        margin: auto;
                      `}
                    >
                      {thanks}
                    </figcaption>
                  </figure>
                  {reading_time && (
                    <div
                      className="text leading-none text-purple pt-5"
                      css={css`
                        max-width: 800px;
                        margin: auto;
                      `}
                    >
                      <span className="text-purple-dark">{`${reading_time}`}</span>{' '}
                      reading time ⏲
                    </div>
                  )}
                </div>
                <div
                  className="content mt-6 pt-3"
                  css={css`
                    max-width: 800px;
                    margin: 0 auto;
                    & h1,
                    & h2,
                    & h3,
                    & h4,
                    & pre {
                      line-height: 1.7;
                    }
                    & pre {
                      background-color: #22292f;
                      color: #f8fafc;
                      padding: 20px 0 20px 1rem;
                      margin: 1rem 0;
                      overflow: auto;
                    }
                    & p {
                      line-height: 1.7;
                      text-align: left;
                      overflow-wrap: break-word;
                      margin-bottom: 1rem;
                    }
                    & ul {
                      margin-bottom: 1rem;
                      line-height: 1.7;
                    }
                    & pre,
                    & code {
                      font-family: 'Fira Code';
                    }
                  `}
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutBlog>
  );
};

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        path
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        thanks
        reading_time
      }
      html
    }
  }
`;

export default Blog;
