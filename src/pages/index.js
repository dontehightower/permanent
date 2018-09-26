import React from 'react';

import Layout from '../components/layout';
import Navbar from '../components/Navbar';
import Gallery from '../components/Gallery';

const IndexPage = () => {
  return (
    <Layout>
      <Navbar></Navbar>
      <Gallery></Gallery>
    </Layout>
  );
};

export default IndexPage;
