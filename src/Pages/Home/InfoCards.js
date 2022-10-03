import React from 'react';

const InfoCards = ({img,bg,title,desc,tag}) => {
    return (
        <div className={`card lg:card-side shadow-xl ${bg}`}>
  <figure className='pl-5'><img src={img} alt="Album" /></figure>
  <div className="card-body">
<h1 className='text-white font-bold'>{title}</h1>
<p>{tag}</p>
    <p className='text-white font-bold'>{desc}</p>
  
  </div>
</div>
    );
};

export default InfoCards;