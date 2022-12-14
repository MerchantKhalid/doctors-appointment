import React, { useState } from 'react';
import {CardElement,useStripe,useElements} from '@stripe/react-stripe-js';
import { useEffect } from 'react';

const CheckoutForm = ({appointment}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError,setCardError] = useState('') 
    const [success,setSuccess] = useState('') 
    const [processing,setProcessing] = useState(false) 
    const [transactionId,setTransactionId] = useState('') 
    const [clientSecret,setClientSecret] = useState('')

    const {_id,patient,patientName,price} = appointment
    
    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent',{
            method:'POST',
            
            headers:{
                'content-type':'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
              },
              body:JSON.stringify({price})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data?.clientSecret){
                setClientSecret(data.clientSecret)
            }
        })


    },[price])
    
    const handleSubmit =async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return;
          }
          const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });

      
       setCardError(error?.message || '');
       setSuccess('')
       setProcessing(true)
    
    //    confirm card payment
    
    const {paymentIntent,error:intentError} = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: card,
      billing_details: {
        name: patientName,
        email:patient,
      },
    },
  })
      if(intentError){
        setCardError(intentError?.message)
        setProcessing(false)
        
    }
    else{
        setCardError('')
        setTransactionId(paymentIntent.id)
        setSuccess('Payment Successfull')

        // store payment on database
        const payment = {
            appointment:_id,
            transactionId:paymentIntent.id
        }

        fetch( `http://localhost:5000/booking/${_id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
              },
              body:JSON.stringify(payment)
        }).then(res=>res.json())
        .then(data=>{
            setProcessing(false)
        })

    }

    }

    return (
       <>
         <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-xs mt-2' type="submit" disabled={!stripe||!clientSecret ||success}>
          Pay
        </button>
      </form>
      {
        cardError && <p className='text-red-500'>{cardError}</p>
      }
      {
        success && <div>
        <p className='text-green-500'>{success}</p>
        <p className='text-green-500'>Payment transaction id is:<span className='text-orange-600'>{transactionId}</span></p>
        </div>
      }
       </>
    );
};

export default CheckoutForm;