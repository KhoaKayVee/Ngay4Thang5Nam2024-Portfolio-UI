import React from 'react'
import { cv } from '../../Data'
import Card from './Card'
import './resume.css'

const Resume = () => {
  return (
    <section className="resume section" id="resume">
        <h2 className="section__title text-cs">Hồ sơ cá nhân</h2>
        <p className="section__subtitle">
            Hành trình <span>Của tôi</span>
        </p>

        <div className="resume__container container grid">
            <div className="resume__group">
                <h3 className="resume__heading">Kỹ năng</h3>
                
                <div className="resume__items">
                    {cv.map((val, id) => { 
                        if(val.category === 'education') {
                            return (
                                <Card 
                                    key = { id } 
                                    title = { val.title } 
                                    subtitle = { val.subtitle } 
                                    date = { val.date }
                                    description = { val.description }
                                />
                            );
                        }
                    })}
                </div>
            </div>

            <div className="resume__group">
                <h3 className="resume__heading">Học nghiệp</h3>
                
                <div className="resume__items">
                    {cv.map((val, id) => { 
                        if(val.category === 'experience') {
                            return (
                                <Card 
                                    key = { id } 
                                    title = { val.title } 
                                    subtitle = { val.subtitle } 
                                    date = { val.date }
                                    description = { val.description }
                                />
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Resume