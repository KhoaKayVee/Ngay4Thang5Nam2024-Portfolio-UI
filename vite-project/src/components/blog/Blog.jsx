import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Blog1 from "../../assets/HPSOFTWARE.png"
import Blog2 from "../../assets/Hung.jpg"
import Blog3 from "../../assets/TheCFHouse.jpg"
import './blog.css'

const Blog = () => {
  return (
    <section className="blog section" id="blog">
        <h2 className="section__title text-cs">Bài viết mới nhất</h2>
        <p className="section__subtitle">
            Bài viết và dịch vụ <span>Của tôi</span>
        </p>

        <div className="blog__container container grid">
            <div className="blog__item card card-two">
                <span className="blog__date text-cs">05 / 01 / 2024</span>
                <h3 className="blog__title">Chúng ta nên bắt đầu từ đâu ?</h3>
                <p className="blog__description">Chúng ta nên bắt đầu từ những thứ chúng ta đam mê và cần cố gắng để đoạt được nó, sự nỗ lực và cố gắng của chúng ta rồi sẽ được công nhận.</p>
                
                <a href="" className="link">
                    Xem thêm
                    <FaArrowRight className='link__icon'></FaArrowRight>
                </a>

                <img src={Blog1} alt="" className="blog__img" />
            </div>

            <div className="blog__item card card-two">
                <span className="blog__date text-cs">05 / 01 / 2024</span>
                <h3 className="blog__title">Sự cố gắng sẽ được đền đáp?</h3>
                <p className="blog__description">Chúng ta nên bắt đầu từ những thứ chúng ta đam mê và cần cố gắng để đoạt được nó, sự nỗ lực và cố gắng của chúng ta rồi sẽ được công nhận.</p>
                
                <a href="" className="link">
                    Xem thêm
                    <FaArrowRight className='link__icon'></FaArrowRight>
                </a>

                <img src={Blog2} alt="" className="blog__img" />
            </div>

            <div className="blog__item card card-two">
                <span className="blog__date text-cs">05 / 01 / 2024</span>
                <h3 className="blog__title">Các ngôn ngữ lập trình phổ biến</h3>
                <p className="blog__description">Chúng ta nên bắt đầu từ những thứ chúng ta đam mê và cần cố gắng để đoạt được nó, sự nỗ lực và cố gắng của chúng ta rồi sẽ được công nhận.</p>
                
                <a href="" className="link">
                    Xem thêm
                    <FaArrowRight className='link__icon'></FaArrowRight>
                </a>

                <img src={Blog3} alt="" className="blog__img" />
            </div>
        </div>
    </section>
  )
}

export default Blog