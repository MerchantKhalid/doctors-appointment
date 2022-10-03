import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Pages/Shared/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const { data:services,isLoading} = useQuery("services", () => fetch('http://localhost:5000/service').then(res=>res.json()))
    const imageStorageKey ='dec347bb9bc430ecb5b4e46e97849d08'

    const onSubmit = async data => {
      const image = data.image[0] 
      const formData = new FormData() 
      formData.append('image',image)
      const url =  `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
      fetch(url,{
        method:'POST',
        body:formData
      })
      .then(res => res.json())
      .then(result =>{
        if(result.success){
          const img = result.data.url
          const doctor ={
            name:data.name,
            email:data.email,
            specialty:data.specialty,
            img:img
          }
          fetch('http://localhost:5000/doctor',{
            method:'POST',
            headers:{
              'content-type':'application/json',
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body:JSON.stringify(doctor)
            
          })
          .then(res=>res.json())
          .then(inserted=>{
           if(inserted.insertedId){
            toast.success('Doctors added successfully')
            reset()
           }else{
            toast.error('Failed to add doctor')
           }
          })

        }
      })


       
      console.log(data);
     
    }
    if(isLoading)
    return <Loading />
    return (
        <div>
            <h2 className='text-2xl'>Add a Doctor</h2>
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
  <span className="label-text">Specialty</span>
</label>
<select {...register("specialty")} className="select input-bordered w-full max-w-xs">
  
{
    services.map(service=><option key={service._id} value={service.name}>{service.name}</option>)
}
  
  
</select>


</div>

<div className="form-control w-full max-w-xs">
<label className="label">
  <span className="label-text">Photo</span>
 
</label>
<input type="file" className="input input-bordered w-full max-w-xs"
{...register("image", {
  required:{
    value:true,
    message:'image is required'
  }
 
})} 
/>
<label className="label">
{errors.name?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.name.message} </span>}

</label>

</div>


<input type="submit" value='Add' className='btn w-full max-w-xs text-white'></input>
    
    
  </form>
        </div>
    );
};

export default AddDoctor;