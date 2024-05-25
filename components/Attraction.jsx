'use client';
import AttractionCard from "./AttractionCard";

const Attraction = ({ attractions }) => {
    return (
        <section className='px-4 py-6'>
            <div className='container-xl lg:container m-auto px-4 py-6'>
                <h1 className='text-2xl mb-4'>Browse Attractions</h1>
                {attractions.length === 0 ? (
                    <p>No attractions found</p>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {attractions.map((attraction, index) => (
                            <AttractionCard attraction={attraction} key={index} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Attraction;