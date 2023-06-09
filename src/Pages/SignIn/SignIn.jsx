import React, { useContext, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const SignIn = () => {
    useTitle('Login')

    const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    // console.log('login page location', location);
    const from = location.state?.from?.pathname || '/'

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    useTitle('login');

    // console.log(email, password);
    const handleLogin = (event) => {
        event.preventDefault();
        if (!(email && password)) {
            setError('Something went wrong!');
        }
        else {
            setError("Email & Password doesn\'t match")
        }
        
        if ((email, password)) {
            signIn(email, password)
                .then((result) => {
                    console.log(result.user);
                    navigate(from, { replace: true })
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
    };

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);

            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    const handleGithubSignIn = () => {
        githubSignIn(githubProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);

            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900 rounded-3xl">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-4">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Welcome back
                            </h1>
                            <div className='flex gap-2'>
                                <p>
                                    <button
                                        onClick={handleGoogleSignIn}
                                        type="submit" className="btn btn-outline"> Sign in with Google</button>
                                </p>
                                <p>
                                    <button
                                        onClick={handleGithubSignIn}
                                        type="submit" className="btn btn-outline">Sign in with Github</button>
                                </p>
                            </div>
                            <hr />
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="email" className="custom_label_field">Your email</label>
                                    <input onChange={(e) => setEmail(e.target.value)}
                                        type="email" name="email" id="email" className="custom_input_field dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required="" />
                                </div>
                                <div>
                                    <label for="password" className="custom_label_field">Password</label>
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password" name="password" id="password" placeholder="••••••••" className="custom_input_field dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                </div>
                                <button
                                    onClick={handleLogin}
                                    type="submit" className="w-full text-dark bg-orange-400 hover:bg-orange-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet?
                                    <Link className='ms-1 font-medium text-primary-600 italic hover:underline dark:text-primary-500' to='/signup'>Signup</Link>
                                </p>
                                <p className='text-red-500 text-center'>{error}</p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignIn;