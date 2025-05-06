import Image from 'next/image';
import memories1 from '@/assets/memories1.jpg';
import memories2 from '@/assets/memories2.jpg';
import memories3 from '@/assets/memories3.jpg';
import CurvyUnderline from '@/assets/icons-svg/CurvyUnderline';
import logoWhite from '@/assets/icons-svg/drip-icon-white.png';

const Block3 = () => {
  return (
    <div className="bg-blau-600 py-16 xl:py-20 relative">
      <div className="absolute inset-0 flex justify-end -mr-[20%]">
        <Image
          src={logoWhite}
          alt="logo"
          width={400}
          height={400}
          className="opacity-5 -ml-36 w-[750px] h-[1200px]"
        />
      </div>
      <div className="flex items-center flex-col-reverse md:flex-row w-[90%] xl:w-[85%] 2xl:w-[75%] mx-auto">
        <div className="w-full md:w-[50%] xl:w-[40%] my-10 md:my-0">
          <div className="bg-white hidden md:block w-[150px] h-[60px] opacity-13 rotate-330 -ml-12" />
          <div className="border-5 border-white group overflow-hidden -mt-12">
            <Image
              src={memories1}
              alt="People eating"
              className="w-full h-[380px] md:h-[315px] xl:h-[450px] object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="text-white w-full md:w-[40%] mb-12 md:mb-0 md:ml-8">
          <CurvyUnderline />
          <h1 className="text-2xl leading-12 font-semibold mt-10 mb-6 font-thankslabs">
            Make Memories at DRIP LONDON
          </h1>
          <p className="text-sm leading-6 font-normal font-monserrat">
            A Sharing Concept West African Menu focused on local, seasonal and sustainable
            produce – energetic atmosphere and redefining the club culture offering a unique
            inclusive dining experience in a stylish atmosphere, whilst capturing the essence of
            African culture. 
          </p>

          <p className="text-sm leading-6 font-normal mt-6 mb-10 font-monserrat">
            The ultimate Dinner Club experience, a premier dining destination that combines classic
            dining in a stylish venue with live DJ sets, fire dancers and musical performances.
          </p>
          <CurvyUnderline />
        </div>
      </div>
      <div className="flex items-center flex-col md:flex-row w-[90%] md:w-[75%] 2xl:w-[65%] mx-auto my-5 md:my-25 xl:my-40">
        <div className="w-full md:w-[60%]  rotate-0  md:rotate-340  mt-15 mb-5 md:mt-0 md:mb-0">
          <div className="bg-white hidden md:block w-[150px] h-[60px] opacity-13 z-10 rotate-140 mb-12 -ml-14" />
          <div className="border-5 border-white h-[380px] md:h-[315px] -mt-26  xl:h-[450px] group overflow-hidden">
            <Image
              src={memories2}
              alt="People snapping"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
              width={350}
              height={350}
            />
          </div>
        </div>
        <div className="w-full md:w-[40%] rotate-0 md:rotate-22">
          <div className="bg-white hidden md:block w-[150px] h-[60px] opacity-13 z-10 rotate-140 -mb-12 -ml-14" />
          <div className="border-5 border-white h-[380px] md:h-[315px] xl:h-[450px] group overflow-hidden">
            <Image
              src={memories3}
              alt="snaps"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
              width={280}
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block3;
