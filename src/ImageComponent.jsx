import React from 'react';

const ImageComponent = () => {
  const imagePath = `${process.env.PUBLIC_URL}/images/my-image.jpg`;
  return <img src={imagePath} alt="My Image" />;
};

export default ImageComponent;
