import React from 'react'
import Layout from '../components/layout'
import AboutMe from '../components/about-me'
import WorkingProcess from '../components/working-process'
import Experience from '../components/experience'

const IndexPage = () => (
  <Layout>
    <AboutMe />
    <WorkingProcess />
    <Experience />
  </Layout>
)

export default IndexPage
