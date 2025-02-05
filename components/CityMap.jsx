'use client';

import 'mapbox-gl/dist/mapbox-gl.css';

import 'mapbox-gl/dist/mapbox-gl.css';
import MapGL from 'react-map-gl/mapbox'; // ✅ Correct import for Mapbox
import { NavigationControl, GeolocateControl, MapProvider } from 'react-map-gl';
import POIMarkers from '../components/POIMarkers';
import AttractionPopUp from '../components/AttractionPopUp';
import { useState, useCallback } from 'react';

const CityMap = ({ attractions }) => {
    const [popupInfo, setPopupInfo] = useState(null);

    return (
        <MapProvider>
            <MapGL
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
                initialViewState={{
                    longitude: -0.1278,
                    latitude: 51.5074,
                    zoom: 11,
                }}
                style={{ width: '100%', height: 500 }}
                mapStyle='mapbox://styles/mapbox/streets-v9'
            >
                <GeolocateControl position='top-left' />
                <NavigationControl position='top-left' />
                <POIMarkers attractions={attractions} />
                {popupInfo && <AttractionPopUp popupInfo={popupInfo} />}
            </MapGL>
        </MapProvider>
    );
};

export default CityMap;