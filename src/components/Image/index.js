
import React from 'react';

const Image = ({
                   src,
                   alt,
                   width,
                   height,
                   className,
                   ...restProps
               }) => (
    <img
        style={{ width, height}}
        className={className}
        src={src}
        alt={alt}
        { ...restProps}
    />
);

export default Image;