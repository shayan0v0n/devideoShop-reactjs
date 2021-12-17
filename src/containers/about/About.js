import React from 'react'
import './About.scss'
import CarouselAbout from './carousel/CarouselAbout'
import AccordionAbout from './accordion/AccordionAbout'

const About = () => {

    return (
        <div>
            <CarouselAbout />
            <AccordionAbout />
        </div>
    )
}

export default About