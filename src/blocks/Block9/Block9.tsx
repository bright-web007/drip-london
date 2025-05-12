import Image from 'next/image';
import logoWhite from '@/assets/icons-svg/drip-icon-white.png';
import ReviewsCard from '@/components/ReviewsCard/ReviewsCard';

const Block9 = () => {
  return (
    <div className="bg-blau-600 relative h-[650px] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-between">
        <Image src={logoWhite} alt="logo" width={400} height={400} className="opacity-5 -ml-36" />
        <Image
          src={logoWhite}
          alt="logo"
          width={400}
          height={400}
          className="opacity-5 -mr-36 -mt-28"
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <ReviewsCard />
      </div>
    </div>
  );
};

export default Block9;
