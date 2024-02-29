import PropTypes from 'prop-types';
import "../index.css";
import { Logo } from '../components/Logo/Logo';
import { Form } from '../components/Form/Form';

function Register({setIsShowing}) {
  return (
    <div className="container">
      <div className="picture">
        <Logo />
        <div className="register">
          <div className=" button"><button onClick={() => setIsShowing(false)}>Login</button></div>
        </div>
      </div>
      <div className="right">
        <div className="first-text ">
          <p>This is not a real online service! BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla Bla!</p>
          <p>Sign up now to get started.</p>
          <p className="second-text">You know you want to.</p>
        </div>
        <Form />
      </div>
    </div>
  )
}

Register.propTypes = {
  setIsShowing: PropTypes.func.isRequired,
};

export default Register;

