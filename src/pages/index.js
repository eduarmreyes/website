import React from 'react'
import Layout from '../components/layout'
import AboutMe from '../components/about-me'

const IndexPage = () => (
  <Layout>
    <AboutMe />
    <h1 className="mb-4">Hi everyone</h1>
    <p className="leading-loose">This is going to be my landing, changes coming up.</p>
    <p className="leading-loose">Built upon great technologies</p>
    <ul>
      <li>
        Gatsby
      </li>
      <li>
        ReactJS
      </li>
      <li>
        NodeJS
      </li>
    </ul>
  </Layout>
)

export default IndexPage
