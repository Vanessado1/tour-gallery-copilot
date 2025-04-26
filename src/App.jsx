import React, { useState, useEffect } from "react";
import Gallery from "./components/Gallery"; // Import the Gallery component

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTours = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setTours(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (tours.length === 0) {
    return (
      <div>
        <p>No tours left!</p>
        <button onClick={fetchTours}>Refresh</button>
      </div>
    );
  }

  return <Gallery tours={tours} />;
};

export default Tours;
