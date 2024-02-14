import { useForm } from "react-hook-form"
import "./App.css";


export default function App() {
  const {
    register,
    handleSubmit,
    watch,
  } = useForm()

  const password = watch("password");
  
  const onSubmit = (data) => console.log(data)

  return (
    
    <div className="container">
      
      <div className="containerImage">
          <img alt="" src="/coffee.jpg"></img>
      </div>


      <div className="containerForm">
        <div>
          <h1>This is not a real online service! You know you need something like this in your life to help
            you realize your deepest dreams. 
          </h1>
          <h1>Sign up now to get started.</h1>
          <br></br>
          <h1>You know you want to</h1>
        </div>
        <form className="App" onSubmit={handleSubmit(onSubmit)}>


          <label>First Name</label>
          <input name="firstName" type="text" placeholder="First Name" {...register("firstName" , {required: true, maxLength:20 , pattern: /^[A-Za-z]+$/i})} />
            
          <label>Last Name</label>
          <input name="lastName" type="text" placeholder="Last Name" {...register("lastName" , {required: true, pattern: /^[A-Za-z]+$/i})} />

          <label>Birthday</label>
          <input name="birthday" type="date" placeholder="Birthday" {...register("birthday" , {required: true})} />
          
          <label>Email</label>
          <input name="email" type="email" placeholder="Email" {...register("email" , {required: true})} />

          <label>Password</label>
          <input name ="password" type="password" id="password" placeholder="Password"  {...register("password", {required: true})} />
          
          <label>Confirm password</label>
          <input name ="confirmPassword" type="password" id="confirmPassword" placeholder="Password" {...register("confirmPassword" , {required: true, validate: value => value === password || "Password must be matching!"})} />

          <label></label>
          <input type="submit" />
        </form>
      </div>
    </div>
  )
}