import { useForm } from 'react-hook-form'
import Grid from '@mui/material/Grid'
import './index.css'

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <>
      <Grid container className='h-screen flex justify-center items-center'>
        <Grid>
          <img alt='coffee' src='coffee.jpg' className=' w-[417px]'></img>
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)} className=' bg-slate-900 p-36 text-slate-300'>
          <Grid>
            <Grid item xs={12} className=' text-sm'>
              <h1 className=''>This is not real online service! You know you need something like this in your life
              to help you realize your deepest dreams.</h1>
            </Grid>

            <Grid item xs={4}>
              <label>First Name</label>
              <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
            </Grid>
              
            <Grid item xs={4}>
              <label>Last Name</label>
              <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
            </Grid>
            
            <Grid item xs={4}>
              <label>Email</label>
              <input type="email" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
            </Grid>
            
            <Grid item xs={4}>
              <label>Password</label>
              <input type="password" placeholder="Password" {...register("Password", {required: true, max: 16, min: 6, maxLength: 16})} />
            </Grid>
            
            <Grid item xs={8}>
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm Password" {...register("Confirm Password", {required: true, max: 16, min: 6, maxLength: 16})} />
            </Grid>
            
            <Grid item xs={4}>
              <label>Birthday</label>
              <input type="date" placeholder="Birthday" {...register("Birthday", {required: true})} />
            </Grid>

            <Grid><input type="submit" /></Grid>
          </Grid>
        </form>
      </Grid>
    </>
  );
}

export default Register;