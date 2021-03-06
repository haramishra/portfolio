import React from 'react'
import profilePicture from '../img/profile.jpg'

const navItem = ["about", "skills", "projects", "interests", "awards"];

const displayNavItems = (item) => item.map((item, index) =>  <li className="nav-item" key={index}>
<a className="nav-link js-scroll-trigger" href={`#${item}`}>{item}</a>
</li>)

export default () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">Hara Prasad</span>
        <span className="d-none d-lg-block">
          <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profilePicture} alt=""></img>
      </span>
    </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">

            {displayNavItems(navItem)}
            
          </ul>
        </div>
  </nav>
      );
};