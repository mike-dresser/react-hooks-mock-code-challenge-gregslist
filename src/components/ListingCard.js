import React, { useState } from 'react';

function ListingCard({ item, deleteListing }) {
  const { description, image, location } = item;
  const [favorite, setFavorite] = useState(false);

  function toggleFavorite() {
    setFavorite(!favorite);
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button
            onClick={toggleFavorite}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button onClick={toggleFavorite} className="emoji-button favorite">
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button
          className="emoji-button delete"
          onClick={() => deleteListing(item.id)}
        >
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
