import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import '../sass/blog.scss'

const BlogList = ({ data }) => {
  const { edges: markdown } = data.allMarkdownRemark
  return (
    <div className="container-sm mx-auto -mt-6 bg-white p-6 rounded shadow-lg">
      <div className="row justify-content-start">
        <div className="mb-4">
          <h2 className="title-3 text-dark">Blogs</h2>
        </div>
        {markdown.map(edge => (
          <div className="mb-3" key={edge.node.frontmatter.path}>
            <div className="card blog blog-teaser">
              <div className="card-content">
                <h2 className="mb-2">
                  <Link
                    className="no-underline text-black hover:text-grey-darkest"
                    to={edge.node.frontmatter.path}
                  >
                    {edge.node.frontmatter.title}
                  </Link>
                </h2>
                <p className="leading-normal">{edge.node.excerpt}</p>
              </div>
            </div>
          </div>
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
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query BlogListQuery {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/blog/" } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          totalCount
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
    `}
    render={data => <BlogList data={data} {...props} />}
  />
)
