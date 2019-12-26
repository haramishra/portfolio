import React from 'react';
let certificate = [
    {
        text: "frontend freecodecamp",
        link: "https://www.freecodecamp.org/certification/haramishra/responsive-web-design"
    }, {
        text: "xyxjkjfs",
        link: "https://www.freecodecamp.org/certification/haramishra/responsive-web-design"
    }
]

export default () => {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
            <div className="w-100">
                <h2 className="mb-5">Awards &amp; Certifications</h2>
                <ul className="fa-ul mb-0">
                    {certificate && certificate.map((item, index) => <li className="award-link" key={index}>
                        <i className="fa-li fa fa-trophy text-warning"></i>
                        <a href={item.link}   target="blank">{item.text}</a>
                    </li>)}
                </ul>
            </div>
        </section>
    );
}