import TeamCard from '@pages/About/components/TeamCard'
import image1 from '@assets/images/image46.png'
import image2 from '@assets/images/image47.png'
import image3 from '@assets/images/image51.png'
import React from 'react'

function TeamSection() {
  return (
    <>
      <section className="max-w-6xl mx-auto   my-8 mb-16  px-4 ">

      <div className='grid md:grid-cols-3 gap-6'>
        <TeamCard
          image={image1}
          name="Tom Cruise"
          role="Founder & Chairman"
          twitter="#"
          instagram="#"
          linkedin="#"
        ></TeamCard>
        <TeamCard
          image={image2}
          name="Tom Cruise"
          role="Founder & Chairman"
          twitter="#"
          instagram="#"
          linkedin="#"
        ></TeamCard>
        <TeamCard
          image={image3}
          name="Tom Cruise"
          role="Founder & Chairman"
          twitter="#"
          instagram="#"
          linkedin="#"
        ></TeamCard>
      </div>
      </section>
    </>
  );
}

export default TeamSection
