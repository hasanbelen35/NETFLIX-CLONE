import React from 'react';
import { Container } from 'reactstrap'; 
import { RiNetflixFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

function HomepageHeader() {
  const navigate = useNavigate();
  const handleSignUPClick = (event) => {
    event.preventDefault(); // Formun submit olmasını engelle
    navigate("/signUp");
  };
  const handleSignInClick = () => {
    navigate("/signIn");
  };
  return (
    <div>
      {/* HEADER */}
      <header className='home-page-header'>
        <Container className='home-page-nav'>
          <RiNetflixFill className='homepage-nav-icon' />
          <div className="homepage-nav-options">
            <select name="" id="homepage-nav-select">
              <option value="">Turkish</option>
              <option value="">English</option>
            </select>
            <button onClick={handleSignInClick} className='homepage-nav-button'>
              Sign In
    </button>
          </div>
        </Container>

        {/* HEADER INFO */}
        <Container className='homepage-header-info'>
          <h1>Unlimited movies, TV shows, and more</h1>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
          <div className="homepage-header-info-options">
            <input placeholder='E-mail Address' type="text" className="homepage-header-info-options-email" />
            <button  onClick={handleSignUPClick} className="homepage-header-info-options-button">
            
              Get Started 
            </button>
          </div>
        </Container>
      </header>
    </div>
  );
}

export default HomepageHeader;
