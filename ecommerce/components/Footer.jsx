import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2023 Macxx headphones All rights reserved</p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
      <p className='dev'>contact developer mbakweangela96@gmail.com</p>
    </div>
  )
}

export default Footer