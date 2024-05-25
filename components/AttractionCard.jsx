'use client';
import Link from 'next/link'
import CldImage from './CldImage';
import { FaCoffee, FaLandmark } from 'react-icons/fa';

const AttractionCard = ({ attraction }) => {
    const formatTicketPrice = (price) => {
        if (price === 0) {
            return <span className="text-blue-500">Free</span>;
        } else {
            const pounds = Math.floor(price / 100);
            const pence = price % 100;
            const formattedPence = pence < 10 ? `0${pence}` : pence;
            return (
                <span className="text-red-500">
                    £{pounds}:{formattedPence}
                </span>
            );
        }
    };
    const publicId = attraction.imgUrl.split('/').slice(-2).join('/').split('.')[0];

    return (
        <div className='rounded-xl shadow-md relative'>
            <CldImage
                publicId={publicId}
                alt=''
                className='w-full h-auto object-cover rounded-t-xl'
            />
            <div className='p-4'>
                <div className='text-left md:text-center lg:text-left mb-6'>
                    <div className='text-gray-600'>{attraction.place}</div>
                    <h3 className='text-xl font-bold'>{attraction.category}</h3>
                </div>
                <h3 className='absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-red-500 font-bold text-right md:text-center lg:text-right'>
                    {formatTicketPrice(attraction.adult_ticket)}
                </h3>

                <div className='flex justify-left gap-4 text-gray-500 mb-4'>
                    <p>
                        <FaCoffee className='sm: inline md:inline lg:inline text-blue-600 mr-2' /> {attraction.cafe}
                        <span className='md:hidden lg:inline'> Cafe</span>
                    </p>

                </div>
                <div className='flex justify-left gap-4 text-gray-500 mb-4'>
                    <p>
                        <FaLandmark className='sm: inline md:inline lg:inline text-blue-600 lg:inline mr-2' /> {attraction.description}

                        <span className='lg:inline'> Description</span>
                    </p>
                </div>

            </div>
        </div>
    );
}

export default AttractionCard