'use client';

import 'mapbox-gl/dist/mapbox-gl.css';

import Map from 'react-map-gl';
import { NavigationControl, GeolocateControl, MapProvider } from 'react-map-gl/controls';
import { useState, useCallback } from 'react';
import POIMarkers from '../components/POIMarkers';
import AttractionPopUp from '../components/AttractionPopUp';

const CityMap = ({ attractions }) => {
    const [popupInfo, setPopupInfo] = useState(null);

    return (
        <MapProvider>
            <Map
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
                initialViewState={{
                    longitude: -0.1278,
                    latitude: 51.5074,
                    zoom: 11,
                }}
                style={{ width: '100%', height: 500 }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
            >
                <GeolocateControl position="top-left" />
                <NavigationControl position="top-left" />
                <POIMarkers attractions={attractions} />
                {popupInfo && <AttractionPopUp popupInfo={popupInfo} />}
            </Map>
        </MapProvider>
    );
};

export default CityMap;