import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    // Fetching random dog image from the API
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        // Update state with the received dog image
        setDogImage(data.message);
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
      });
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div>
      {dogImage ? (
        <img src={dogImage} alt="A Random Dog" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
