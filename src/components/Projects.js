import React from "react";

let projects = [
    {
        title: "Portfolio",
        image: "",
        stack: ["reactjs", "bootstrap", "sass"],
        description: "my portfolio",
        github: "#"

    }, {
        title: "Indecision App",
        image: "",
        stack: ["reactjs", "sass"],
        description: "It is a to-do app that display you a random task to do",
        github: ""

    }, {
        title: "Landing",
        image: "",
        stack: ["html", "css"],
        description: "landing appp",
        github: ""

    }
];

let showProjects = (projects) => {
    return projects.map((item, index) => {
        return (
            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-3" key={index}>
                <div className="resume-content">
                    <h3 className="mb-0">{item.title}</h3>
                    <div className="subheading mb-3">{item.stack.join(" - ")}</div>
                    <div></div>
                    <p>{item.description}</p>
                </div>
                <div className="resume-date text-md-right">
                    <a href={item.github} target="blank"><span className="text-primary">Details >></span></a>
                </div>
            </div >
        );
    });
}

export default () => {
    return (

        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="projects">
            <div className="w-100">
                <h2 className="">projects</h2>
                <a href="#" target="blank"><h5 className="text-primary mb-5 "><u>view all projects on github</u></h5></a>
                {projects && showProjects(projects)}

            </div>
        </section>
    );
}