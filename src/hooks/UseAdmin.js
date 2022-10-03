import { useEffect, useState } from "react";

const UseAdmin = user => {
     const [admin, setAdmin] = useState(false);
     const [adminLoadig,setAdminLoadig] =useState(true)
     useEffect(() => {
        const email = user?.email;
        if(email){
            fetch(`http://localhost:5000/admin/${email}`, {
                method:'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization:`Bearer ${localStorage.getItem('accessToken')}`
                }
                
            })
            .then(res=>res.json())
            .then(data => {
                
                setAdmin(data.admin);
                setAdminLoadig(false)
            })

        }
       

     },[user])
     return [admin,adminLoadig]
}
export default UseAdmin;