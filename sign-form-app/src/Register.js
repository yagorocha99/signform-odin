import './App.css';

function Form() {
  return(
    <form>
      <label for="first-name">First Name</label>
      <input type="text" name="first-name" id="first-name" ></input>
      
      <label>Last Name</label>
      <input type="text" name="last-name" id="last-name" ></input>
      
      <label>Email</label>
      <input type="email" name="email" id="email" ></input>
      
      <label>Birthday</label>
      <input type="date" name="birthday" id="birthday" ></input>
      
      <label>Password</label>
      <input type="password" name="password" id="password" ></input>

      <label>Confirm Password</label>
      <input type="password" name="confirm-password" id="confirm-password" ></input>
    </form>
  );
}

export default function ContainerRegister(){
  return(
    <div>
      <div>
        <h1>This is not a real online service! You know you need something like this in your life to help
          you realize your deepest dreams. 
        </h1>
        <h1>Sign up now to get started.</h1>
        <br></br>
        <h1>You know you want to</h1>
      </div>

      <div>
        <Form />
      </div>
    </div>
  );
};
