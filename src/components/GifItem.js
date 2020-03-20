import React from 'react';

const GifItem = (image) => {
  return (
    <div className="gif-item">
      <img  src={image.gif.images.original.url} alt="test"/>
    </div>
  )
};

export default GifItem;