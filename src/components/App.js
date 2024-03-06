import React, { useState, useEffect } from 'react';
import Header from './Header';
import ListingsContainer from './ListingsContainer';

function App() {
  const [searchString, setSearchString] = useState('');
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // Initial fetch
    fetch('http://localhost:6001/listings')
      .then((res) => res.json())
      .then((data) => {
        setListings(data);
      });
  }, []);

  function search(string) {
    return listings.filter((item) => {
      return item.description
        .toLowerCase()
        .includes(searchString.toLowerCase());
    });
  }

  function deleteListing(id) {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE',
    }).then((res) => {
      if (res.ok) {
        setListings(listings.filter((item) => item.id !== id));
      }
    });
  }

  let filteredListings = search(searchString);

  return (
    <div className="app">
      <Header searchString={searchString} setSearchString={setSearchString} />
      <ListingsContainer
        listings={filteredListings}
        deleteListing={deleteListing}
      />
    </div>
  );
}

export default App;
