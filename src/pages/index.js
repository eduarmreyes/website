import React from 'react';
import Layout from '../components/layout';
import BlogList from '../components/blog-list';
import AboutMe from '../components/about-me';
import WorkingProcess from '../components/working-process';
import Experience from '../components/experience';

const IndexPage = () => (
  <Layout>
    <BlogList />
    <AboutMe />
    <WorkingProcess />
    <Experience />
  </Layout>
);

export default IndexPage;
