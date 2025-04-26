import React from "react";

const TourCard = ({ tour, removeTour }) => {
  return (
    <div className="tour-card">
      <h2>{tour.name}</h2>
      <img src={tour.image} alt={tour.name} />
      <p>{tour.info}</p>
      <p><strong>Price:</strong> ${tour.price}</p>
      <button onClick={() => removeTour(tour.id)}>Not Interested</button>
    </div>
  );
};

export default TourCard;
