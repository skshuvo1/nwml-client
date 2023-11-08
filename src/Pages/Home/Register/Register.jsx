import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import img from '../../../assets/noman7.jpg'
import { authContext } from '../../../Provider/AuthProvider';

const Register = () => {
    const {createUser} = useContext(authContext);
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then(res => {
            const newUser = res.user;
            console.log(newUser);
            Swal.fire({
                title: "Good job!",
                text: "User has created successfully",
                icon: "success"
              });
              navigate('/')
        })
        .catch(error => Swal.fire({
            icon: "error",
            title: "Oops...",
            text: (error.message),
          }))
        
    }
    return (
        <div className="hero min-h-screen" style={{backgroundImage:`linear-gradient(to left,rgba(23, 59, 149, 0.1), rgb(0 55 46)), url(${img})`}}>
  <div className="hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-5xl font-bold text-red-400">Please Register !</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="your name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
         
           <p className='label-text-alt'>Already hava an account? Please <Link className='hover:underline' to='/login'>Login</Link></p>
          
        </div>
        <div className="form-control mt-6">
          <button  className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;