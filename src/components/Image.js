import React from 'react';


function Image({ imageSrc }) {
  return (
    <div>
      <img src={imageSrc} alt="blog logo" />

      
    <p> {blogData.about}  </p>

    </div>
  );
}

export default Image;