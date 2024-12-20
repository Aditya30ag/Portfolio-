import React from 'react'
import { FaInstagram, FaXTwitter, FaGithub ,FaLinkedin, FaYoutube} from "react-icons/fa6";

const SocialHandles = () => {
  return (
    <div className='handles-container flex gap-10 items-center content-center'>
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
    link:"https://www.instagram.com/__.aditya_agrawal_/",
  },
  {
    name:"Linkedin",
    icon:<FaLinkedin/>,
    link:"https://www.linkedin.com/in/aditya-agrawal-527150303/",
  },
  {
    name:"Youtube",
    icon:<FaYoutube/>,
    link:"https://www.youtube.com/@Coder-python-Coder",
  },
  {
    name:"GitHub",
    icon:<FaGithub/>,
    link:"https://github.com/Aditya30ag",
  },
];

export default SocialHandles