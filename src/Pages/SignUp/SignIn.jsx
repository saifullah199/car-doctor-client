import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../Firebase/firebase.config";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";


const SignIn = () => {
     const {user, signIn, } = useContext(AuthContext)
    const navigate = useNavigate()

    const googleProvider = new GoogleAuthProvider();
   

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
          const loggedInUser = result.user;
          console.log(loggedInUser)
          if(loggedInUser){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "You are successfully loggedin",
              showConfirmButton: false,
              timer: 1500
            });
          }
          // navigate(location?.state? location?.state : '/');
          
        })
        .catch(error =>{
          console.log('error', error.message)
        })
    
      }

      

    const handleLogin = e => {
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)
    
    
        signIn(email,password)
        .then(result => {
          console.log(result.user)

          // const loggedUser = {email}
          // axios.post('https://car-doctor-server-gamma-brown.vercel.app/jwt', loggedUser)
          // .then(res =>{
          //  console.log(res)
            
          // })
          if(result.user){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "You are successfully loggedin",
              showConfirmButton: false,
              timer: 1500
            });
          }
          e.target.reset();
          // navigate(location?.state? location?.state : '/');

    
          
        })
        .catch( error => {
          console.error(error)
        })
      }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      
       
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-5xl font-bold">Login now!</h1>
      <form onSubmit={handleLogin}   className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button  className="btn btn-primary">Login</button>
        </div>

        <div className="flex gap-4">
           <button onClick={handleGoogleSignIn}> <FaGoogle /></button>
          
        </div>
        
        <div>
            <p>Do not have an account? <Link className="text-primary" to="/register">Register</Link></p>
        </div>
      </form>
    </div>
  </div>
</div>

        </div>
    );
};

export default SignIn;