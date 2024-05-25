// components/AttractionPopup.jsx
import { Box, Typography, Button } from '@mui/material';
import CldImage from './CldImage';
import { Popup } from 'react-map-gl';

const AttractionPopUp = ({ popupInfo, handleClosePopup }) => {
    const publicId = popupInfo.imgUrl.split('/').slice(-2).join('/').split('.')[0];

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
                <Button variant="contained" color="primary" className="mt-2">
                    More Info
                </Button>
            </Box>
        </Popup>
    );
};

export default AttractionPopUp;