// src/components/DiseasePrediction/DiseasePrediction.jsx
import React, { useState } from 'react';
import './DiseasePrediction.css';

const DiseasePrediction = () => {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState('');
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handlePrediction = async () => {
    setLoading(true);
    // Simulate an API call
    setTimeout(() => {
      setPrediction('Sorry Cannot Find the Disease');
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="disease-prediction">
      <h1>Upload an Image for Disease Recognition</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && (
        <div className="image-preview">
          <img src={image} alt="Uploaded" />
        </div>
      )}
      <button onClick={handlePrediction}>Predict Disease</button>
      {loading && <p>Loading...</p>}
      {prediction && <p>{prediction}</p>}
    </div>
  );
};

export default DiseasePrediction;
