import React, { useState } from 'react'
import axios from 'axios'
import { FaRegAddressBook, FaRegEnvelope, FaRegUser, FaRegMap } from "react-icons/fa";
import './contact.css'

const Contact = () => {
    const [form, setForm] = useState({name: '', email: '', subject: '', message: '',});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm( {...form, [name] : value } );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post(
                'https://sheet.best/api/sheets/5fab2d9b-4844-42fa-b142-5f3235bc45b3',
                form
            )
            .then((response) => {
            console.log(response);
            ////asd//
            setForm({name: '', email:'', subject:'', message:''});
        });
    };

  return (
    <section className="contact section" id="contact">
        <h2 className="section__title text-cs">Liên hệ với tôi</h2>
        <p className="section__subtitle">
            Hit <span>Me Up!</span>
        </p>

        <div className="contact__container container grid">
            <div className="container__content">
                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaRegMap />
                    </span>

                    <h3 className="contact__card-title">Address</h3>
                    <p className="contact__card-data">HoChiMinh, Quan4, VietNam</p>
                </div>

                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaRegUser />
                    </span>

                    <h3 className="contact__card-title">Freelance</h3>
                    <p className="contact__card-data">Available Now</p>
                </div>

                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaRegEnvelope />
                    </span>

                    <h3 className="contact__card-title">Email</h3>
                    <p className="contact__card-data">khoana219@uef.edu.vn</p>
                </div>

                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaRegAddressBook />
                    </span>

                    <h3 className="contact__card-title">Phone</h3>
                    <p className="contact__card-data">+84 901295334</p>
                </div>
            </div>

            <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-group grid">
                    <div className="contact__form-div">
                        <label className="contact__form-tag text-cs">Họ và Tên <b>*</b></label>
                        <input 
                        type="text" 
                        name='name' 
                        onChange={handleChange}
                        value={form.name} 
                        className="contact__form-input" />
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag text-cs">Địa chỉ email <b>*</b></label>
                        <input 
                            type="email"
                            name='email' 
                            onChange={handleChange}
                            value={form.email} 
                            className="contact__form-input" />
                    </div>
                </div>

                <div className="contact__form-div">
                        <label className="contact__form-tag text-cs">Vấn đề của bạn <b>*</b></label>
                        <input 
                            type="text" 
                            name='subject' 
                            onChange={handleChange}
                            value={form.subject} 
                            className="contact__form-input" />
                </div>

                <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag text-cs">Lời nhắn của bạn <b>*</b></label>
                        <textarea
                            name='message' 
                            onChange={handleChange}
                            value={form.message} 
                            className='contact__form-input'>
                        </textarea>
                </div>

                <div className="contact__submit">
                    <p>* Chấp nhận điều khoản và điều kiện.</p>
                    <button type='submit' className='btn text-cs'>Gửi tin nhắn</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact