import image from "../assets/UCH_2072.jpg";
import icon from "../assets/react.svg";

function Introduction() {
  return(
    <div className = "grid grid-cols-1 gap-8">
      <div className = "flex justify-around gap-2 mt-10">
        <div className = "flex flex-col gap-4">
            <p>AVAILABLE FOR WORK</p>
            <p className = "text-[3rem] font-semibold leading-none">Hi, I'm a <br/> frontend <br/> web developer <span className = "text-[1rem]">&copy;</span> </p>
            <p>I have x years of work experience working on useful and mindful products</p>
            <button className = "bg-black text-white px-3 py-2 mt-5 w-fit rounded-2xl">Contact Me</button>
        </div>

        <div>
          <img src={image} alt="profile image" className = "w-70 rounded-2xl shadow-lg" />
        </div>
      </div>

      <div className = "bg-[#2E9FB1] text-white rounded-2xl p-7 shadow-lg">
        <p className = "text-[2rem] leading-tight">My mission is to assist startups and enterprises in creating interactive and responsive user interfaces, creating an emotional bond between your products and satisfied, engaged customers </p>
      </div>

      <div className = "flex gap-6 w-fit">
        <p className = "text-[2rem] font-semibold leading-none">How Can I Assist You? </p>

        <div className = "grid lg:grid-cols-2 md:grid-cols-1 md:space-y-3 grid-rows-1 space-x-4 w-fit">
          <div className = "bg-white p-4 rounded-2xl flex flex-col gap-7 w-fit shadow-sm">
            <div className = "flex gap-8">
              <img src={icon} alt="" className = "w-10" />
              <p className = "text-[0.8rem]" >We create intuitive, visually appealing interfaces that enhance user experience and navigation, ensuring your app is both beautiful and functional across all devices</p>
            </div>

            <div className = "flex justify-between">
              <p>UI design </p>
              <p> 01 </p>
            </div>
          </div>

          <div className = "bg-white p-4 rounded-2xl flex flex-col gap-7 w-fit shadow-sm">
            <div className = "flex gap-8">
              <img src={icon} alt="" className = "w-10" />
              <p className = "text-[0.8rem]" >We create intuitive, visually appealing interfaces that enhance user experience and navigation, ensuring your app is both beautiful and functional across all devices</p>
            </div>

            <div className = "flex justify-between">
              <p>UI design </p>
              <p> 01 </p>
            </div>
          </div>

      
          <div className = "bg-white p-4 rounded-2xl flex flex-col gap-7 w-fit shadow-sm">
            <div className = "flex gap-8">
              <img src={icon} alt="" className = "w-10" />
              <p className = "text-[0.8rem]" >We create intuitive, visually appealing interfaces that enhance user experience and navigation, ensuring your app is both beautiful and functional across all devices</p>
            </div>

            <div className = "flex justify-between">
              <p>UI design </p>
              <p> 01 </p>
            </div>
          </div>

      
          <div className = "bg-white p-4 rounded-2xl flex flex-col gap-7 h-fit shadow-sm">
            <div className = "flex gap-8">
              <img src={icon} alt="" className = "w-10" />
              <p className = "text-[0.8rem]" >We create intuitive, visually appealing interfaces that enhance user experience and navigation, ensuring your app is both beautiful and functional across all devices</p>
            </div>

            <div className = "flex justify-between">
              <p>UI design </p>
              <p> 01 </p>
            </div>
          </div>

      
        </div>
      </div>
    </div>
  )
}

export default Introduction