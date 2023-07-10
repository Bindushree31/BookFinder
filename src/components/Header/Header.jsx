import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
            <p className='header-text fs-18 fw-3'>Your One-Stop Source for finding and seraching a books.<br />
              Find world-class books with ease by searching for their author, title or publisher</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header