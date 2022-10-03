import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({doctor,index,refetch,setDeleting}) => {
    const {name,specialty,img,email} =doctor;
    
    return (
        <tr>
        <th>{index+1}</th>
        <td><div className="avatar">
  <div className="w-16 rounded">
    <img src={img} alt="doctor"/>
  </div>
</div></td>
        <td>{name}</td>
        <td>{specialty}</td>
        <td>
        <label onClick={()=>setDeleting(doctor)} htmlFor="delete-modal" className="btn btn-xs btn-error text-white">Delete</label>
       </td>
      </tr>
    );
};

export default DoctorRow;