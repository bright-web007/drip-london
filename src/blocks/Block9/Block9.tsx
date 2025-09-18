import Image from 'next/image';
import ReviewsCard from '@/components/ReviewsCard/ReviewsCard';

const Block9 = () => {
  return (
    <div className="bg-blau-600 relative h-[650px] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-between">
        <Image
          src="https://drip-london1.s3.eu-north-1.amazonaws.com/drip-icon-white.webp"
          alt="logo"
          width={400}
          height={400}
          className="opacity-5 -ml-36"
        />
        <Image
          src="https://drip-london1.s3.eu-north-1.amazonaws.com/drip-icon-white.webp"
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
