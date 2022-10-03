import React from 'react';
import fluoride from '../../../src/assets/images/fluoride.png'
import cavity from '../../../src/assets/images/cavity.png'
import whitening from '../../../src/assets/images/whitening.png'
import Service from './Service';


const Services = () => {
    const services = [
        {
            _id:1,
            name:'Fluoride Treatment',
            img:fluoride,
            desc:'Fluoride is a natural mineral that builds strong teeth and prevents cavities. It’s been an essential oral health treatment for decades.'
        },
        {
            _id:2,
            name:'Cavity Filling',
            img:cavity,
            desc:'Most cavities take several months or years to form. However, multiple factors can influence how quickly tooth decay progresses'
        },
        {
            _id:3,
            name:'Teeth Whitening',
            img:whitening,
            desc:'If you want whiter teeth but also want to avoid the chemicals, this article lists many options that are both natural and safe'
        },
    ]
    return (

        <section className='my-28'>
        <div className='text-center'>
            <h2 className='text-3xl font-bold text-primary'>Service</h2>
            <h3 className='text-2xl font-bold text-accent'>Our Services</h3>
        </div>
            <div className='grid grid-cols-3 my-14 gap-5'>
            {
                services.map(service=><Service
                key={service._id}
                service= {service}
                ></Service>)
            }
        </div>
        </section>
    );
};

export default Services;