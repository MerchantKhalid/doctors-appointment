import React from 'react';
import appointment from '../../assets/images/appointment.png'
import doctor from '../../assets/images/doctor.png'
import PrimaryButton from '../Shared/PrimaryButton';


const Appointment = () => {
    return (
        <section style={{background:`url(${appointment})`}} className='my-28'>
       <div className='flex items-center justify-center'>
       <div className='flex-1 hidden lg:block'>
       <img className='mt-[-120px]' src={doctor} alt='doctor'></img> 

        </div>
        <div className='flex-1 p-5'>

            <div>
                <h1 className='text-primary font-bold text-3xl'>Appointment</h1>
                <h3 className='text-white font-bold text-2xl my-3'>Make an Appointment Today</h3>
                <p className='text-white font-bold my-3'>A good dental clinic app will help dentists manage their office conveniently. The rise of modern technology has paved the way for a paperless office. it is beneficial for dental practice as this can help grow the business while giving you the time to focus on patient care.Choosing a dental software that will fit your clinic is not easy. There are a lot of factors to consider, aside from cost and maintenance, before making a decision which to pick. Some of these are:</p>
                <PrimaryButton>Get Started </PrimaryButton>
            </div>
        
        </div>
       </div>

        </section>
    );
};

export default Appointment;