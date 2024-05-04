import React from 'react';
import profileImg from "../../assets/Stussy.png"
import shapeOne from "../../assets/shape-1.png"
import shapeTwo from "../../assets/shape-2.png";


import { FaFacebook, FaInstagramSquare, FaTwitter  } from 'react-icons/fa';
import './home.css';

const Home = () => {
  return (
    <section className='home' id='home'>
      <div className="home__wrapper">
      <div className="home__container container">
        <p className="home__subtitle text-cs">
          Hello, <span>Tôi tên là</span>
        </p>

        <h1 className="home__title text-cs">
          <span>KH </span>KayVee
        </h1>

        <p className="home__job">
          <span className="text-cs">Tôi là</span> <b>Web Developer</b>
        </p>

        <div className="home__img-wrapper">
          <div className="home__banner">
            <img src={profileImg} alt="" className='home__profile' />
          </div>

          <p className="home__data home__data-one">
            <span className="text-lg">
               2 <b>+</b>
            </span>

            <span className="text-sm text-cs">
               Năm <span>Kinh Nghiệm</span>
            </span>
          </p>

          <p className="home__data home__data-two">
            <span className="text-lg">20+</span>

            <span className="text-sm text-cs">
               Dự án <span>Đã thực hiện</span>
            </span>
          </p>

          <img src={shapeOne} alt="" className="shape shape__1" />
          <img src={shapeTwo} alt="" className="shape shape__2" />
          <img src={shapeTwo} alt="" className="shape shape__3" />
        </div>

        <p className="home__text">
          Tôi đến từ VN, HCM. Tôi có kinh nghiệm nhiều năm trong lĩnh vực Design Website. Tôi thích nói chuyện với bạn về dự án độc đáo của chúng tôi
        </p>

        <div className="home__socials">
          <a href="https://www.facebook.com/ngoanhkhoa13062001/" className="home__social-link">
            <FaFacebook />
          </a>

          <a href="https://www.instagram.com/kayvee0cap/" className="home__social-link">
            <FaInstagramSquare/>
          </a>

          <a href="https://www.instagram.com/kayvee0cap/" className="home__social-link">
            <FaTwitter />
          </a>
        </div>

        <div className="home__btns">
          <a href="" className="btn text-cs">Download CV</a>
          
          <a href="" className="hero__link text-cs">My Skills</a>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Home