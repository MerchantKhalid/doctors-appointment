import React from 'react';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div style={{background:`url(${bg})`}} className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} alt='Chair' className="w-20 max-w-sm rounded-lg shadow-2xl flex-1" />
    <div className='flex-1'>
      <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
      <p className="py-6">In dental treatment units, valves and pressure regulators from KENDRION are used to switch air and water with some hydrogen peroxide. Proportional valves, on the other hand, are particularly well suited to precisely control or regulate the flow of air and water in the dentist element. Particular attention is paid to the choice of material</p>
      <PrimaryButton>Get Started </PrimaryButton>
    </div>
  </div>
</div>
    );
};

export default Banner;