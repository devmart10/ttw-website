import React from 'react';
import { NextSeo } from 'next-seo';

const Seo = () => {
  return (
    <NextSeo
      title='Test The Waters'
      description='East Bay Pop Punk | Test The Waters'
      canonical='https://ttw-website-one.vercel.app/'
      openGraph={{
        url: 'https://ttw-website-one.vercel.app/',
        type: 'website',
        locale: 'en_IE',
        title: 'Test The Waters',
        description: 'East Bay Pop Punk | Test The Waters',
        site_name: 'Test The Waters',
      }}
      twitter={{
        handle: '@testthewatersca',
        site: 'https://twitter.com/testthewatersca',
        cardType: 'summary_large_image',
      }}
    />
  );
};

export default Seo;
