import React, { useEffect, useState } from 'react';
import 'boxicons/css/boxicons.min.css';

export const Navbar = ({ darkMoon, setDarkMoon }) => {
  const [menuShow, setMenuShow] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleLinkClick = (index) => {
    setActiveIndex(index);
    setMenuShow(!menuShow);
  };

  useEffect(() => {
  
  }, []);

  return (
    <header>
      <nav>
        <div className={darkMoon ? "nav nav-bg-layout-dark" : "nav nav-bg-layout"}>
          <a
            href="#"
            className="nav-head-line"
            style={darkMoon ? { color: 'white' } : { fontWeight: '500', color: 'blue' }}
          >
            MYDEEPAN
          </a>
          <div className={menuShow ? "nav-menu" : 'nav-menu show'}>
            <ul className="nav_list">
              {['Home', 'About', 'Skills', 'Project', 'Contact','1'].map((item, index) => (
                <li className="nav_items" key={index}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`nav_link  ${activeIndex === index ? 'active' : 'hidden'}`}
                    onClick={() => handleLinkClick(index)}
                  >
                    {item}
                  </a>
                </li>
              ))}
              {/* <li className="nav_items">
                <i
                  onClick={() => setDarkMoon(!darkMoon)}
                  className={darkMoon ? 'bx bxs-sun' : 'bx bxs-moon'}
                  style={darkMoon ? { color: 'white', marginLeft: '-20px', cursor: "pointer" } : { cursor: "pointer", marginLeft: '-20px' }}
                ></i>
              </li> */}
            </ul>
          </div>
          <div className="nav-icon" style={darkMoon ? { color: 'white' } : null}>
            {/* <i onClick={() => setDarkMoon(!darkMoon)} className={darkMoon ? 'bx bxs-sun' : 'bx bxs-moon'}></i> */}
            <i onClick={() => setMenuShow(!menuShow)} className="bx bx-menu-alt-left"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};
