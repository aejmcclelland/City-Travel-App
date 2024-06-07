import CityMap from '@/components/CityMap';
import connectDB from '@/config/database';
import { London, Belfast, Paris } from '@/models/Attractions';


export const MapPage = async () => {
  await connectDB();

  const londonAttractions = await London.find({}, 'name geometry category place imgUrl').lean();
  const belfastAttractions = await Belfast.find({}, 'name geometry category place imgUrl').lean();
  const parisAttractions = await Paris.find({}, 'name geometry category place imgUrl').lean();

  const attractions = [...londonAttractions, ...belfastAttractions, ...parisAttractions].map(attraction => ({
    ...attraction,
    longitude: attraction.geometry.coordinates[0],
    latitude: attraction.geometry.coordinates[1],
  }));

  return (
    <>
      <CityMap attractions={JSON.parse(JSON.stringify(attractions))} />
    </>
  );
};

export default MapPage;
