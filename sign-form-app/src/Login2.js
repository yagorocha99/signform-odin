import { useForm } from "react-hook-form"


export default function App() {
  const {
    register,
    handleSubmit,
    watch,
  } = useForm()

  function check() {
    var input = document.querySelector('#confirmPassword');
    if (input.value !== document.querySelector('#password').value) {
        input.setCustomValidity('Password Must be Matching.');
    } else {
        input.setCustomValidity('');
    }
  }

  const password = watch("password");
  
  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input name="firstName" type="text" placeholder="First Name" {...register("firstName" , {required: true, maxLength:20 , pattern: /^[A-Za-z]+$/i})} />
      
      <label>Last Name</label>
      <input name="lastName" type="text" placeholder="Last Name" {...register("lastName" , {required: true, pattern: /^[A-Za-z]+$/i})} />

      <label>Birthday</label>
      <input name="birthday" type="date" placeholder="Birthday" {...register("birthday" , {required: true})} />
      
      <label>Email</label>
      <input name="email" type="email" placeholder="Email" {...register("email" , {required: true})} />

      <label>Gender</label>
      <select name="gender" {...register("gender")}>
        <option value="">Select your gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
        <option value="none">I prefer not to say</option>
      </select>

      <label>Password</label>
      <input name ="password" type="password" id="password" placeholder="Password"  {...register("password", {required: true})} />
      
      <label>Confirm your password</label>
      <input name ="confirmPassword" type="password" id="confirmPassword" placeholder="Confirm Password" {...register("confirmPassword" , {required: true, validate: value => value === password || "Password must be matching!"})} />
      
      <input type="submit" />
    </form>
  )
}