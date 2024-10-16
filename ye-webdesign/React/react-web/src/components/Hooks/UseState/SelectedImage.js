import React, { useState } from "react";
import "./style.css";
const images = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/28047908/pexels-photo-28047908/free-photo-of-a-person-taking-a-photo-of-the-ocean-with-a-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/28102083/pexels-photo-28102083/free-photo-of-a-small-harbor-with-boats-docked-in-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/28283862/pexels-photo-28283862/free-photo-of-a-mountain-lake-with-clouds-and-fog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];
function SelectedImage() {
  const [selectedImage, setSelectedImage] = useState(images[0].img);

  const handleClick = (image) => {
    setSelectedImage(image);
  };
  return (
    <>
      <img
        src={selectedImage}
        style={{ width: 300, height: 300, objectFit: "cover" }}
        alt=""
      />
      <div className="thumbnails">
        {images?.length > 0 &&
          images.map((image, index) => {
            return (
              <React.Fragment key={image.id}>
                <img
                  onClick={() => handleClick(image.img)}
                  src={image.img}
                  alt="img"
                />
              </React.Fragment>
            );
          })}
      </div>
    </>
  );
}

export default SelectedImage;
