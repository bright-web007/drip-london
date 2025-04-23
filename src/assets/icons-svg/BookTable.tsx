import Image from 'next/image';
import bookTable from './book-table.svg';

const BookTable = () => {
  return (
    <div className="relative w-48 h-48 flex items-center justify-center -mb-13 -mr-13">
      <svg viewBox="0 0 200 200" className="absolute w-full h-full animate-spin-slow">
        <defs>
          <path
            id="circlePath"
            d="
              M 100,100
              m -40,0
              a 40,40 0 1,1 80,0
              a 40,40 0 1,1 -80,0
            "
          />
        </defs>
        <text
          fill="white"
          fontSize="9"
          letterSpacing="1"
          className="uppercase font-monserrat font-bold text-[10px]"
        >
          <textPath href="#circlePath" startOffset="0%">
            Quckly call us for booking a table
          </textPath>
        </text>
      </svg>

      <Image src={bookTable} alt="Book Table" width={60} height={60} className="z-10" />
    </div>
  );
};

export default BookTable;
