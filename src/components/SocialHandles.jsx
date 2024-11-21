import React from 'react'
import '../styles/socialHandles.css';
import { FaInstagram, FaXTwitter, FaGithub ,FaLinkedin} from "react-icons/fa6";

const SocialHandles = () => {
  return (
    <div className='handles-container'>
        {
            socialHandles.map((handle, index) => (
                <a href={handle.link} target='_blank' className='flex-center icon-wrapper' key={index}>
                    {handle.icon}
                </a>
            ))
            }
    </div>
  )
}

const socialHandles = [
  {
    name:"Instagram",
    icon:<FaInstagram />,
    link:"https://www.instagram.com/_.aditya_agrawal_/",
  },
  {
    name:"Linkedin",
    icon:<FaLinkedin/>,
    link:"https://www.linkedin.com/in/aditya-agrawal-527150303/",
  },
  {
    name:"Twitter",
    icon:<FaXTwitter/>,
    link:"",
  },
  {
    name:"Youtube",
    icon:<FaGithub/>,
    link:"https://github.com/Aditya30ag",
  },
];

export default SocialHandles