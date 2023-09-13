import React from 'react'
import Navbar from "../Navbar/Navbar"
import SearchForm from "../SearchForm/SearchForm"
import "./Header.css"


const Header = () => {
  return (
    <div className="header-container">
      <header className="header">
        <Navbar />
        <div className="content">
          <h2 className="title">Find Book</h2>
          <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam hic, eaque explicabo dolore fugiat dolorum odio dolorem aspernatur neque similique?</p>
          <SearchForm />
        </div>
      </header>
    </div>
  )
}

export default Header