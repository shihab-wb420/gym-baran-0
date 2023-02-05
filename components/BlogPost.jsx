import Link from "next/link"
import {blobEgg} from "../utils/constants"

const BlogPost = ()=>{
  
  return(
     <div className="w-full ">
        <div className="flex flex-col-reverse lg:flex-row">
          {/*------blog thumbnail start here----*/}
          <div className="lg:w-2/5 relative my-2 w-full h-96">
             <img className=" absolute right-5 bottom-5 w-60 h-60" src="./images/Ellipse 137.png" alt=""/> {/*-- background vector1 blob */}
             <div className=" absolute right-16 bottom-0 w-60 h-60">
               {blobEgg}
             </div> {/*-- background vector2 blob */}
             <div className="absolute w-80 right-0 bottom-0 h-full ">
               <img className="w-64 h-80 absolute bottom-4 right-9" src="./images/image 78.jpg" alt=""/>{/* thumbnail img*/}
             
                <div 
                 style={{ background: "linear-gradient(35.49deg, #DD69C7 15.2%, #FFC0F3 87.25%)",}}
                 className="p-2 w-8 h-8 absolute rounded-3xl mt-14 ml-12 text-white">
                    <img src="./images/svg-icons/Group.svg"/>
                </div> {/*end top icon*/}
                
                <div 
                 style={{ background: "linear-gradient(50.31deg, #4BACE1 15.91%, #D8F1FF 92.82%)", }}
                  className="w-8 h-8  absolute right-0 rounded-3xl bottom-36 text-white">
                     <img className="p-1" src="./images/svg-icons/handExercise.svg"/>
                </div> {/*end middle icon*/}
                
                <div className="py-1 pl-2 pr-3 absolute bottom-11 ml-2 rounded-md shadow-xl bg-white rounded-md flex items-center">
                   <div 
                    style={{ background: "linear-gradient(45.98deg, #5478EF 19.69%, #D6DFFF 92.63%)", }}
                    className=" p-1 w-8 h-8 text-xs rounded-3xl">
                      <img src="./images/svg-icons/crucified-pose.svg"/>
                   </div> {/*---icon-*/}
                   <div className="ml-1">
                     <h1 className="font-bold text-xs"> 800 kall</h1>
                     <p className="text-xs text-gray-500"> burn foot </p>
                   </div>
                </div>{/*end bottom icon container*/}
                
             </div>
          </div> {/*----blog thumbnail end here---👆*/}
        
          {/*-----blog content start here👇 -----*/}
          <div className="h-auto px-2 lg:ml-14 lg:mt-12 lg:w-3/5">
             <h1 className="my-2 text-4xl lg:text-6xl"> Best full body workout to lose fat 
             </h1>
             <p className="text-xs text-gray-500 pl-1">
               Exercise is very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at the home we still have to be diligent in exercising, either alone or with your friends at home.Healthy life makes you more excited to live the day.
             </p>
             <button className="mt-4">
               <Link className="button flex items-center py-2 px-3 rounded-md" href={`blog/id`}>
                  <span className="mr-6"> Get Started </span>
                  <span>
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </span>
               </Link>
             </button>
          </div>
        </div>
     </div>
    )
}

export default BlogPost