import React from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faTwitter,
//   faInstagram,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";

function TeamCard(props) {
  
    const {image,name,role,twitter,instagram,linkedin}=props 
 
  return (
    <div className="flex flex-col gap-6 w-full shadow-lg p-4">
      <div className='max-w-96 max-h-[430px]'> 
        <img src={image} alt="team member" className="w-fit" />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">{name}</h2>
        <h3 className="">{role}</h3>
      </div>
      {/* <div className="flex flex-row gap-4">
        <a href={twitter} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div> */}
    </div>
  );
}

export default TeamCard
