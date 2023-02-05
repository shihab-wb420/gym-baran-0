import Link from "next/link"

const Staticbar = ()=>{
  
  
 return(
  <div 
    style={{background: "linear-gradient(87.05deg, #6462F0 0%, #9190E9 95.5%)",}}
    className="w-11/12 mx-auto lg:w-11/12  my-16  p-6 text-white rounded-xl flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-center">
    {
     staticData?.map((item)=>{
        const {id,title,iconPath} = item;
       return(
        <div className="flex p-3 ">
          <div className="flex items-center py-3 px-5 mr-2 bg-white bg-opacity-30 rounded-xl text-white w-20 h-20"> 
             <img src={`./images/${iconPath}`} alt={""}/>
          </div>
          <div className="w-28 mx-3"> 
            <h1 className="font-bold text-white"> {title} </h1>
            <Link href={`#tips/${id}`} className="text-xs flex items-center text-gray-300 mt-1">
              <span className="flex-1"> Learn more </span>
              <span className="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                   <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
        )
       })
      }
     
    </div>
  )
}

export default Staticbar 


export const staticData = [
     {
       id:1, 
       title:"Get that 11 line in 30 days ",
       iconPath:"svg-icons/crucified-pose.svg",
     },
     {
       id:2,
       title:"14 Days shared challenge",
       iconPath:"svg-icons/dancer-balance-posture-on-one-leg.svg",
     },
      {
       id:3,
       title:"Get flat belly in 30 days",
       iconPath:"svg-icons/Group.svg",
     }
     
    ]