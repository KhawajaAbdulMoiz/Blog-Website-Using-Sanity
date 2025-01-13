import Image from 'next/image';
import Link from 'next/link';

const Card = ({ image, category, title, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 font-Raleway">
      <Image 
        src={image} 
        alt={title}
        className="w-full h-50 object-cover"
        width={500}
        height={300}
      />
      <div className="px-6 py-4">
        <div className="text-gray-600 text-xs uppercase font-semibold mb-2">{category}</div>
        <h2 className="font-bold text-lg mb-2">{title}</h2>
        <p className="text-gray-700 text-base mb-4">{description.slice(0 , 105)}...</p>
        <Link href="#">
          <button className='text-customPurple hover:-translate-y-0.5 transition duration-500 ease-in-out'>Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
