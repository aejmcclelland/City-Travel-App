
import React from 'react'
import { Image, Transformation } from 'cloudinary-react';

const CldImage = ({ publicId, width, height, alt, className }) => {
    return (
        <Image
            cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
            publicId={publicId}
            alt={alt || ''}
            width={width}
            height={height}
            className={className}
        >
            <Transformation crop="fill" />
            <Transformation radius="10:10:0:0" />
        </Image>
    );
};


export default CldImage