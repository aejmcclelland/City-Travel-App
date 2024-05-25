import connectDB from '@/config/database';
import { London, Belfast, Paris } from '@/models/Attractions';
import CldImage from '@/components/CldImage';
import { getPublicIdFromUrl } from '@/middleware/middleware';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

export const AttractionPage = async ({ params }) => {

    await connectDB();

    let attraction = null;
    const londonAttraction = await London.findOne({ _id: params.id }).lean();
    const belfastAttraction = await Belfast.findOne({ _id: params.id }).lean();
    const parisAttraction = await Paris.findOne({ _id: params.id }).lean();

    if (londonAttraction) {
        attraction = londonAttraction;
    } else if (belfastAttraction) {
        attraction = belfastAttraction;
    } else if (parisAttraction) {
        attraction = parisAttraction;
    }

    if (!attraction) {
        return (
            <h1 className='text-center text-2xl font-bold mt-10'>
                Attraction Not Found
            </h1>
        );
    }
    const publicId = getPublicIdFromUrl(attraction.imgUrl);
    const { place, category, description, address, opening_time, closing_time, adult_ticket, child_ticket } = attraction;
    return (
        <div className="p-4 max-w-lg mx-auto bg-white rounded-lg shadow-lg">
            <CldImage
                publicId={publicId}
                alt={place}
                width={400}
                height={300}
                className='w-full h-64 object-cover rounded-lg'
            />
            <h1 className="text-2xl font-bold mt-4">{place}</h1>
            <p className="text-gray-600 mt-2">{category}</p>
            <p className="mt-4">{description}</p>
            <p className="mt-4"><strong>Address:</strong> {address}</p>
            <p className="mt-2"><strong>Opening Time:</strong> {opening_time}</p>
            <p className="mt-2"><strong>Closing Time:</strong> {closing_time}</p>
            <p className="mt-2"><strong>Adult Ticket:</strong> £{adult_ticket}</p>
            <p className="mt-2"><strong>Child Ticket:</strong> £{child_ticket}</p>
            <section>
                <div className='container m-auto py-6 px-6'>
                    <Link
                        href='/map'
                        className='text-blue-500 hover:text-blue-600 flex items-center'
                    >
                        <FaArrowLeft className='mr-2' /> Back to Map
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default AttractionPage;