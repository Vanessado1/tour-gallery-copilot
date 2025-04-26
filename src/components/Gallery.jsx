import React from 'react';
import TourCard from './components.TourCard';

const Gallery = ({ tours }) => {
    return (
        <div className="gallery">
            {tours.map((tour) => (
                <TourCard key={tour.id} {...tour} />
            ))}
        </div>
    );
};

export default Gallery;