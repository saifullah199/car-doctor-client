import  { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';

const SignUp = () => {
    const [registerError, setRegisterError] = useState('')
  const [success, setSuccess] = useState('')
  const [showPassword, setShowPassword] = useState(false)

   const {createUser} = useContext(AuthContext)
  const navigate = useNavigate()
  
  const handleRegister = e =>{
    e.preventDefault();
    // console.log(e.currentTarget)
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const photo = form.get('photo')
    const email = form.get('email')
    const password = form.get('password')

    // console.log(name,photo, email,password)
    if (password.length < 6){
      setRegisterError('Password should be at least 6 characters or longer');
      return;
      
    }
    else if(!/[A-Z]/.test(password)){
      setRegisterError('Your password should have at least one upper case characters.')
      return
    }
    else if (!/[a-z]/.test(password)){
      setRegisterError('your password should have at least one lowercase characters ')
      return
    }

    setRegisterError('')
    setSuccess('')

    // create user

    createUser(email,password)
    .then(result =>{
      // console.log(result.user)
      if(result.user){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Congrats! You are a member now",
          showConfirmButton: false,
          timer: 1500
        });
      }
      navigate('/')
    })
    .catch(error => {
      console.error(error);
      setRegisterError(error.message)
    })

  }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register Now!</h1>
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister}   className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input type="text" name="name" placeholder="Your Name" className="input input-bordered"  
          required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control relative ">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input  type= { showPassword ? "text" : "password"} 
           name= "password" 
          placeholder="password"  
          className="input relative input-bordered"  required />
          <span className=" absolute top-14 right-0" onClick={() => setShowPassword(!showPassword)}> 
          
           {
            showPassword ? <FaEyeSlash /> : <FaRegEye />
           }
             </span>
          
        </div>
        <div className="form-control mt-6">
          <button  className="btn btn-primary">SignUp </button>
        </div>
        <div>
            <p>Already have an account? <Link className="text-primary" to="/signin">Login</Link></p>
        </div>
      </form>

      {
        registerError && <p className="text-red-700"> {registerError} </p>
      }

      {
        success && <p className="text-green-600"> {success} </p>
      }
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;