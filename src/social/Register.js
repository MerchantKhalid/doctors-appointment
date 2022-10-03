import React from 'react';
import { useSignInWithGoogle, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init'
import { useForm } from "react-hook-form";
import Loading from '../Pages/Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../hooks/useToken';

const Register = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      const [token] = useToken(user || gUser) 
      const navigate = useNavigate()


  
    if(loading || gLoading || updating){
      return <Loading />
    }
    let signInError;
    if(error || gError || updateError){
      signInError= <p className='text-red-500'>{error?.message || gError?.message}</p>
    }
  
    if(token){
      navigate('/appointment')
        
    }
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email,data.password)
        await updateProfile({ displayName:data.name });
      console.log(data);
      navigate('/appointment')
    }
    return (
        <div className='flex justify-center items-center h-screen'>
        <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-accent font-bold text-2xl text-center">Register</h2>
        {/* React hook */}
        <form onSubmit={handleSubmit(onSubmit)}>
        {/* name */}
        <div className="form-control w-full max-w-xs">
<label className="label">
  <span className="label-text">Name</span>
 
</label>
<input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs"
{...register("name", {
  required:{
    value:true,
    message:'Name is required'
  }
 
})} 
/>
<label className="label">
{errors.name?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.name.message} </span>}

</label>

</div>



        {/* email */}
        <div className="form-control w-full max-w-xs">
<label className="label">
  <span className="label-text">E-mail</span>
 
</label>
<input type="email" placeholder="Your E-mail" className="input input-bordered w-full max-w-xs"
{...register("email", {
  required:{
    value:true,
    message:'E-mail is required'
  },
  pattern:{ 
    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
    message:'Provide a valid E-mail'
  } 
 
})} 
/>
<label className="label">
{errors.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.email.message} </span>}
{errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.email.message} </span>}

 
</label>

</div>
<div className="form-control w-full max-w-xs">
<label className="label">
  <span className="label-text">Password</span>
 
</label>
<input  type="password" placeholder="Password" className="input input-bordered w-full max-w-xs"
{...register("password", {
  required:{
    value:true,
    message:'Password is required'
  },
  minLength:{ 
    value:6,
    message:'Password is too short',
  } 
 
})} 
/>
<label className="label">
{errors.password?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.password.message} </span>}
{errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500'>{errors.password.message} </span>}

 
</label>

</div>

{signInError}
<input type="submit" value='Register' className='btn w-full max-w-xs text-white'></input>
    
    
  </form>
  <p className='text-accent font-bold'><small>Already have an account ? <Link to='/login' className='text-primary'> Please Login</Link></small></p>
        <div className="divider">OR</div>
        <button onClick={()=>signInWithGoogle()} className="btn btn-outline">Continue with Google</button>
       
      </div>
    </div>
    </div>
    )
    
    
};

export default Register;