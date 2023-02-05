import Link from "next/link"
import {useState } from "react"
import {navLinks,menuBarIcon} from "../utils/constants"

const Navbar = ()=>{
  const [isMenu,setIsMenu] = useState(false)
  
  return(
     <div className="relative navbar_container md:bg-transparent px-3 py-4 flex justify-between items-center">
       <div className="logo_container ">
         <Link href={"/"} className="text-lg">
           <span 
            className=" bg-indigo-500 px-2 py-1  text-white font-bold rounded-md">
             Gym
            </span> 
            <span className="text-indigo-700"> baran </span>
         </Link>
       </div>
       {/*nav menu start here 👇*/}
       <div className={` flex flex-col lg:flex-row lg:relative lg:block lg:p-0 mr-4 lg:mr-4 lg:mt-0 lg:bg-transparent mobile-menu ${isMenu === false ? "hidden" : "block"}` }>
          {
           navLinks && navLinks.map((item,idx)=>(
           <Link className="menuItem my-1 lg:my-0 mx-4 " key={idx} href={item?.path}>{item?.name}</Link>
           ))
          }
         <button className="mt-3 lg:mt-0 lg:ml-2"> 
           <Link className="button px-4 py-2 lg:px-6 lg:py-3 rounded-lg" href="#login"> 
             Login 
           </Link>
         </button>
       </div>
       {/*menue icon for mobile device 👇*/}
       <div onClick={()=>setIsMenu(prev=> !prev )} className="menuBarIcon w-10 block lg:hidden">
         {menuBarIcon}
       </div>
       
     </div>
    )
}

export default Navbar