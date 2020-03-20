import React from 'react';

const GifItem = (image) => {
  return (
    <div className="gif-item">
    {console.log(image)}
      <img key={image.gif.images.original.url} src={image.gif.images.original.url} onClick={()=>console.log(image.gif.images)}/>
    </div>
  )
};

export default GifItem;