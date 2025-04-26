import React from "react";
import TourCard from "./TourCard";

const Gallery = ({ tours, setTours }) => {
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  return (
    <div className="gallery">
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} removeTour={removeTour} />
      ))}
    </div>
  );
};

export default Gallery;
