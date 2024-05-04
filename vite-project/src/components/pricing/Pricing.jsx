import React from 'react'
import shapeTwo from "../../assets/shape-2.png"
import { FaCheck, FaArrowRight } from "react-icons/fa"
import './pricing.css'

const Pricing = () => {
  return (
    <section className="pricing section" id="pricing">
        <h2 className="section__title text-cs">Giá dịch vụ</h2>
        <p className="section__subtitle">
            Bảng giá <span>Của tôi</span>
        </p>

        <div className="pricing__container container grid">
            <div className="pricing__item card card-one">
                <span className="pricing__subtitle text-cs">Tiền công theo giờ</span>
                <h3 className="pricing__price">900.000 <span>VND /</span><em>Giờ</em></h3>

                <p className="pricing__description">Thực hiện giá dịch vụ theo giờ, theo tuần hoặc theo tháng tùy theo nhu cầu của khách hàng. Đã tốt nghiệp đại học UEF khoa CNTT, đã từng là designer cho nhiều brand quần áo ở VN.</p>

                <ul className="pricing__list">
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Thiết Kế Logo Thương Hiệu</span>
                    </li>

                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Thiết kế hình ảnh quần áo</span>
                    </li>

                    <li className="list__item">
                        <del>Phát triển giao diện website</del>
                    </li>

                    <li className="list__item">
                        <del>Phát triển full-stack website</del>
                    </li>
                </ul>

                <a href="" className="btn pricing__btn text-cs">
                    Bắt đầu dự án 
                    <FaArrowRight className='pricing__btn-icon'></FaArrowRight>
                </a>

                <img src={shapeTwo} alt="" className="shape c__shape" />
            </div>

            <div className="pricing__item-wrapper">
                <span className="pricing__label text-cs">Phổ biến</span>
            <div className="pricing__item card card-one">
                <span className="pricing__subtitle text-cs">Freelancing</span>
                <h3 className="pricing__price">3.000.000 <span>VND /</span><em>Tuần</em></h3>

                <p className="pricing__description">Thực hiện giá dịch vụ theo giờ, theo tuần hoặc theo tháng tùy theo nhu cầu của khách hàng. Đã tốt nghiệp đại học UEF khoa CNTT, đã từng là designer cho nhiều brand quần áo ở VN.</p>

                <ul className="pricing__list">
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Thiết Kế Logo Thương Hiệu</span>
                    </li>

                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Thiết kế hình ảnh quần áo</span>
                    </li>

                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Phát triển giao diện website</span>
                    </li>

                    <li className="list__item">
                        <del>Phát triển full-stack website</del>
                    </li>
                </ul>

                <a href="" className="btn pricing__btn text-cs">
                    Bắt đầu dự án 
                    <FaArrowRight className='pricing__btn-icon'></FaArrowRight>
                </a>

                <img src={shapeTwo} alt="" className="shape c__shape" />
            </div>
            </div>

            <div className="pricing__item card card-one">
                <span className="pricing__subtitle text-cs">Full Time</span>
                <h3 className="pricing__price">12.000.000<span>VND/</span><em>Tháng</em></h3>

                <p className="pricing__description">Thực hiện giá dịch vụ theo giờ, theo tuần hoặc theo tháng tùy theo nhu cầu của khách hàng. Đã tốt nghiệp đại học UEF khoa CNTT, đã từng là designer cho nhiều brand quần áo ở VN.</p>

                <ul className="pricing__list">
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Thiết Kế Logo Thương Hiệu</span>
                    </li>

                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Thiết kế hình ảnh quần áo</span>
                    </li>

                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Phát triển giao diện website</span>
                    </li>

                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Phát triển full-stack website</span>
                    </li>
                </ul>

                <a href="" className="btn pricing__btn text-cs">
                    Bắt đầu dự án 
                    <FaArrowRight className='pricing__btn-icon'></FaArrowRight>
                </a>

                <img src={shapeTwo} alt="" className="shape c__shape" />
            </div>
        </div>
    </section>
  )
}

export default Pricing