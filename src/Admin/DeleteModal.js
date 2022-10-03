import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({deleting,refetch,setDeleting} ) => {
    const {name,email}  = deleting
    const handleDelete = () =>{
        fetch( `http://localhost:5000/doctor/${email}`,{
            method:'DELETE',
            headers:{
                
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
              },
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                toast.success(`Doctor ${name} has been deleted`)
                setDeleting(null)
                refetch()
            }
        })
    }
    
    return (
        <div>
        



<input type="checkbox" id="delete-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg red-500">Are you sure want to delete {name}</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div className="modal-action">
    <button onClick={()=>handleDelete()} className='btn btn-xs btn-error text-white'>Delete</button>
      <label htmlFor="delete-modal" className="btn btn-xs btn-error text-white">Cancel</label>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default DeleteModal;