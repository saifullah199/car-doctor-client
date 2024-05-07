import { useEffect, useState } from "react";
import Service from "./Service";

const OurService = () => {

    const [services, setServices] = useState([])

    useEffect(() =>{
    fetch('https://car-doctor-server-gamma-brown.vercel.app/services')
    .then(res => res.json())
    .then(data => {
        setServices(data)
    } )
    
    },[])
    return (
        <div className="my-7">
            <div className="text-center">
            <h3 className="text-orange-500 font-bold"> Service</h3>
            <h2 className="text-5xl font-bold"> Our Service Area </h2>
            <p> the majority have suffered alteration in some form, by 
                injected humour, or randomised <br /> words which donot look even
                 slightly believable.  </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <Service key={service._id}
                    service={service}
                    >


                    </Service>)
                }
            </div>
        </div>
    );
};

export default OurService;