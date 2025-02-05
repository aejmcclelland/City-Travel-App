
import connectDB from '../../../config/database';
import { London, Belfast, Paris } from '../../../models/Attractions';
import CldImage from '../../../components/CldImage';
import { getPublicIdFromUrl } from '../../../middleware/middleware';
import BackLink from '../../../components/BackLink';
import { formatTime, formatTimeRange, getTimeStatus } from '../../../utils/timeUtils';

const formatPrice = (priceInPence) => {
    return (priceInPence / 100).toFixed(2);
};

export const AttractionPage = async ({ params }) => {

    await connectDB();

    let attraction = null;
    const londonAttraction = await London.findOne({ _id: params.id }).lean({ virtuals: true });
    const belfastAttraction = await Belfast.findOne({ _id: params.id }).lean({ virtuals: true });
    const parisAttraction = await Paris.findOne({ _id: params.id }).lean({ virtuals: true });

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

    const timeRange = formatTimeRange(opening_time, closing_time);
    const closingStatus = getTimeStatus(closing_time);


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
            <p className="mt-2"><strong>Opening Hours:</strong> {timeRange}</p>
            {closingStatus && <p className="mt-2 text-red-500">{closingStatus}</p>}
            <p className="mt-2"><strong>Adult Ticket:</strong> {adult_ticket === 0 ? 'Free Entry' : `£${formatPrice(adult_ticket)}`}</p>
            <p className="mt-2"><strong>Child Ticket:</strong> {child_ticket === 0 ? 'Free Entry' : `£${formatPrice(child_ticket)}`}</p>
            <BackLink defaultBackPath="/attractions" />
        </div>
    );
};

export default AttractionPage;