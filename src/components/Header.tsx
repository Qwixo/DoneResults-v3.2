import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="main-header" className={isVisible ? 'visible' : ''}>
      <div className="container">
        <div className="logo">
          <img src="https://i.imgur.com/jbOMOyH.png" alt="DoneResults Logo" />
        </div>
        <nav>
          <ul>
            <li>
              <a 
                href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3SqRGx0SD40mEaoR1UqvTm-gBnZ9kuxqOKR2MpWKhb-9-eU8nR6yyhgwMX-M0OuodgIfYACrOO?gv=true" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="nav-cta"
              >
                Book a Call
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
