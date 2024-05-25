'use client';

import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { NavigationControl, GeolocateControl, useMap } from 'react-map-gl';
import POIMarkers from './POIMarkers';
import AttractionPopUp from './AttractionPopUp';
import { useState, useCallback } from 'react';

const CityMap = ({ attractions }) => {
    const [popupInfo, setPopupInfo] = useState(null);
    const mapRef = useMap(); //hook to access map instance

    const handleMarkerClick = useCallback((attraction) => {
        setPopupInfo(attraction);

        // Calculate the offset for the map center
        const offsetLng = 0.00;  // Adjust this value as needed
        const offsetLat = -0.004;  // Adjust this value as needed


        mapRef.current.flyTo({
            center: [attraction.longitude + offsetLng, attraction.latitude + offsetLat],
            essential: true,
            zoom: 13,  // Adjust zoom level as needed
        });
    }, [mapRef]);


    const handleClosePopup = useCallback(() => {
        setPopupInfo(null);
    }, []);

    return (
        <Map
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
            initialViewState={{
                longitude: -0.1278,
                latitude: 51.5074,
                zoom: 11,
            }}
            style={{ width: '100%', height: 500 }}
            mapStyle='mapbox://styles/mapbox/streets-v9'
            ref={mapRef}
        >

            <GeolocateControl position='top-left' />
            <NavigationControl position='top-left' />
            <POIMarkers attractions={attractions} onMarkerClick={handleMarkerClick} />
            {popupInfo && (
                <AttractionPopUp popupInfo={popupInfo} handleClosePopup={handleClosePopup} />
            )}
        </Map>
    );
};

export default CityMap;