import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentService from './AppointmentService';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AvailableAppointments = ({date}) => {
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }

  
     

    return (
        <div>
       <p className='font-bold text-secondary text-center text-xl my-5'>Your selected date is: {format(date, 'PP')}</p>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
            services.map(service=><AppointmentService
            key={service._id}
            service={service}
            setTreatment= {setTreatment}
            ></AppointmentService>)
        }
       </div>
       {
            treatment && <BookingModal treatment={treatment} setTreatment={setTreatment}  date={date} refetch={refetch}></BookingModal>
       }
        </div>
    );
};

export default AvailableAppointments;