import React from 'react';

export default () => {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
      <div className="w-100">
        <h2 className="mb-5">Skills</h2>

        <div className="subheading mb-3">Programming Languages &amp; Tools</div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item">
            <i className="fab fa-html5"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-css3-alt"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-js-square"></i>
          </li>
          
          <li className="list-inline-item">
            <i className="fab fa-react"></i>
          </li>
          
          <li className="list-inline-item">
            <i className="fab fa-sass"></i>
          </li>
          
          
          <li className="list-inline-item">
            <i className="fab fa-git-alt"></i>
          </li>

          <li className="list-inline-item">
            <i className="fab fa-bootstrap"></i>
          </li>

          <li className="list-inline-item">
            <i className="fab fa-linux"></i>
          </li>
         
          <li className="list-inline-item">
            <i className="fab fa-npm"></i>
          </li>
        </ul>

        <div className="subheading mb-3">Workflow</div>
        <ul className="fa-ul mb-0">
          <li>
            <i className="fa-li fa fa-check"></i>
            Mobile-First, Responsive Design</li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Functional Programming &amp; OOPs</li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Web Design concepts</li>
          <li>
            <i className="fa-li fa fa-check"></i>
            AJEX &amp; JSON</li>
        </ul>
      </div>
    </section>
    );
}