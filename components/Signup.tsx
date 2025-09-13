import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import Logo from './Logo';

const Signup: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccess('');
    setError('');
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    setTimeout(() => {
      if (password.length < 6) {
        setError('Password must be at least 6 characters long.');
        setIsLoading(false);
        return;
      }

      const defaultAvatar = `https://api.dicebear.com/8.x/initials/svg?seed=${encodeURIComponent(name)}`;

      setSuccess('Account created successfully! Redirecting...');
      login(email, name, defaultAvatar);
      setTimeout(() => navigate('/dashboard'), 1500);
    }, 1000);
  };

  return (
    <main className="py-20 animate-fadeIn">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block">
                <Link to="/">
                    <Logo />
                </Link>
            </div>
            <h1 className="text-3xl font-bold text-white mt-4">Create your account</h1>
          </div>
          
          <div className="glass-card p-8 shadow-2xl shadow-[var(--accent-violet)]/20">
            <form onSubmit={handleSubmit} className="space-y-6">
               {error && <div className="bg-red-500/20 border border-red-500 text-red-300 p-3 rounded-md text-sm animate-message">{error}</div>}
               {success && <div className="bg-green-500/20 border border-green-500 text-green-300 p-3 rounded-md text-sm animate-message">{success}</div>}
               <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  className="w-full bg-transparent border border-[var(--accent-violet)]/50 text-white rounded-md p-3 focus:ring-[var(--accent-cyan)] focus:border-[var(--accent-cyan)] transition"
                  placeholder="John Doe"
                  disabled={isLoading}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="w-full bg-transparent border border-[var(--accent-violet)]/50 text-white rounded-md p-3 focus:ring-[var(--accent-cyan)] focus:border-[var(--accent-cyan)] transition"
                  placeholder="you@example.com"
                  disabled={isLoading}
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                   Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="new-password"
                  required
                  className="w-full bg-transparent border border-[var(--accent-violet)]/50 text-white rounded-md p-3 focus:ring-[var(--accent-cyan)] focus:border-[var(--accent-cyan)] transition"
                  placeholder="••••••••"
                  disabled={isLoading}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center btn-primary py-3 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isLoading}
                >
                  {isLoading ? 'Creating Account...' : 'Create Account'}
                </button>
              </div>
            </form>
             <p className="mt-8 text-center text-sm text-gray-400">
                Already have an account?{' '}
                <Link to="/login" className="font-medium text-[var(--accent-cyan)] hover:text-white">
                    Sign in
                </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;