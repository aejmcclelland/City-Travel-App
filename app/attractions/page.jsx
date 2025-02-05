// Code: attractions page
import Attractions from '../../components/Attraction';
import { London, Belfast, Paris } from '../../models/Attractions';
import connectDB from '../../config/database';
import { convertToSerializeableObject } from '../../utils/convertToObject';

const AttractionsPage = async () => {
    await connectDB();
    const londonAttractionsDoc = await London.find().lean();
    const belfastAttractionsDoc = await Belfast.find().lean();
    const parisAttractionsDoc = await Paris.find().lean();

    const londonAttractions = convertToSerializeableObject(londonAttractionsDoc);
    const belfastAttractions = convertToSerializeableObject(belfastAttractionsDoc);
    const parisAttractions = convertToSerializeableObject(parisAttractionsDoc);

    const attractions = [...londonAttractions, ...belfastAttractions, ...parisAttractions];
    return (
        <>
            <section className='bg-red-700 py-4'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start'>

                </div>
            </section>
            <Attractions attractions={JSON.parse(JSON.stringify(attractions))} />
        </>
    )
}

export default AttractionsPage;


