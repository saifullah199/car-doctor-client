import axios from "axios"

const axiosSecure = axios.create({
    baseURL : 'https://car-doctor-server-gamma-brown.vercel.app',
    withCredentials: true
})


const useAxiosSecure =() => {
    return axiosSecure
}

export default useAxiosSecure

