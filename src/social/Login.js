
// import React, { useEffect } from 'react';
// import { useSignInWithGoogle,useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import auth from '../firebase.init'
// import { useForm } from "react-hook-form";
// import Loading from '../Pages/Shared/Loading';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import useToken from '../hooks/useToken';

// const Login = () => {
//     const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
//     const { register, formState: { errors }, handleSubmit } = useForm();
//     const [
//       signInWithEmailAndPassword,
//       user,
//       loading,
//       error,
//     ] = useSignInWithEmailAndPassword(auth);
    
// const token = useToken(user || gUser)

//     const navigate = useNavigate()
//     const location = useLocation()
    
//     let from = location.state?.from?.pathname || '/'
     


//     useEffect( () =>{
//            if (token) {
//                   navigate(from, { replace: true });
//                }
//            }, [token, from, navigate])


//   //   useEffect( () =>{
//   //     if (user || gUser) {
//   //         navigate(from, { replace: true });
//   //     }
//   // }, [user,gUser, from, navigate])
    
//     if(loading || gLoading){
//       return <Loading />
//     }
//     let signInError;
//     if(error || gError){
//       signInError= <p className='text-red-500'>{error?.message || gError?.message}</p>
//     }
  
    
//     const onSubmit = data => {
//       signInWithEmailAndPassword(data.email,data.password)
   
//     }
//     return (
//       <div className='flex justify-center items-center h-screen'>
//           <div className="card w-96 bg-base-100 shadow-xl">
//         <div className="card-body">
//           <h2 className="text-accent font-bold text-2xl text-center">Login</h2>
//           {/* React hook */}
//           <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="form-control w-full max-w-xs">
//   <label className="label">
//     <span className="label-text">E-mail</span>
   
//   </label>
//   <input type="email" placeholder="Your E-mail" className="input input-bordered w-full max-w-xs"
//   {...register("email", {
//     required:{
//       value:true,
//       message:'E-mail is required'
//     },
//     pattern:{ 
//       value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
//       message:'Provide a valid E-mail'
//     } 
   
//   })} 
//   />
//   <label className="label">
//   {errors.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.email.message} </span>}
//   {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.email.message} </span>}
  
   
//   </label>
  
// </div>
//  <div className="form-control w-full max-w-xs">
//   <label className="label">
//     <span className="label-text">Password</span>
   
//   </label>
//   <input  type="password" placeholder="Password" className="input input-bordered w-full max-w-xs"
//   {...register("password", {
//     required:{
//       value:true,
//       message:'Password is required'
//     },
//     minLength:{ 
//       value:6,
//       message:'Password is too short',
//     } 
   
//   })} 
//   />
//   <label className="label">
//   {errors.password?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.password.message} </span>}
//   {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500'>{errors.password.message} </span>}
  
   
//   </label>
  
// </div>

// {signInError}
// <input type="submit" value='Login' className='btn w-full max-w-xs text-white'></input>
      
      
//     </form>
//     <p className='text-accent font-bold'><small>New to Doctors-Portal ? <Link to='/register' className='text-primary'>Create new account</Link></small></p>
//           <div className="divider">OR</div>
//           <button onClick={()=>signInWithGoogle()} className="btn btn-outline">Continue with Google</button>
         
//         </div>
//       </div>
//       </div>
//     );
// };

// export default Login;







// --------------------------------------

import React, { useEffect } from 'react';
import { useSignInWithGoogle,useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init'
import { useForm } from "react-hook-form";
import Loading from '../Pages/Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../hooks/useToken';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || gUser);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect( () =>{
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if(error || gError){
        signInError= <p className='text-red-500'><small>{error?.message || gError?.message }</small></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        {signInError}
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                    </form>
                    <p><small>New to Doctors Portal <Link className='text-primary' to="/register">Create New Account</Link></small></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;