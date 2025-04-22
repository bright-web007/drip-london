import Image from 'next/image';
import peopleEating from '@/assets/people-eating.jpeg';
import peopleSnapping from '@/assets/people-snapping.jpeg';
import snaps from '@/assets/snaps.jpeg';
import CurvyUnderline from '@/assets/icons-svg/CurvyUnderline';

const Block3 = () => {
  return (
    <div className="bg-blau-600 py-16 xl:py-20">
      <div className="flex items-center flex-col-reverse md:flex-row w-[90%] mx-auto">
        <div className="border-5 border-white w-full md:w-[50%] xl:w-[40%] group overflow-hidden">
          <Image
            src={peopleEating}
            alt="People eating"
            className="w-full h-[380px] md:h-[315px] xl:h-[450px] object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
            width={400}
            height={400}
          />
        </div>
        <div className="text-white w-full md:w-[40%] mb-12 md:mb-0 md:ml-8">
          <CurvyUnderline />
          <h1 className="text-2xl leading-12 font-semibold mt-10 mb-6 font-thankslabs">
            Make Memories at DRIP LONDON
          </h1>
          <p className="text-sm leading-6 font-normal">
            A Sharing Concept West African Menu focused on local, seasonal and sustainable
            produce – energetic atmosphere and redefining the club culture offering a unique
            inclusive dining experience in a stylish atmosphere, whilst capturing the essence of
            African culture. 
          </p>

          <p className="text-sm leading-6 font-normal mt-6 mb-10">
            The ultimate Dinner Club experience, a premier dining destination that combines classic
            dining in a stylish venue with live DJ sets, fire dancers and musical performances.
          </p>
          <CurvyUnderline />
        </div>
      </div>
      <div className="flex items-center flex-col md:flex-row w-[90%] md:w-[80%] mx-auto my-5 md:my-40">
        <div className="border-5 border-white w-full md:w-[60%] h-[380px] md:h-[315px] xl:h-[450px] group overflow-hidden rotate-0  md:rotate-340">
          <Image
            src={peopleSnapping}
            alt="People snapping"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
            width={350}
            height={350}
          />
        </div>

        <div className="border-5 border-white w-full md:w-[35%] h-[380px] md:h-[315px] xl:h-[450px] group overflow-hidden rotate-0 md:rotate-22 mt-5 md:mt-0">
          <Image
            src={snaps}
            alt="snaps"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
            width={280}
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default Block3;
