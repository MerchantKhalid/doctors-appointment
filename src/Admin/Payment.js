import React from 'react';
import { useQuery } from 'react-query';
import { loadStripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import { useParams } from 'react-router-dom';
import Loading from '../Pages/Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51LmQNiChmfrUKRFtjL6QSg0JQ7BU7xUGWw0d1WvpQWhAsVZ4BWOiYwt4A8KQgdNmnitEAi2KrRco8CTIGkbY5jbj00o5SudJdu');
const Payment = () => {
    const {id} = useParams();
    const url = `http://localhost:5000/booking/${id}`;
    const  {data:appointment,isLoading} = useQuery(['booking',id],()=> fetch(url,{
        method:'GET',
        headers:{
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
      }).then(res=>res.json()))
      if(isLoading){
        return <Loading />
      }
    return (
        <div>
      
  <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
  <div className="card-body">
  <p className='card-title font-bold'>Hello {appointment.patientName}  </p>
    <p className="font-bold">Pay for: {appointment.treatment} </p>
    <p className='font-bold'>Your Appointment on:<span className='text-success'>{appointment.date}</span> at <span className='text-success'>{appointment.slot}</span> </p>
    <p className='font-bold'>Please Pay ${appointment.price}</p>
  </div>
</div>
    <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
      <div className="card-body">
      <Elements stripe={stripePromise}>
      <CheckoutForm appointment ={appointment} />
    </Elements>
       
        
      </div>
    </div>
  
        </div>
    );
};

export default Payment;