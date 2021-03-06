import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Socials from '../components/Socials';
import { FaEnvelope } from 'react-icons/fa';

import data from '../data/personal.json';

const Header = () => {
  return (
    <header className='mb-4 shadow-lg'>
      <div className='flex flex-wrap items-baseline p-8 my-container'>
        <h1 className='mb-0 mr-auto font-semibold tracking-wider text-platinum'>Test The Waters</h1>
        <div className='flex items-center text-2xl text-platinum'>
          <a href='#' className='mr-12 text-ttw'>
            Home
          </a>
          <AnchorLink href='#bio' className='mr-12 text-ttw'>
            Bio
          </AnchorLink>
          <Socials></Socials>
          <a href={`mailto:${data.email}`} className='font-normal'>
            <FaEnvelope></FaEnvelope>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
