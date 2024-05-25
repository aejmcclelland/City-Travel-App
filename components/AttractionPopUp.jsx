// components/AttractionPopup.jsx
'use client';
import { Box, Typography, Button } from '@mui/material';
import CldImage from './CldImage';
import { getPublicIdFromUrl } from '../middleware/middleware';
import Link from 'next/link';
import { Popup } from 'react-map-gl';

const AttractionPopUp = ({ popupInfo, handleClosePopup }) => {
    const publicId = getPublicIdFromUrl(popupInfo.imgUrl);

    return (
        <Popup
            longitude={popupInfo.longitude}
            latitude={popupInfo.latitude}
            closeButton={true}
            closeOnClick={false}
            onClose={handleClosePopup}
            anchor='top'>
            <Box className="p-4 max-w-xs bg-white rounded-lg shadow-lg">
                <Box className="relative w-full h-32 mb-2">
                    {popupInfo.imgUrl && (
                        <CldImage
                            publicId={publicId}
                            alt={popupInfo.place}
                            width={400}
                            height={300}
                            className='w-full h-auto object-cover rounded-t-xl'
                        />
                    )}
                </Box>
                <Typography variant="h6" className="font-semibold">{popupInfo.place}</Typography>
                <Typography variant="body2" className="text-gray-600">{popupInfo.category}</Typography>
                <Link href={`/attractions/${popupInfo._id}`}>
                    <Button variant="contained" color="primary" className="mt-2">
                        More Info
                    </Button>
                </Link>
            </Box>
        </Popup>
    );
};

export default AttractionPopUp;