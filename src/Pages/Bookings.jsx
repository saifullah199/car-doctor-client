import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import { update } from "firebase/database";


const Bookings = () => {
    const {user} = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => setBookings(data))
    },[])

    const handleDelete =id => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              
            
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then( data => {
                console.log(data);
                if( data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your booking has been deleted.",
                        icon: "success"
                      });

                      const remaining = bookings.filter(booking => booking._id !== id);
                      setBookings(remaining)
                }
            })
            }
          });
    }

    const handleConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'Confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: "Confirmed!",
                    text: "Your booking has been confirmed.",
                    icon: "success"
                  });
                  const remaining = bookings.filter(booking => booking._id !== id);
                  const updated = bookings.find(booking => booking._id === id)
                  updated.status= 'confirm'
                  const newBookings =[updated, ...remaining];
                  setBookings(newBookings)
            }
        })
    }
    return (
        <div>
           booking {bookings.length} 
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
            
        </th>
        <th>Name</th>
        <th>Service</th>
        <th> Price </th>
        <th> Date </th>
        <th> Status </th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
     {
        bookings.map(booking => <BookingRow 
            key={booking._id}
            booking={booking}
            handleDelete = {handleDelete}
            handleConfirm = {handleConfirm}
            >
            

            </BookingRow>)
     }
      
     
      
    </tbody>
   
    
    
  </table>
</div>
        </div>
    );
};

export default Bookings;