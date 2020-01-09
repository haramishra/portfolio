import React from 'react';

let programmingToolClass = [
  ["html5", "fab fa-html5"],
  ["CSS", "fab fa-css3-alt"],
  ["JavaScript", "fab fa-js-square"],
  ["Reactjs", "fab fa-react"],
  ["SASS", "fab fa-sass"],
  ["git/github", "fab fa-git-alt"],
  ["Bootstrap", "fab fa-bootstrap"],
  ["Linux", "fab fa-linux"],
  ["NPM", "fab fa-npm"]
];

let workflow = [
  "Mobile-First, Responsive Design",
  "Functional Programming & OOPs",
  "Web Design concepts",
  "AJAX & JSON"
]

let displayProgTools = (proTool) => {
  return programmingToolClass && programmingToolClass.map((item, index) => {
    return (
      <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title={item[0]} key={index}>
        <i className={item[1]}></i>
      </li>
    );
  })
}

export default () => {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
      <div className="w-100">
        <h2 className="mb-5">Skills</h2>

        <div className="subheading mb-3">Programming Languages &amp; Tools</div>
        <ul className="list-inline dev-icons">
          {/* <li className="list-inline-item">
            <i className="fab fa-html5"></i>
          </li> */}
          {
            displayProgTools(programmingToolClass)
          }

        </ul>

        <div className="subheading mb-3">Workflow</div>
        <ul className="fa-ul mb-0">

          {
            workflow && workflow.map((item, index) => <li key={index}>
              <i className="fa-li fa fa-check"></i>
              {item}</li>)
          }
        </ul>
      </div>
    </section>
  );
}