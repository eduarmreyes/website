import React from 'react';
import { css, jsx } from '@emotion/core';
import { Link, graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/blog';

const Blog = props => {
  /** @jsx jsx */
  const blog = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass="page-blog">
      <SEO title="Blog" />
      <div
        css={css`
          width: 100%;
          max-width: 800px;
          margin: 2rem auto 0 auto;
          padding: 0 40px;
        `}
      >
        <div className="row">
          {blog.map(edge => (
            <div
              key={edge.node.frontmatter.path}
              className="col-12 col-md-4 mb-1"
            >
              <div className="card blog blog-teaser">
                <div
                  className="p-4"
                  css={css`
                    background-color: #f8fafc;
                    border-radius: 6px;
                  `}
                >
                  <h2
                    css={css`
                      padding: 2rem 0;
                    `}
                  >
                    <Link
                      to={edge.node.frontmatter.path}
                      css={css`
                        text-decoration: none;
                        color: black;
                        &:hover {
                          opacity: 0.8;
                        }
                      `}
                    >
                      {edge.node.frontmatter.title}
                    </Link>
                  </h2>
                  <p
                    css={css`
                      line-height: 1.7;
                      margin-bottom: 2rem;
                    `}
                  >
                    {edge.node.excerpt}
                  </p>
                  <Link
                    to={edge.node.frontmatter.path}
                    css={css`
                      text-decoration: none;
                      &:hover {
                        opacity: 0.8;
                      }
                    `}
                  >
                    Read more 👉
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;

export default Blog;
