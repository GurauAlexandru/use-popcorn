import { useState } from 'react';

export const NavBar = ({ children }) => (
  <nav className='nav-bar'>
    <Logo />
    {children}
  </nav>
);

export const Search = ({ query, setQuery }) => {
  return (
    <input
      className='search'
      type='text'
      placeholder='Search movies...'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export const Logo = () => (
  <div className='logo'>
    <span role='img'>🍿</span>
    <h1>usePopcorn</h1>
  </div>
);

export const NumResults = ({ movies }) => (
  <p className='num-results'>
    Found <strong>{movies.length}</strong> results
  </p>
);
