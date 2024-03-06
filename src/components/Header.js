import React from 'react';
import Search from './Search';

function Header({ searchString, setSearchString }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchString={searchString} setSearchString={setSearchString} />
    </header>
  );
}

export default Header;
