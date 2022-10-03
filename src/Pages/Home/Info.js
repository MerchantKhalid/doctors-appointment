import React from 'react';

import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import InfoCards from './InfoCards';

const Info = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 '>
            <InfoCards desc="08.00 - 18.00" bg='bg-gradient-to-r from-secondary to-primary' title="Opening Hours" img={clock}></InfoCards>
            <InfoCards desc="34 Avenue Laplace" bg='bg-accent' title="Our Location" img={marker}></InfoCards>
            <InfoCards desc="0758202455" bg='bg-gradient-to-r from-secondary to-primary' title="Contact Us" img={phone}></InfoCards>
        </div>
    );
};

export default Info;