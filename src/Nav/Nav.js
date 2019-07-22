import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default class Nav extends Component {
  render(){
    return (
      <nav role="navigation" className="flex" id="nav-list">
        <Link to="/" className="nav-link" id='home-link'>Patti Corning</Link>
        <Link to="/about" className="nav-link">About the artist</Link>
        <Link to="/paintings" className="nav-link">Paintings</Link>
        <Link to="/contact" className="nav-link" id="about-link">Contact and Purchasing</Link>
      </nav>
    );
  }
}