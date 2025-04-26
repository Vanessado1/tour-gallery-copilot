import React, { useState, useEffect } from "react";
import Gallery from "./components/Gallery"; // Import the Gallery component

const Tours = () => {
  // State to store the list of tours
  const [tours, setTours] = useState([]);
  // State to manage the loading state
  const [loading, setLoading] = useState(true);
  // State to store any errors that occur during the fetch
  const [error, setError] = useState(null);

  // Function to fetch tours from the API
  const fetchTours = async () => {
    setLoading(true); // Set loading to true while fetching data
    setError(null); // Clear any previous errors
    try {
      // Fetch data from the API using a CORS proxy
      const response = await fetch("https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`); // Throw an error if the response is not OK
      }
      const data = await response.json(); // Parse the JSON response
      setTours(data); // Update the tours state with the fetched data
    } catch (err) {
      setError(err.message); // Set the error state if an error occurs
    } finally {
      setLoading(false); // Set loading to false after the fetch is complete
    }
  };

  // Fetch tours when the component mounts
  useEffect(() => {
    fetchTours();
  }, []);

  // Display a loading message while data is being fetched
  if (loading) {
    return <p>Loading...</p>;
  }

  // Display an error message if an error occurs
  if (error) {
    return <p>Error: {error}</p>;
  }

  // Display a message if there are no tours left and provide a refresh button
  if (tours.length === 0) {
    return (
      <div>
        <p>No tours left!</p>
        <button onClick={fetchTours}>Refresh</button> {/* Refresh button to fetch tours again */}
      </div>
    );
  }

  // Render the Gallery component and pass the tours and setTours as props
  return <Gallery tours={tours} setTours={setTours} />;
};

export default Tours;
