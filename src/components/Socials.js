import React from 'react';
import { FaTwitter, FaSpotify, FaApple, FaInstagram } from 'react-icons/fa';

import data from '../data/personal.json';

const Socials = () => {
  return (
    <div className='flex'>
      <a target='_blank' rel='noopener' href={data.socials.spotify} className='pr-2'>
        <FaSpotify></FaSpotify>
      </a>
      <a target='_blank' rel='noopener' href={data.socials.instagram} className='pr-2'>
        <FaInstagram></FaInstagram>
      </a>
      <a target='_blank' rel='noopener' href={data.socials.twitter} className='pr-2'>
        <FaTwitter></FaTwitter>
      </a>
      <a target='_blank' rel='noopener' href={data.socials.apple} className='pr-2'>
        <FaApple></FaApple>
      </a>
    </div>
  );
};

export default Socials;
