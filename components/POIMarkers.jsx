"use client";
import { useEffect } from 'react';
import MarkerComponent from './MarkerComponent';

const POIMarkers = ({ attractions, onMarkerClick }) => {
    useEffect(() => {
    }, [attractions]);

    return (
        <>
            {Array.isArray(attractions) && attractions.map((attraction) => (
                <MarkerComponent
                    key={attraction._id}
                    attraction={attraction}
                    onClick={onMarkerClick}
                />
            ))}
        </>
    );
};

export default POIMarkers;
