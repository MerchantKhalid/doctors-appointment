import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Pages/Shared/Loading';
import DeleteModal from './DeleteModal';
import DoctorRow from './DoctorRow';

const ManageDoctor = () => {
  const [deleting,setDeleting] = useState(null)
    const {data:doctors,isLoading,refetch} = useQuery('doctors',() => fetch('http://localhost:5000/doctor',{
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json() ))
    if(isLoading){
         return <Loading />
    }
    return (
        <div>
            <h2>doctor: {doctors.length}</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
    {
        doctors.map((doctor,index)=><DoctorRow
        key={doctor._key}
        doctor={doctor}
        index={index}
        refetch={refetch}
        setDeleting ={setDeleting}
        ></DoctorRow>)
    }
     
      
    </tbody>
  </table>
</div>
{
  deleting && <DeleteModal refetch ={refetch} setDeleting ={setDeleting}  deleting ={deleting}></DeleteModal>
}
        </div>
    );
};

export default ManageDoctor;