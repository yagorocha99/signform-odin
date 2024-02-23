import PropTypes from 'prop-types';
import "../index.css";
import { Logo } from '../components/Logo/Logo';
import { LoginForm } from '../components/LoginForm/LoginForm';

 function Login({setIsShowing}) {
  return (
    <div className="container">
      <div className="picture">
        <Logo />
        <div className="register">
          <div className=" button">
            <button onClick={() => setIsShowing(true)}>Register</button>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="first-text ">
          <p>This is not a real online service! Bla BlaBla BlaBla BlaBla BlaBla BlaBla Bla!</p>
          <p>Login to continue.</p>
          <p className="second-text">You know you want to.</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}

Login.propTypes = {
    setIsShowing: PropTypes.func.isRequired,
};

export default Login;