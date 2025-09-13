import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { useAuth } from './AuthContext';

const ForgotPasswordModal: React.FC<{ isOpen: boolean; onClose: () => void; }> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setMessage('');
        setEmail('');
        setIsLoading(false);
      }, 300);
    }
  }, [isOpen]);

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    
    setTimeout(() => {
      setMessage(`If an account exists for ${email}, a password reset link has been sent.`);
      setIsLoading(false);
      setTimeout(() => {
        onClose();
      }, 3000);
    }, 1000);
  };
  
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      style={{ animation: 'modalFadeIn 0.3s ease-out' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="forgot-password-title"
    >
      <div 
        className="relative glass-card p-8 rounded-lg shadow-2xl w-full max-w-md"
        style={{ animation: 'modalPopIn 0.3s ease-out' }}
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <h2 id="forgot-password-title" className="text-2xl font-bold text-white text-center mb-6">Reset Password</h2>
        
        {message ? (
          <div className="bg-green-500/20 border border-green-500 text-green-300 p-3 rounded-md text-sm text-center animate-message">
            {message}
          </div>
        ) : (
          <form onSubmit={handleModalSubmit} className="space-y-6">
            <p className="text-gray-400 text-sm text-center">Enter your account's email address and we will send you a link to reset your password.</p>
            <div>
              <label htmlFor="reset-email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="reset-email"
                name="email"
                required
                className="w-full bg-transparent border border-[var(--accent-violet)]/50 text-white rounded-md p-3 focus:ring-[var(--accent-cyan)] focus:border-[var(--accent-cyan)] transition"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center btn-primary py-3 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Reset Link'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] = useState(false);
  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsForgotPasswordModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    setTimeout(() => {
      if (email === 'test@example.com' && password === 'password') {
        setSuccess('Login successful! Redirecting to dashboard...');
        login(email, 'Test User');
        setTimeout(() => navigate('/dashboard'), 1500);
      } else {
        setError('Invalid email or password. (Hint: test@example.com / password)');
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <>
      <main className="py-20 animate-fadeIn">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block">
                  <Link to="/">
                      <Logo />
                  </Link>
              </div>
              <h1 className="text-3xl font-bold text-white mt-4">Sign in to your account</h1>
            </div>
            
            <div className="glass-card p-8 shadow-2xl shadow-[var(--accent-violet)]/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && <div className="bg-red-500/20 border border-red-500 text-red-300 p-3 rounded-md text-sm animate-message">{error}</div>}
                {success && <div className="bg-green-500/20 border border-green-500 text-green-300 p-3 rounded-md text-sm animate-message">{success}</div>}
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
                    defaultValue="test@example.com"
                    disabled={isLoading}
                  />
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                      Password
                      </label>
                      <div className="text-sm">
                          <button
                            type="button"
                            onClick={() => setIsForgotPasswordModalOpen(true)}
                            className="font-medium text-[var(--accent-cyan)] hover:text-white bg-transparent border-none cursor-pointer"
                          >
                              Forgot password?
                          </button>
                      </div>
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    autoComplete="current-password"
                    required
                    className="w-full bg-transparent border border-[var(--accent-violet)]/50 text-white rounded-md p-3 focus:ring-[var(--accent-cyan)] focus:border-[var(--accent-cyan)] transition"
                    placeholder="••••••••"
                    defaultValue="password"
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center btn-primary py-3 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Signing in...' : 'Sign in'}
                  </button>
                </div>
              </form>
               <p className="mt-8 text-center text-sm text-gray-400">
                  Not a member?{' '}
                  <Link to="/signup" className="font-medium text-[var(--accent-cyan)] hover:text-white">
                      Sign up now
                  </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <ForgotPasswordModal isOpen={isForgotPasswordModalOpen} onClose={() => setIsForgotPasswordModalOpen(false)} />
    </>
  );
};

export default Login;