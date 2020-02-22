import React from "react";

let projects = [
    {
        title: "Indecision App",
        image: "",
        stack: ["react", "sass"],
        description: "It is a to-do app that display you a random task to do",
        website: "https://sad-agnesi-d3aca4.netlify.com/",
        github: "https://github.com/haramishra/indecisionApp"

    }, {
        title: "Material-UI calculator",
        image: "",
        stack: ['react', "material UI", "mathjs"],
        description: "Basic Calculator",
        website: "https://suspicious-goodall-4b7b59.netlify.com/",
        github: "https://github.com/haramishra/fcc-js-calculator"

    },
    {
        title: "Markdown Previewer",
        image: "",
        stack: ['react', "material UI", 'marked'],
        description: "Parse Markdown Into HTML",
        website: "https://infallible-mcclintock-5d387f.netlify.com/",
        github: "https://github.com/haramishra/fcc-js-calculator"

    }
];

let showProjects = (projects) => {
    return projects.map((item) => {
        return (
            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-3" key={item.title}>
                <div className="resume-content">
                    <h3 className="mb-0"><a href={item.github} style={{color: '#343a40'}}>{item.title}</a></h3>
                    <div className="subheading mb-3">{item.stack.join(" - ")}</div>
                    <div></div>
                    <p>{item.description}</p>
                </div>
                <div className="resume-date text-md-right">
                    <a href={item.website} ><span className="text-primary">Live View >></span></a>
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
                <a href="https://github.com/haramishra/" target="blank"><h5 className="text-primary mb-5 "><u>view all projects on github</u></h5></a>
                {projects && showProjects(projects)}

            </div>
        </section>
    );
}