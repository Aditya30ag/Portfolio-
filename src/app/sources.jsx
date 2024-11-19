import { IoMdAnalytics} from "react-icons/io";
import { IoCallOutline ,IoLocationOutline } from "react-icons/io5";
import { GrUserExpert,GrUserManager } from "react-icons/gr";
import { MdOutlineSupportAgent,MdOutlineAlternateEmail } from "react-icons/md";
import { RiExchange2Fill } from "react-icons/ri";
import { FaInstagram, FaXTwitter, FaYoutube,FaDrawPolygon} from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiBlueprint } from "react-icons/si";


export const tabs = [
    {name:"Home",id:'hero'},
    {name:"About Us",id:'about'},
    {name:"Services",id:'services'},
    {name:"Properties",id:'properties'},
    {name:"Agents",id:'agents'}
]

export const whyChooseUs = [
  {
    title:"Unmatched Local Expertise",
    icon:<GrUserExpert/>,
    link:"",
  },
  {
    title:"Comprehensive Market Analysise",
    icon:<IoMdAnalytics/>,
    link:"",
  },
  {
    title:"Dedicated Client Support",
    icon:<MdOutlineSupportAgent/>,
    link:"",
  },
  {
    title:"Innovative Marketing Strategies",
    icon:<RiExchange2Fill/>,
    link:"",
  },
]
export const services = [
  {
    name:"General Contracting",
    icon:<SiBlueprint/>,
    description:`This involves overseeing the entire construction project from start to finish, 
        including hiring subcontractors, managing the budget, scheduling, and ensuring that the
        project meets all specifications and regulations.`,
  },
  {
    name:"Design-Build Services",
    icon:<FaDrawPolygon/>,
    description:`This service combines both the design and construction phases into a single 
       contract, streamlining the process and improving communication between the design and
        construction teams.

    `,
  },
  {
    name:"Project Management",
    icon:<GrUserManager/>,
    description:`Construction companies often provide project management services, which include 
       planning, coordinating, and overseeing projects to ensure they are completed on time, within 
       budget, and to the required quality standards.`,
  },
  
]

export const clients = [
  {
    name:'Kushagra Nigam',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
           veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud 
           exercitation ullamco laboris`
  },
  {
    name:'Kavya Mathur',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  },
  {
    name:'Ritesh Sanon',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
           veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud 
           exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laboris`
  },
  {
    name:'Arnav Mishra',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  },
  {
    name:'Jaishree Malhotra',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  },

];

export const contactOptions = [
  {
    title:"Email",
    value:"devanshijaiswal7@gmail.com",
    icon:<MdOutlineAlternateEmail />,
  },
  {
    title:"Phone Number",
    value:"+91-9161055529",
    icon:<IoCallOutline/>,
  },
  {
    title:"Address",
    value:"Bennett University, Greater Noida, India",
    icon:<IoLocationOutline/>,
  },
]

export const socialHandles = [
    {
      name:"Instagram",
      icon:<FaInstagram />,
      link:"https://www.instagram.com/",
    },
    {
      name:"Linkedin",
      icon:<FaLinkedin/>,
      link:"https://www.linkedin.com/in/devanshi-jaiswal-b83774217/",
    },
    {
      name:"Twitter",
      icon:<FaXTwitter/>,
      link:"",
    },
    {
      name:"Youtube",
      icon:<FaYoutube/>,
      link:"httpshttps://www.youtube.com/://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
    },
];


    