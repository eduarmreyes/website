const path = require('path');

// Create pages from markdown files
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise(resolve => {
    resolve(
      graphql(
        `
          query {
            blog: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/blog/" } }
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    path
                    title
                    date(formatString: "DD MMMM YYYY")
                    image {
                      childImageSharp {
                        fluid {
                          srcSet
                        }
                      }
                    }
                    draft
                    featured
                  }
                  excerpt
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          return Promise.reject(result.errors);
        }

        result.data.blog.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/blog.js');
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id,
            },
          });
        });
        resolve();
      })
    );
  });
};
