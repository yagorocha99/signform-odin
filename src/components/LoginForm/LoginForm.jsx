import { useForm } from "react-hook-form"

export function LoginForm() {
  const {
    register,
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form">
        <p className="form-title">Let`s do this!</p>
        <div className="input">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" {...register("email" , {required: true})} />
        </div>
        <div className="input">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" {...register("password", {required: true})} />
        </div>
      </div>
      <div className="button"><button type="submit">Login</button></div>
    </form>
  );
}