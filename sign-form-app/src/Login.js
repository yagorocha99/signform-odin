import './App.css';

function Form() {
  return(
    <form>      
      <label>Email</label>
      <input type="email" name="email" id="email" ></input>
      
      <label>Password</label>
      <input type="password" name="password" id="password" ></input>

    </form>
  );
}

export default function ContainerLogin(){
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
