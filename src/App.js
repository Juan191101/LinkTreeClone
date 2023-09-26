import './App.css';
import profilePic from "./primer_plano-removebg-preview copy.png"
import {FaGithub, FaInstagram, FaTwitter, FaLinkedin, FaSlack, FaReadme} from "react-icons/fa"


function App() {
  const links = [
  {
    url:"https://www.linkedin.com/in/juan-cruz-ruarte-aa302a255/",
    title:"Linkendin",
    icon:<FaLinkedin/>
  },{
    url:"https://deploy-portfolio-juan191101.vercel.app/",
    title:"Portfolio",
    icon:<FaReadme/>
  },{
    url:"https://github.com/Juan191101",
    title:"Github",
    icon:<FaGithub/>
  },{
    url:"https://join.slack.com/t/programacion-c4k2431/shared_invite/zt-23tf01a86-WPNYHxGuJ~pvozXyg7FwUg",
    title:"Slack",
    icon:<FaSlack/>
  },{
    url:"https://twitter.com/JuanRuarte1",
    title:"Twitter",
    icon:<FaTwitter/>
  },{
    url:"https://www.instagram.com/juanruarte_/",
    title:"Instagram",
    icon:<FaInstagram/>
  },
]
return (
    <div className="App">
      <div className="App-header container mx-auto">
        <img src={profilePic} className="profile-pic w-20 h-20 mb-4 rounded-full border-2 border-white" alt="logo" />
        <h1 className='text-white font-bold cursor-default'> Juan Ruarte </h1>
       <ul className=' flex flex-col w-full '>
        {
          links.map((link, index)=>(
            <li key={index} className='cursor-pointer m-2 py-3 px-10 border-white border-2 text-sm md:text-md text-white hover:text-black hover:border-black'>
              <a href={link.url} className='flex items-center' title={link.title} target='_blank' rel='noreferrer'>
              {link.icon}
              <p className='ml-3 '>{link.title}</p>
              </a>
              </li>
          ))
        }
       </ul>
      </div>
    </div>
  );
}

export default App;
