import "../signUp/SignUpPage.css"
import { Container } from 'reactstrap';
import { RiNetflixFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signUp } from '../../../../auth/Auth';

export default function SignUpPage() {
  // DEFINING STATES FOR SIGNUP PROCESS
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState('');

  //DEFINING SIGNUP METHOD
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const user = await signUp(email, password);

      setSuccess(`Auth is succesfull , Welcome, ${user.email}`);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };


  // DEFINING NAVIGATE FOR ROUTE PAGES
  const navigate = useNavigate()
  const BackHomeFromLogo = () => {
    navigate("/");
  }
  const handleSignInClick = (e) => {
    e.preventDefault();
    navigate("/signIn");
  };


  return (
    <div className="signUpPage-div">
      <header>
        <Container>
          <RiNetflixFill onClick={BackHomeFromLogo} className='signUpPage-nav-icon' />
        </Container>
      </header>
      <main>
        <div className="signUp-main-container">
          <div className="signUp-main-title">
            Sign up
          </div>
          <div className="signUp-main-form">
            <form onSubmit={handleSignUp} >
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
                className="signUp-main-email"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
                className="signUp-main-password"
              />

              <button type="submit" className="signUp-main-button">Sign up</button> <br />
              <button className="signUp-signIn-button" type="button" onClick={handleSignInClick}>Do you have already account ? Sign in  </button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
          </div>
        </div>
      </main>
    </div>
  );
}
