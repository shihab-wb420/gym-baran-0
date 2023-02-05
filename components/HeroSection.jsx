import Link from "next/link"
import {arrowRightCircle,playCircle, } from "../utils/constants"



const HeroSection = ()=>{
  
  return(
     <div className="hero_container px-2 py-3  flex flex-col lg:flex-row items-center"> 
       {/*left side start here 👇*/}
        <div className="">
          <h1 className="text-5xl py-2 pr-3"> 
            Healthy in side <span className="text-indigo-700">fresh</span> out side
          </h1>
          <p className="text-xs pl-1 mt-3 w-4/5 text-gray-500"> 
            Exercise is very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.
          </p>
          <div className="my-4 mv-5 flex gap-6">
            <button className="">
              <Link className="flex items-center button p-2 pr-3 rounded-md" href={"#get-started"}>
               Get started 
               <span className="bg-white rounded-3xl ml-3 ">{arrowRightCircle}</span>
              </Link>
            </button>
            <button className="">
              <Link className="flex items-center p-2 rounded-md bg-white shadow-md " href={"#learn-more"}> 
                 <span className="mr-1"> 
                  {playCircle}
                 </span>
                 Learn more 
              </Link>
            </button>
          </div>
          <div className="mb-5 mt-6 md:mb-0"> 
            <h4 className="text-sm">Brands:</h4>
            <div className="flex gap-2 flex-wrap"> 
               {
                 brandsIcon?.map((item,idx)=>{
                   return(
                    <img key={idx} style={{marginLeft:"-0.8em"}} className="w-20" src={item} alt="brands"/>
                   )
                 })
               }
            </div>
          </div>
        </div>
       {/*Right side start here 👇*/}
       <div className="mt-8 lg:mt-0 relative w-full lg:w-4/6 h-80">
           <div className="relative h-full w-full ">
           
             <img className="blobCircle1 right-7 bottom-0 absolute w-64 h-64 " src="./images/Ellipse 137.png" alt=""/>
             <img className="blobWave1 right-7 bottom-0 absolute w-70 h-52 " src="./images/Vector 32.svg" alt=""/>
             
             <div className="right-0 bottom-0 absolute w-96 h-80">
                <img className="trainerImg absolute right-10 h-full w-52 " src="./images/image 77.png" alt=""/>
                {/* trainer_image top icons 👇*/}
                <div className="flex absolute w-full mt-12 justify-between items-center">
                  <div className="ml-10 py-2 pl-3 pr-5 rounded-md flex bg-white shadow-xl justify-center items-center gap-2"> 
                     <div 
                      style={{ background: "linear-gradient(45deg, #F8A422 13.75%, #FEDEAC 92.08%)",}}
                      className="text-white w-8 h-8 p-2 rounded-3xl"> 
                        <img src="./images/svg-icons/Group.svg"/>
                     </div>
                     <div className="">
                       <h2 className="font-bold"> 150+</h2>
                       <p className=" text-xs text-gray-500">Members</p>
                     </div>
                  </div>
                  <div 
                   style={{ background: "linear-gradient(50.31deg, #4BACE1 15.91%, #D8F1FF 92.82%)", }}
                   className="rounded-3xl text-xs w-8 h-8 text-white p-1 absolute right-3">
                       <img src="./images/svg-icons/handExercise.svg"/>
                  </div>
                </div> {/*---end top icon-----*/}
                
                {/* trainer_image bottom icons 👇*/}
                <div className="absolute flex bottom-3 w-full p-1 justify-between ">
                  <div 
                    style={{ background: "linear-gradient(45.98deg, #5478EF 19.69%, #D6DFFF 92.63%)", }}
                    className="flex items-center ml-12 w-9 h-9 text-white rounded-3xl shadow-xl p-1">
                       <img src="./images/svg-icons/bookDown-2.svg"/>
                   </div>
                  <div className="bg-white rounded-md shadow-xl py-2 px-2 flex flex-col items-center">
                     <div 
                       style={{background:"hsla(241, 82%, 67%, 1)",}}
                       className="text-xs text-white w-8 h-8 p-2 rounded-3xl"> 
                        
                     </div>
                     <h2 className="font-bold text-xs">Zaqky Simorang</h2>
                     <p className="text-xs text-gray-500"> Trainer </p>
                  </div>
                </div> {/*--end bottom icon---*/}
             </div>
             
            
         </div>
       </div>
     </div>
    )
}

export default HeroSection



/*brands icon*/
export const brandsIcon = [
   "https://res.cloudinary.com/dfjpxzcgf/image/upload/v1675466403/Brands/maskGroup-removebg-preview_ev9iad.png",
   
   "https://res.cloudinary.com/dfjpxzcgf/image/upload/v1675466403/Brands/adidas-removebg-preview_e70jbq.png",
   
   "https://res.cloudinary.com/dfjpxzcgf/image/upload/v1675466403/Brands/puma-removebg-preview_io8ltz.png",
   
    "https://res.cloudinary.com/dfjpxzcgf/image/upload/v1675466403/Brands/rebook-removebg-preview_cy5rcd.png",
   
  ]