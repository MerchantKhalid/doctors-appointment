import React from 'react';
import { format } from 'date-fns';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
const BookingModal=({date,treatment,setTreatment,refetch})=>{

  const {_id,name,slots,price}= treatment;
  const [user,loading] = useAuthState(auth);
  const formattedDate = format(date,'PP') 
 
  
  const handleBooking=e=>{
    e.preventDefault()
    const slot= e.target.slot.value;
    const booking = { 
      treatmentId:_id,
      treatment:name,
      date:formattedDate,
      price,
      slot,
      patient:user.email,
      patientName:user.displayName,
      phone:e.target.phone.value

    }

    fetch('http://localhost:5000/booking',{
        method:'POST',
        headers:{
          'content-type': 'application/json',
         },
         body:JSON.stringify(booking)

         
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.success)  {
        toast(`Appointment successful on ${formattedDate} at ${slot}`)
      }
      else{
        toast.error(`You already have an appointment on ${formattedDate} at ${slot}`)
      }
     
      setTreatment(null)
      refetch()
    })

    
    
  }
    return (
        <div>
<input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  
      <h2 className='text-secondary text-xl font-bold'>Booking for {name}</h2>
      <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-1'>
      <input type="text" disabled value={format(date,'PP')} className="input input-bordered w-full max-w-xs"/>
     {/* time slot */}
     <select name='slot' className="select select-bordered w-full max-w-xs">
     {slots.map((slot,index)=><option
     key={index}
       value={slot}>{slot}</option>)}
  
</select>
  <input type="text" name ='name' placeholder="Your Name " className="input input-bordered w-full max-w-xs"/>
  <input type="text" name ='email' disabled value={user?.email || '' } className="input input-bordered w-full max-w-xs"/>
  <input type="text" name ='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs"/>
  <input type="submit" value='submit' placeholder="Type here" className="btn btn-secondary text-white input-bordered w-full max-w-xs"/>
      </form>
      
   
  </div>
</div>
        </div>
    );
};

export default BookingModal;