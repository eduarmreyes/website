import React from 'react';
import { css, jsx } from '@emotion/core';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import 'sass/blog.scss';

const BlogList = ({ data }) => {
  /** @jsx jsx */

  const { edges: markdown } = data.allMarkdownRemark;
  return (
    <div className="mx-auto bg-white p-6 mt-0 rounded-none shadow-none lg:-mt-6 lg:rounded lg:shadow-lg lg:container-sm">
      <div className="row justify-content-start">
        <div className="mb-4">
          <Link
            className="no-underline text-blue-darker hover:text-blue"
            to="/blog"
          >
            <h2
              className="title-3 text"
              css={css`
                position: relative;

                &&::before {
                  content: '';
                  opacity: 0.2;
                  background-color: #273096;
                  position: absolute;
                  bottom: 0;
                  width: 75px;
                  height: 8px;
                  transform: scaleX(1.3);
                  transition: height 0.2s ease-out;
                }

                &&:hover&&::before {
                  height: 24px;
                }
              `}
            >
              Blogs
            </h2>
          </Link>
        </div>
        {markdown.map((edge, index) => (
          <Link
            key={index}
            className="no-underline text-black hover:text-grey-darkest"
            to={edge.node.frontmatter.path}
          >
            <div
              className="mb-4 pb-2 border-b"
              css={css`
                :hover {
                  outline: 8px solid #6cb2eb;
                }
              `}
              key={edge.node.frontmatter.path}
            >
              <div className="card blog blog-teaser">
                <div className="card-content">
                  {edge.node.frontmatter.image && (
                    <div className="feature-image mb-3">
                      <figure>
                        <Img
                          fluid={
                            edge.node.frontmatter.image.childImageSharp.fluid
                          }
                        />
                        <figcaption className="pt-2 text-sm leading-none text-grey-darkest">
                          {edge.node.frontmatter.thanks}
                        </figcaption>
                      </figure>
                    </div>
                  )}
                  <h2 className="pb-2">{edge.node.frontmatter.title}</h2>
                  <p className="leading-normal">{edge.node.excerpt}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
        <div className="mt-4">
          <Link
            className="no-underline text-blue-dark hover:text-blue"
            to="/blog"
          >
            View All 👉
          </Link>
        </div>
      </div>
    </div>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query BlogListQuery {
        allMarkdownRemark(
          filter: {
            fileAbsolutePath: { regex: "/blog/" }
            frontmatter: { draft: { eq: false }, featured: { eq: true } }
          }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 5
        ) {
          totalCount
          edges {
            node {
              excerpt
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
              }
            }
          }
        }
      }
    `}
    render={data => <BlogList data={data} {...props} />}
  />
);
