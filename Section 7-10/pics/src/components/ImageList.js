import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';
/*This was my original method of displaying images, notice it has a hardcoded map function. This
is bad */
// const ImageList = props => {
//   return (
//     <div>
//       {props.images.map(image => {
//         return <img alt="car" src={image.urls.regular} />;
//       })}
//     </div>
//   );
// };

const ImageList = props => {
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
