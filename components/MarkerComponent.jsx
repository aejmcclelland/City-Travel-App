"use client";
import { Marker } from 'react-map-gl';
import { FaMapMarkerAlt } from 'react-icons/fa';

export const MarkerComponent = ({ attraction, onClick }) => {
    return (
        <Marker
            longitude={attraction.longitude}
            latitude={attraction.latitude}
            onClick={() => onClick(attraction)}
        >
            <FaMapMarkerAlt size={24} color="red" />
        </Marker>
    )
}
export default MarkerComponent;