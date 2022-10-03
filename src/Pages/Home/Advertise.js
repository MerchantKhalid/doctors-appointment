import React from 'react';
import treatment from '../../../src/assets/images/treatment.png'
import bg from '../../assets/images/bg.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Advertise = () => {
    return (
        <section style={{background:`url(${bg})`}}  className='my-28'>
            <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img src={treatment} alt='treatment' className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">German Dentist Recognized for Extracting World’s Longest Human Tooth</h1>
      <p className="py-6">Dr. Max Lukas, a dentist from the city of Offenbach in Hasse, Germany, pulled the 37.2-millimeter tooth from a patient in 2018. The dentist spent almost a year submitting the necessary paperwork and having the tooth checked before being listed by the Guinness Book of Records. Almost three-quarters of the tooth’s length was the root below the gumline. </p>
      <PrimaryButton>Explore More</PrimaryButton>
    </div>
  </div>
</div>
        </section>
    );
};

export default Advertise;