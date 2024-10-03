import React from 'react'

export const Skills = ({darkMoon}) => {


  return (
    <section  data-aos="fade-down" 
     id='skills' className={darkMoon ? 'dark-skills skills' : 'skills'}>
        <h2 className="skills-heading">Skills</h2>
        <div className="skills-container"  >
            <div data-aos="fade-right"   className={darkMoon ? "dark-box skill box1" : "skill box1"}>
                <img width="240" height="240" src="https://img.icons8.com/color/240/html-5--v1.png" alt="html-5--v1"/>
                <div className="skill-name">
                    <h4>HTML</h4>
                    <h4>90%</h4>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-delay='450' className={darkMoon ? "dark-box skill box2" : "skill box2"}>
                <img width="240" height="240" src="https://img.icons8.com/color/240/css3.png" alt="css3"/>
                <div className="skill-name">
                    <h4>CSS</h4>
                    <h4>85%</h4>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-delay='450' className={darkMoon ? "dark-box skill box3" : "skill box3"}>
                <img width="240" height="240" src="https://img.icons8.com/fluency/240/javascript.png" alt="javascript"/>
                <div className="skill-name">
                    <h4>Javascript</h4>
                    <h4>64%</h4>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-delay='450' className={darkMoon ? "dark-box skill box4" : "skill box4"}>
                <img width="240" height="240" src="https://img.icons8.com/officel/240/react.png" alt="react"/>
                <div className="skill-name">
                    <h4>React JS</h4>
                    <h4>80%</h4>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-delay='450' className={darkMoon ? "dark-box skill box5" : "skill box5"}>
                <img width="240" height="240" src="https://img.icons8.com/color-glass/240/bootstrap.png" alt="bootstrap"/>
                <div className="skill-name">
                    <h4>Bootstrap</h4>
                    <h4>70%</h4>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-delay='450' className={darkMoon ? "dark-box skill box6" : "skill box6"}>
                <img width="240" height="240" src="https://img.icons8.com/color/240/git.png" alt="git"/>
                <div className="skill-name">
                    <h4>Git</h4>
                    <h4> 73%</h4>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-delay='450' className={darkMoon ? "dark-box skill box7" : "skill box7"}>
                <img width="240" height="240" src="https://img.icons8.com/color/240/github--v1.png" alt="github--v1"/>
                <div className="skill-name">
                    <h4>GitHub</h4> 
                    <h4>76%</h4>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-delay='450' className={darkMoon ? "dark-box skill box8" : "skill box8"}>
                <img width="240" height="240" src="https://img.icons8.com/color/240/mysql-logo.png" alt="mysql-logo"/>
                <div className="skill-name">
                    <h4>MySQL</h4> 
                    <h4>60%</h4>
                </div>
            </div>
        </div>
    </section>
  )
}
