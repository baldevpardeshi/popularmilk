import logo from './logo.png';
import React from 'react';
import './App.css';
import {Link, NavLink} from 'react-router-dom';
import { render } from '@testing-library/react';

function Nav() {
  return (
    <div className="container-fluid fixed-top header">
        <nav className="d-flex justify-content-between align-items-center py-3">
          <Link to="/">
            <img src={logo}/>
          </Link>
          <div>
            <ul className="d-flex jusify-content-around align-items-center m-0">
              <li className="nav-item">
                <NavLink exact className="nav-link" activeClassName="active" to="/">Home </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link" activeClassName="active" to="/about">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link" activeClassName="active" to="/farm">Farm</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link" activeClassName="active" to="/blog">Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link" activeClassName="active" to="/product">Product</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link" activeClassName="active" to="/recipes">Recipes</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </nav>
    </div>
  );
}

export default Nav;
