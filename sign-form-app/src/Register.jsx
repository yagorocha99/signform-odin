import { useForm } from "react-hook-form"
import "./App.css";
import StoreTwoToneIcon from '@mui/icons-material/StoreTwoTone';

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

      <div className="picture">

        <div className="logo">
          <StoreTwoToneIcon sx={{ fontSize: 80 }} />
          <h1>Dreams Tattoo shop</h1>
        </div>

        <div className="register">
          <div className=" button"><button type="submit">Login</button></div>
        </div>

      </div>


      <div className="right">

        <div className="first-text ">
          <p>This is not a real online service! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, commodi!</p>
          <p>Sign up now to get started.</p>
          <p className="second-text">You know you want to.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form ">
            <p className="form-title">Let's do this!</p>

            <div className="input">
              <label htmlFor="first-name">First name</label>
              <input type="text" name="first-name" id="first-name" {...register("firstName" , {required: true, maxLength:20 , pattern: /^[A-Za-z]+$/i})} />
            </div>
            
            <div className="input">
              <label htmlFor="last-name">Last name</label>
              <input type="text" name="last-name" id="last-name" {...register("lastName" , {required: true, pattern: /^[A-Za-z]+$/i})} />
            </div>
            
            <div className="input">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" {...register("email" , {required: true})} />
            </div>
            
            <div className="input">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" name="phone" id="phone" {...register("email" , {required: true})} />
            </div>
            
            <div className="input">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" {...register("password", {required: true})} />
            </div>
            
            <div className="input">
              <label htmlFor="confirm-password">Confirm password</label>
              <input type="password" name="confirm-password" id="confirm-password" {...register("confirmPassword" , {required: true, validate: value => value === password || "Password must be matching!"})} />
            </div>
          
          </div>
          <div className=" button"><button type="submit">Create Account</button></div>
        </form>
      </div>
    </div>
  )
}
