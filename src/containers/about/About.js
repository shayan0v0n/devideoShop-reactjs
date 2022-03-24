import React from 'react'
import './About.scss'
import CarouselAbout from '../../components/about/carousel/CarouselAbout'
import AccordionAbout from '../../components/about/accordion/AccordionAbout'

const About = () => {

    return (
        <div>
            <CarouselAbout />
            <AccordionAbout />
        </div>
    )
}

export default About