import cv from "../assets/icons/Icon.svg";
import Hire from "../assets/icons/HireMe.svg";

const Hero = () => {
  return (
    <section className="container mx-auto py-5 grid-col-6 ">
      <div className="col-span-2 pb-8">
        <img
          className="w-[184px] h-[184px] rounded-full inline-block"
          src="https://i.pinimg.com/originals/b8/1d/b9/b81db9c2a8924fe15cece1f9b5305e27.jpg "
          alt=""
        />
      </div>
      <div>
        <h1 className="font-bold text-[44px]">Alsaura Alifi Siddik</h1>
        <h2 className="font-bold text-xl text-[#565656] pb-[10px]">
          Junior Frontend Developer
        </h2>
        <div className="flex flex-col gap-[10px] pb-[282px] font-semibold text-[#]">
          <span>Made in Bima, grew up in Indonesia.</span>
          <span>Frontend Developer .</span>
          <span>Living in Jakarta, INA 🌁</span>
        </div>
      </div>
      <div className="flex gap-6">
        <button className="flex align-center justify-center gap-3 bg-blue-400 px-4 py-2 rounded-md font-normal text-white ">
          <img src={cv} alt="" />
          Download CV
        </button>
        <button className="font-normal px-4 py-2 flex justify-center items-center gap-3 text-[#565656]">
          Hire Me <img src={Hire} alt="" />
        </button>
      </div>

      <div className="col-span-4 "></div>
    </section>
  );
};

export default Hero;
