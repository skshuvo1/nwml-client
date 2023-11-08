import React, { useContext } from 'react';
import img from '../../../assets/noman7.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { authContext } from '../../../Provider/AuthProvider';

const Login = () => {
    const navigate = useNavigate()
    const { loggedUser, googleSignIn } = useContext(authContext);
    const location = useLocation();
    console.log(location);
    const from = location.state?.from.pathname || '/';

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loggedUser(email, password)
            .then(res => {
                const userLogged = res.user;
                console.log(userLogged);
                Swal.fire({
                    title: "Good job!",
                    text: "User has logged successfully",
                    icon: "success"
                });
                navigate(from, { replace: true })
            })
            .catch(error => Swal.fire({
                icon: "error",
                title: "Oops...",
                text: (error.message),
            }))

    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error.message))

    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `linear-gradient(to left,rgba(23, 59, 149, 0.1), rgb(0 55 46)), url(${img})` }}>
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-red-400">Please Login !</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <p className='label-text-alt'>New to here? Please <Link className='hover:underline' to='/register'>Register</Link></p>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <button onClick={handleGoogleSignIn} className="btn">Sign In With Google</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;