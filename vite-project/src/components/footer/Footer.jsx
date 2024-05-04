import React from 'react'
import { FaFacebook, FaInstagramSquare, FaTwitter } from 'react-icons/fa'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container grid">
        <div className="home__socials">
          <a href="https://www.facebook.com/ngoanhkhoa13062001/" className="footer__social-link">
            <FaFacebook />
          </a>

          <a href="https://www.instagram.com/kayvee0cap/" className="footer__social-link">
            <FaInstagramSquare/>
          </a>

          <a href="https://www.instagram.com/kayvee0cap/" className="footer__social-link">
            <FaTwitter />
          </a>
        </div>

        <p className="footer__copyright text-cs">Copyright 2024 &copy; <span>My Portfolio</span></p>

        <p className="footer__copyright text-cs">Website thuộc bản quyền của <span>KayVee</span></p>
     </div>
    </footer>
  )
}

export default Footer