'use client';

import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { NavigationControl, GeolocateControl, Popup } from 'react-map-gl';
import POIMarkers from './POIMarkers';
import { useState, useCallback } from 'react';
import CldImage from './CldImage';

const CityMap = ({ attractions }) => {
    const [popupInfo, setPopupInfo] = useState(null);

    const handleMarkerClick = useCallback((attraction) => {
        setPopupInfo(attraction); // Ensure attraction includes imgUrl and other required fields
    }, []);


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
            mapStyle='mapbox://styles/mapbox/streets-v9'>
            <GeolocateControl position='top-left' />
            <NavigationControl position='top-left' />
            <POIMarkers attractions={attractions} onMarkerClick={handleMarkerClick} />
            {popupInfo && (
                <Popup
                    longitude={popupInfo.longitude}
                    latitude={popupInfo.latitude}
                    closeButton={true}
                    closeOnClick={false}
                    onClose={handleClosePopup}
                    anchor='top'>
                    <div className="p-4 max-w-xs bg-white rounded-lg shadow-lg">
                        <div className="relative w-full h-32 mb-2">
                            {popupInfo.imgUrl && (
                                <>
                                    {console.log("Popup Info imgUrl:", popupInfo.imgUrl)}
                                    <CldImage
                                        publicId={popupInfo.imgUrl.split('/').slice(-2).join('/').split('.')[0]}
                                        alt={popupInfo.place}
                                        width={400}
                                        height={300}
                                        className='w-full h-auto object-cover rounded-t-xl'
                                    />
                                </>
                            )}
                        </div>
                        <h3 className="text-lg font-semibold">{popupInfo.place}</h3>
                        <p className="text-sm text-gray-600">{popupInfo.category}</p>
                    </div>
                </Popup>
            )}
        </Map>
    );
};

export default CityMap;