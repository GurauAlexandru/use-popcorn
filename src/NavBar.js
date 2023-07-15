import { useEffect, useRef } from 'react';
import { useKey } from './useKey';

export const NavBar = ({ children }) => (
  <nav className='nav-bar'>
    <Logo />
    {children}
  </nav>
);

export const Search = ({ query, setQuery }) => {
  const inputEl = useRef(null);

  useKey('Enter', () => {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery('');
  });

  // useEffect(() => {
  //   const callback = (e) => {
  //     if (document.activeElement === inputEl.current) return;
  //     if (e.code === 'Enter') inputEl.current.focus();
  //     setQuery('');
  //   };

  //   document.addEventListener('keydown', callback);

  //   return document.addEventListener('keydown', callback);
  // }, [setQuery]);

  return (
    <input
      className='search'
      type='text'
      placeholder='Search movies...'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
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
