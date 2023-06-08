import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 Kinshasa Dev Tous droits reserveré</p>
      <p className="icons">
      <a href="https://Instagram.com/"><AiFillInstagram /></a>
    <a href="https://twitter.com/danny_hamici"><AiOutlineTwitter/></a>
      </p>
    </div>
  )
}

export default Footer