import React from 'react'
import Image from '../components/image'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
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
    <figure className="pt-4 m-0" style={{ maxWidth: '300px' }}>
      <Image />
      <figcaption className="pt-2">
        This is me, chilling in a town in El Salvador.
      </figcaption>
    </figure>
  </Layout>
)

export default IndexPage
