import React from 'react';

const Banner = () => {
  return (
    <section id='banner'>
      <iframe
        width='1280'
        height='720'
        src='https://www.youtube.com/embed/dQw4w9WgXcQ'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        className='w-full'
      ></iframe>
    </section>
  );
};

export default Banner;
