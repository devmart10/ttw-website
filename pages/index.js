import React from 'react';
import Layout from '../src/components/Layout';

import AboutMe from '../src/sections/AboutMe';
import Banner from '../src/sections/Banner';
import Bio from '../src/sections/Bio';
import Contact from '../src/sections/Contact';

const Index = () => {
  return (
    <Layout>
      <Banner></Banner>
      <Bio></Bio>
    </Layout>
  );
};

export default Index;
