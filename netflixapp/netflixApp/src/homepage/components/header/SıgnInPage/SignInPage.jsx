import "../SıgnInPage/SıgnInPage.css";
import { Container } from 'reactstrap';
import { RiNetflixFill } from "react-icons/ri";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../../../auth/Auth';

export default function SignInPage() {

  // DEFINING STATES FOR SIGNIN PROCESS
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState('');

  // DEFINING SIGNIN METHOD
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const user = await signIn(email, password);

      setSuccess(`Giriş başarılı! Hoşgeldin, ${user.email}`);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  //DEFINING PAGES ROUTING
  const navigate = useNavigate();
  const BackHomeFromLogo = () => {
    navigate("/")
  }
  const handleNavigateToSessionPage = () => {
    navigate("/sessionPage")
  }
  const handleSignUpClick = (event) => {
    event.preventDefault();
    navigate("/signUp");
  };

  return (
    <div className="signInPage-div">
      <header>
        <Container>
          <RiNetflixFill onClick={BackHomeFromLogo} className='signInPage-nav-icon' />
        </Container>
      </header>
      <main>
        <div className="signIn-main-container">
          <div className="signIn-main-title">
            Sign in
          </div>
          <div className="signIn-main-form">
            <form onSubmit={handleSignIn}>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
                className="signIn-main-email"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
                className="signIn-main-password"
              />

              <button type="submit" onClick={handleNavigateToSessionPage} className="signIn-main-button">Sign in</button> <br />
              <button title="/signUp" type="button" onClick={handleSignUpClick} className="signIn-signUp-button">Do you not have an account? </button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
          </div>
        </div>
      </main>
    </div>
  );
}
