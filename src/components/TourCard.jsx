import React from "react";

const TourCard = ({ tour, removeTour }) => {
  return (
    <div className="tour-card">
      {/* Display the tour name */}
      <h2>{tour.name}</h2>
      {/* Display the tour image */}
      <img src={tour.image} alt={tour.name} />
      {/* Display the tour info */}
      <p>{tour.info}</p>
      {/* Display the tour price */}
      <p><strong>Price:</strong> ${tour.price}</p>
      {/* Button to remove the tour, calls the removeTour function with the tour ID */}
      <button onClick={() => removeTour(tour.id)}>Not Interested</button>
    </div>
  );
};

export default TourCard;
