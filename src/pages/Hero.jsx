import cv from "../assets/icons/Icon.svg";
import Hire from "../assets/icons/HireMe.svg";
import instagram from "../assets/images/image.png";

const Hero = () => {
  return (
    <section className="container mx-auto py-5 grid-col-6 ">
      <div className="flex gap-[300px]">
        <div className="col-span-2 pb-8">
          <img
            className="w-[184px] h-[184px] rounded-full inline-block"
            src="data:image/jpeg;base64,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 "
            alt=""
          />
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
        </div>

        <div className="col-span-4 space-x-10">
          <div className="relative inline-block  ">
            <img
              className="rounded-xl w-[390px] h-[390px]"
              src="https://blog-cdn.kitalulus.com/blog/wp-content/uploads/2024/02/20100525/6544a9174383b7d0c543e414_biaya-ke-labuan-bajo.webp"
              alt=""
            />
            <div className="absolute bottom-4 left-4 text-black text-base font-semibold rounded-3xl py-2 px-3 bg-white py-1">
              Labuan Bajo - Indonesia
            </div>
          </div>
          <div className="relative inline-block  ">
            <img
              className="rounded-xl w-[390px] h-[390px]"
              src="https://pict-a.sindonews.net/dyn/850/pena/news/2021/09/29/171/554358/7-tempat-wisata-di-pantai-indah-kapuk-yang-wow-banget-ixg.jpg"
              alt=""
            />
            <div className="absolute bottom-4 left-4 text-black text-base font-semibold rounded-3xl py-2 px-3 bg-white py-1">
              Pantai Indah Kapuk - Indonesia
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
