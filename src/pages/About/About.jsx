import SubHeader from '@components/SubHeader'
import Services from '@pages/About/components/Services'
import Statistics from '@pages/About/components/Statistics'
import StorySection from '@pages/About/components/StorySection'
import TeamSection from '@pages/About/components/TeamSection'
import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
    
    <SubHeader
    parentPageHref={<Link to="/">Home</Link>}
titleHref={<Link to="about">About</Link>}
    ></SubHeader>

    <StorySection> </StorySection>
    <Statistics 
    sallersNo="10.5K"
    monthlySale="33k"
    customerNo="45.5K"
    annaulSale="25K"
    ></Statistics>
    <TeamSection></TeamSection>
    <Services></Services>
    </>
  )
}

export default About