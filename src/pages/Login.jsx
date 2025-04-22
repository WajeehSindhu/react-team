import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { auth, googleProvider } from '../firebase'; 
import { signInWithPopup } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      await signInWithPopup(auth, googleProvider);
      navigate('/');
    } catch (err) {
      setError('Failed to log in with Google: ' + err.message);
    } finally {
      setLoading(false);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Failed to log in: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-blue-300 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg shadow-blue-500 hover:shadow-blue-700  dark:shadow-red-400 dark:hover:shadow-red-600 transition-all duration-300 ease-in-out">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Sign in to your account
          </h2>
        </div>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            {error}
          </div>
        )}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="email"
              required
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none rounded-md w-full p-3 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-800"
            />
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-md w-full p-3 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-800"
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-y-2'>
            <button
              type="submit"
              disabled={loading}
              className="text-lg p-2 rounded-lg bg-blue-400 text-white hover:bg-blue-500 w-full transition-all duration-300 ease-in-out zoom-target"
            >
              {loading ? 'Logging in...' : 'Log In'}
            </button>
            <button
              onClick={handleGoogleLogin}
              className="flex justify-center items-center gap-x-4 group text-lg p-2 bg-blue-400 hover:bg-blue-500 rounded-lg  w-full transition-all duration-300 ease-in-out zoom-target"
            >
              <span className="text-2xl text-red-500 group:hover:text-red-300">
                <FaGoogle />
              </span>
              <span className='text-white'>Log in with Google</span>
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Don’t have an account?{' '}
            <Link
              to="/signup"
              className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
