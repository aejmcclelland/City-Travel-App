import connectDB from '@/config/database';
import { convertToSerializeableObject } from '@/utils/convertToSerializeableObject';
import { London, Belfast, Paris } from '@/models/Attractions';
import CldImage from './CldImage';


export const AttractionPage = async ({ params }) => {

    await connectDB();
    const attractionDoc = await London.findById(params.id).lean() || await Belfast.findById(params.id).lean() || await Paris.findById(params.id).lean();

    const attraction = convertToSerializeableObject(attractionDoc);
    if (!attraction) {
        return (
            <h1 className='text-center text-2xl font-bold mt-10'>
                Attraction Not Found
            </h1>
        );
    }
    return (
        <div className="p-4 max-w-lg mx-auto bg-white rounded-lg shadow-lg">
            <CldImage
                publicId={publicId}
                alt={popupInfo.place}
                width={400}
                height={300}
                className='w-full h-auto object-cover rounded-t-xl'
            />
            <img src={attraction.imgUrl} alt={attraction.place} className="w-full h-64 object-cover rounded-lg" />
            <h1 className="text-2xl font-bold mt-4">{attraction.place}</h1>
            <p className="text-gray-600 mt-2">{attraction.category}</p>
            <p className="mt-4">{attraction.description}</p>
            <p className="mt-4"><strong>Address:</strong> {attraction.address}</p>
            <p className="mt-2"><strong>Opening Time:</strong> {attraction.opening_time}</p>
            <p className="mt-2"><strong>Closing Time:</strong> {attraction.closing_time}</p>
            <p className="mt-2"><strong>Adult Ticket:</strong> ${attraction.adult_ticket}</p>
            <p className="mt-2"><strong>Child Ticket:</strong> ${attraction.child_ticket}</p>
            {/* Add more fields as needed */}
        </div>
    );
};

export default AttractionPage;