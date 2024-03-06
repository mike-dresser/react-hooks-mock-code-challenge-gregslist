import React from 'react';
import ListingCard from './ListingCard';

function ListingsContainer({ listings, deleteListing }) {
  return (
    <main>
      <ul className="cards">
        {listings.map((item) => {
          return (
            <ListingCard
              key={item.id}
              item={item}
              deleteListing={deleteListing}
            />
          );
        })}
        {/* use the ListingCard component to display listings */}
      </ul>
    </main>
  );
}

export default ListingsContainer;
