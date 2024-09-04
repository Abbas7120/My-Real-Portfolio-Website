import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {useState} from "react"



const Navbar=()=> {
   const [hover,sethover]=useState(null)
const iconStyle=(iconName)=>({
color:hover===iconName?getColor(iconName):'inherit'
})
   const getColor=(iconName)=>{
    switch(iconName){
      case 'linkedin':return 'orange';
      case 'github' :return 'orange';
      case 'twitter':return 'orange';
      default :return 'inherit';
    }
   }
   
  return (
    <nav className=" mb-20 flex items-center justify-between py-6 relative lg:mb-0 lg:pb-0">
    
     
    
        
        <div className="flex flex-shrink-0 items-center ">

   

</div>


    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    <a href="https://www.linkedin.com/in/syed-mohammad-abbas-rizvi-6a43b5246/" target="_blank" rel="noopener noreferrer"
  onMouseOver={()=>sethover('linkedin')}
    onMouseLeave={()=>sethover(null)}
    style={iconStyle('linkedin')}
    >
<FaLinkedin/>
 </a>  
 <a href="https://github.com/Abbas7120" target="_blank" rel="noopener noreferrer"
    onMouseOver={()=>sethover('github')}
    onMouseLeave={()=>sethover(null)}
    style={iconStyle('github')}>
    <FaGithub/>
    </a>

    <a href="https://x.com/Mohamma93634072" target="_blank" rel="noopener noreferrer"
    onMouseOver={()=>sethover('twitter')}
    onMouseLeave={()=>sethover(null)}
    style={iconStyle('twitter')}>
    <FaSquareXTwitter/>
    </a>
  
    </div>
   
    </nav>
  )
}

export default Navbar
