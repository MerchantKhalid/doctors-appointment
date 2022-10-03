import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id:1,
            name:'Mohammad',
            review:'Looking for the right dental practice management software for your clinic needs to have a lot of features and options to consider.There are many dental clinic software available out the',
            location:'London',
            img:people1
        },
        {
            _id:2,
            name:'Hasan',
            review:'Looking for the right dental practice management software for your clinic needs to have a lot of features and options to consider.There are many dental clinic software available out the',
            location:'Paris',
            img:people2
        },
        {
            _id:3,
            name:'Khalid',
            review:'Looking for the right dental practice management software for your clinic needs to have a lot of features and options to consider.There are many dental clinic software available out the',
            location:'Lisbon',
            img:people3
        }
    ]
    return (
        <section>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-2xl text-primary font-bold'>Testimonials</h2>
                    <h1 className='text-3xl'>What our patient says</h1>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt='quote'></img>
                </div>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                {
                    reviews.map(review=><Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;