import React, { useState } from "react";

function Image() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  return (
    <div className="image-container">
      {!image && (
        <label htmlFor="imageInput" className="file-input-label">
          Choose File
        </label>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        id="imageInput"
        style={{ display: "none" }}
      />
      {image && (
        <div>
          <img src={URL.createObjectURL(image)} alt="" />
          <button className="remove-image-btn" onClick={handleRemoveImage}>
            &#10006; {/* Cross (×) HTML entity */}
          </button>
        </div>
      )}
    </div>
  );
}

export default Image;
