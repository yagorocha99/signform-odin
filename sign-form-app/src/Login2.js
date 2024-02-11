import { useForm } from "react-hook-form"


export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First Name" {...register("firstName" , {required: true})} />
      {errors.firstName && <span>asdasd</span>}
      <input type="text" placeholder="Last Name" {...register("lastName" , {required: true})} />

      <input type="date" placeholder="Birthday" {...register("birthday" , {required: true})} />
      
      <input type="email" placeholder="Email" {...register("email" , {required: true})} />

      <input type="password" placeholder="Password" {...register("password" , {required: true})} />

      <input type="password" placeholder="Confirm Password" {...register("confirmPassword" , {required: true})} />
      
      <input type="submit" />
    </form>
  )
}