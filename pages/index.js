import HeroSection from "../components/HeroSection"
import Staticbar from "../components/Staticbar"
import BlogPost from "../components/BlogPost"

const Home = ()=>{
   
   return(
   <div className="home_container"> 
      <HeroSection/> 
      
      <div className="flex p-2 flex-col lg:flex-row mt-9">
        <h1 className="text-5xl lg:w-5/12 "> 
          Healthy in side fresh out side
        </h1>
        <p className="lg:w-5/12 pl-1 flex-wrap mt-2 text-xs text-gray-600">
          Exercise is very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at the home we still have to be diligent in exercising, either alone or with your friends at home.Healthy life makes you more excited to live the day.
        </p>
      </div>{/*---- end static content ----*/}
      
      <Staticbar/> 
      
      <BlogPost/>
      
      <div className="w-full p-5"/>
    </div>
   )
}

export default Home