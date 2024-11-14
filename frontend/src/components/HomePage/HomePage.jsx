// src/components/Home/Home.jsx
import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home">
      <h1>Welcome to the Plant Disease Recognition System! 🌿🔍</h1>
      <p>
        Agriculture is the backbone of the world’s food supply, and healthy plants are essential for a stable and sustainable food source. However, plants are constantly at risk from diseases that can significantly reduce crop yields, destroy valuable plants, and lead to food insecurity.
      </p>
      <p>
        The Plant Disease Recognition System was created to provide farmers, researchers, and agricultural enthusiasts with a powerful tool to quickly and accurately detect plant diseases using advanced image recognition technology. By uploading an image of a plant, our system analyzes the image and provides valuable insights into its health. This system will help you take action before the diseases spread and negatively impact your crops.
      </p>
      
      <h2>Why Plant Disease Detection Matters</h2>
      <p>
        Detecting plant diseases early is critical to preventing widespread damage. Left unchecked, diseases can cause significant economic losses in agriculture. The earlier a disease is detected, the more effective and efficient the treatment can be. Our system leverages the power of AI to offer a fast, reliable, and user-friendly solution for early disease detection.
      </p>
      
      <h3>The Key Benefits of Using Our Plant Disease Recognition System:</h3>
      <ul>
        <li><strong>Quick and Accurate Disease Diagnosis:</strong> With just a simple image upload, our system uses advanced machine learning algorithms to accurately identify plant diseases, reducing the time and effort needed for manual diagnosis.</li>
        <li><strong>Prevent Economic Losses:</strong> Early detection helps to avoid crop loss by enabling farmers to take prompt action, such as applying targeted treatments or isolating infected plants.</li>
        <li><strong>Improve Crop Yields:</strong> By identifying plant diseases early, the system allows farmers to protect their crops and improve overall yield quality and quantity.</li>
        <li><strong>User-Friendly Interface:</strong> Our system is designed to be accessible to everyone, regardless of their tech skills. It’s easy to navigate and doesn’t require specialized knowledge in plant pathology.</li>
        <li><strong>Free Access for Everyone:</strong> We believe in making this tool available to as many people as possible to ensure global access to better plant health management.</li>
      </ul>

      <h2>How It Works</h2>
      <ol>
        <li><strong>Upload Image:</strong> Go to the Disease Recognition page and upload an image of a plant with suspected diseases. Ensure the image is clear, showing the affected areas of the plant.</li>
        <li><strong>Analysis:</strong> Our advanced AI system will process the image and analyze the plant's health, detecting any signs of disease, pest damage, or other abnormalities.</li>
        <li><strong>Results:</strong> You will receive a detailed report on the health of your plant, along with potential diseases, their severity, and treatment recommendations.</li>
      </ol>

      <h2>Why Choose Our System?</h2>
      <p>
        With increasing concerns about food security and the growing demand for sustainable agricultural practices, our Plant Disease Recognition System plays an important role in addressing these challenges. By utilizing artificial intelligence and machine learning, we offer a cutting-edge solution to help farmers, researchers, and even hobbyists in the agriculture field.
      </p>
      <p>
        Our platform helps mitigate the impact of plant diseases on global food systems, encouraging sustainable farming practices and contributing to food security for future generations.
      </p>

      <h3>Get Started with the Plant Disease Recognition System</h3>
      <p>
        Ready to experience the benefits of accurate plant disease detection? Simply click on the Disease Recognition page in the sidebar, upload an image, and let the system do the rest. It's that simple to protect your plants and improve the health of your crops.
      </p>

      <h2>About Us</h2>
      <p>
        Our team consists of a diverse group of developers, agricultural scientists, and machine learning experts dedicated to revolutionizing the way plant diseases are diagnosed. We aim to make plant health management more accessible, efficient, and precise. Learn more about our mission, team, and the work we do on the About page.
      </p>
    </div>
  );
};

export default HomePage;
