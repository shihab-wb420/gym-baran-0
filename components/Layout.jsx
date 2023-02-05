import Navbar from "./Navbar"

const Layout = ({children})=>{
  
  return(
    <div  className=" border border-red-500">
      <div id="body_bg"/>
      <div className="lg:p-5 max-w-screen-sm lg:max-w-screen-2xl  mx-auto">
        <Navbar/>
        <div className="p-2 pb-10 ">
          {children}
        </div>
      </div>
    </div>
    )
}

export default Layout