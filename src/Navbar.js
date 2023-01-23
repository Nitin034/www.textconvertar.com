import React from 'react';
//import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
     <>
      <div className="collapse" id="navbarToggleExternalContent">
  <div className="bg-blue-800 p-4">
    <h5 className="text-warning h4">Welcome to Neversettle67 World</h5>
    <span className="text-muted">Hope you guys are good.</span>
  </div>
</div>
<nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className="nav-link " aria-current="page" to="/">Home</Link>
        <Link className="nav-link" to="/About">About</Link>
        <Link className="nav-link" to="/Contect">Contect</Link>
    <form className="d-flex">
        <input className="form-control my-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 mx-2" type="submit">Search</button>
      </form>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label me-md-3" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
  </div>
</nav>
     </>
  );
}

 
