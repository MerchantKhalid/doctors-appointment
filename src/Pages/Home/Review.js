import React from 'react';

const Review = ({review}) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl"> 
            <div className="card-body">

             <p>{review.review}</p>
             <div className='flex' >
                     <div className="avatar">
                   <div className="w-24 rounded-full ring ring-primary ring-offset-base-100">
                <img src={review.img} alt='people' />
             </div>
            </div>
<div className='ml-3 items-center justify-center mt-5'>
    
<h2 className="card-title">{review.name}</h2>
<h2 className="card-title">{review.location}</h2>
</div>


             </div>
   
  </div>
  
        </div>
    );
};

export default Review;