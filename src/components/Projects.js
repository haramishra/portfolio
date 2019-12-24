import React from "react";

export default () => {
    return (

        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="projects">
            <div className="w-100">
                <h2 className="">projects</h2>
                <a href="#" target="blank"><h5 className="text-primary mb-5 "><u>view all projects on github</u></h5></a>
                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">indecision app</h3>
                        <div className="subheading mb-3">Reactjs</div>
                        <div></div>
                        <p>It is a to-do app with random selectior</p>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">Details >></span>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
                    <div className="resume-content">
                        <h3 className="mb-0">James Buchanan High School</h3>
                        <div className="subheading mb-3">Technology Magnet Program</div>
                        <p>GPA: 3.56</p>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">August 2002 - May 2006</span>
                    </div>
                </div>

            </div>
        </section>
    );
}