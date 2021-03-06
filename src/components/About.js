import React from 'react';

const socialIcons = [
  {
    icon: "fa-linkedin-in",
    link: "https://www.linkedin.com/in/hara-prasad-mishra-946a14142/"
  }, {
    icon: "fa-github",
    link: "https://github.com/haramishra"
  }, {
    icon: "fa-medium-m",
    link: "https://medium.com/@haraprasad45"
  }, {
    icon: "fa-codepen",
    link: "https://codepen.io/collection/Xdeodw"
  }
];

const displaySocialIcon = (icon) => icon.map((item, index) => {
  return (
    <a href={item.link} key={index} target="blank">
      <i className={`fab ${item.icon}`}></i>
    </a>
  );
})

export default () => {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
      <div className="w-100">
        <h1 className="mb-0">Hara
          <span className="text-primary"> Prasad</span>
        </h1>
        <div className="subheading mb-5">hitec city · hyderabad, india · +91 801-884-9774 ·
          <a href="mailto:haraprasad45@gmail.com" target="blank">haraprasad45@gmail.com</a>
        </div>
        <p className="lead"><b><span className="text-primary">Hi, </span></b>I am a frontend developer. I develop web sites and web applications using modern front-end web technologies. The tech I am currently loving is <span className="text-primary">ReactJs.</span></p>
        <p className="lead mb-5">Need a developer? Give me a shout at <u><a href="mailto:haraprasad45@gmail.com" target="blank">haraprasad45@gmil.com</a></u> or feel free to check out my <a className='text-primary'><u>resume.</u></a></p>
        <div className="social-icons">
          
          {socialIcons && displaySocialIcon(socialIcons)}
        </div>
      </div>
    </section>
  );
}