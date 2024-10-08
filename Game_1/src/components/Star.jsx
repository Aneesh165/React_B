import React, { useEffect, useState } from 'react';
import './star.css';
import { FaStar } from 'react-icons/fa';

function Star() {
  const [stars, setStars] = useState([]); // Use an array to store multiple stars
  const [rating, setRating] = useState(0);

  // Create an array of stars based on the rating
  useEffect(() => {
    const newStars = [];
    for (let i = 0; i < rating; i++) {
      newStars.push(<FaStar key={i} className="filled-star" />);
    }
    for (let i = rating; i < 5; i++) {
      newStars.push(<FaStar key={i} />);
    }
    setStars(newStars);
  }, [rating]);

  // Handle star click events
  const handleStarClick = (index) => {
    setRating((prevRating) => {
      if (prevRating === index + 1) {
        return index + 0.5; // If the clicked star is already selected, set it to half
      } else {
        return index + 1; // Otherwise, set the rating to the clicked star's index + 1
      }
    });
  };


  return (
    <div className="star-container">
      <div className="wrap">
        <img src='https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=400' alt="product image" />
        <div className="rating">
          <span className="star-rating">
            {stars.map((star, index) => (
              <FaStar size={30}
                key={index}
                onClick={() => handleStarClick(index)}
                className={index < rating ? 'filled-star' : ''}
              />
            ))}
          </span>
          <span className="star-count" style={{ paddingLeft: '5px' }}>
            {rating}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Star;