import React from 'react';


const AppointmentService = ({service,setTreatment}) => {
    const {name,slots,price}= service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
  <div className="card-body flex items-center justify-center">
    <h2 className="card-title text-secondary font-bold">{name}</h2>
    <p className='font-bold'>
        {slots.length ? <span>{slots[0]}</span>: <span className='text-red-500'>Try another date</span>}
    </p>
    <p className='font-bold'>{slots.length} {slots.length>1?'spaces':'space'}  available</p>
   <p><small className='font-bold'>Price:${price}</small></p> 
    <div className="card-actions">
    
      <label onClick={()=>setTreatment(service)} htmlFor="booking-modal" disabled={slots.length===0} className="btn border-none uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary modal-button">Book Now</label>
    </div>
  </div>
</div>
    );
};

export default AppointmentService;