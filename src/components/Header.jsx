import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <header className='bg-slate-200 shadow-md fixed top-0 w-full z-20'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>3DPRINT</span>
            <span className='text-slate-700'>MARKETPLACE</span>
          </h1>
        </Link>
        {/* Hamburger menu icon */}
        <div className='sm:hidden'>
          {isMenuOpen ? (
            <FaTimes className='text-slate-700 text-2xl' onClick={toggleMenu} />
          ) : (
            <FaBars className='text-slate-700 text-2xl' onClick={toggleMenu} />
          )}
        </div>
        {/* <form onSubmit={handleSearch} className='bg-slate-100 p-3 rounded-lg flex items-center hidden sm:block'>
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button type="submit">
            <FaSearch className='text-slate-600' />
          </button>
        </form> */}
        {/* Responsive Menu */}
        <nav className={`sm:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className='flex flex-col sm:flex-row gap-4'>
            <Link to='/'>
              <li className='text-slate-700 hover:underline'>Home</li>
            </Link>
            <Link to='/about'>
              <li className='text-slate-700 hover:underline'>About</li>
            </Link>
            <Link to='/sign-in'>
              <li className='text-slate-700 hover:underline'>Sign in</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
    <div className="pt-20"></div>
    </>
  );
};

export default Header;
