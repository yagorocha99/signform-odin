import { useForm } from "react-hook-form"

export function Form() {
  const {
    register,
    handleSubmit,
    watch,
  } = useForm()

  const password = watch("password");
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form">
        <p className="form-title">Let`s do this!</p>
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
          <input type="tel" name="phone" id="phone" {...register("phone" , {required: true})} />
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
      <div className="button"><button type="submit">Create Account</button></div>
    </form>
  );
}
