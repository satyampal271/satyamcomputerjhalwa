import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const MyAccount: React.FC = () => {
  const { user, updateUser } = useAuth();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [detailsSuccessMessage, setDetailsSuccessMessage] = useState('');
  const [isDetailsLoading, setIsDetailsLoading] = useState(false);
  const [showDetailsForm, setShowDetailsForm] = useState(true);

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordSuccessMessage, setPasswordSuccessMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [isPasswordLoading, setIsPasswordLoading] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(true);

  useEffect(() => {
    if(!user) return;
    setName(user.name);
    setEmail(user.email);
  }, [user]);

  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const newProfilePictureUrl = reader.result as string;
        updateUser({ profilePictureUrl: newProfilePictureUrl });
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDetailsLoading(true);
    setDetailsSuccessMessage('');
    setTimeout(() => {
      updateUser({ name, email });
      setDetailsSuccessMessage('Your account details have been updated successfully!');
      setIsDetailsLoading(false);
      setShowDetailsForm(false);
      setTimeout(() => {
        setDetailsSuccessMessage('');
        setShowDetailsForm(true);
      }, 3000);
    }, 1000);
  };
  
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPasswordLoading(true);
    setPasswordSuccessMessage('');
    setPasswordErrorMessage('');

    if (newPassword !== confirmPassword) {
      setPasswordErrorMessage("New passwords do not match.");
      setIsPasswordLoading(false);
      return;
    }
     if (newPassword.length < 6) {
      setPasswordErrorMessage("New password must be at least 6 characters long.");
      setIsPasswordLoading(false);
      return;
    }

    setTimeout(() => {
      console.log('Password change requested.');
      setPasswordSuccessMessage('Password changed successfully!');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setIsPasswordLoading(false);
      setShowPasswordForm(false);
      setTimeout(() => {
          setPasswordSuccessMessage('');
          setShowPasswordForm(true);
      }, 3000);
    }, 1000);
  };

  return (
    <main className="py-20 animate-fadeIn">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <button 
              onClick={() => navigate('/dashboard')}
              className="text-[var(--accent-cyan)] hover:text-white transition-colors mb-8 inline-block"
            >
              &larr; Back to Dashboard
            </button>
            <div className="glass-card p-8 space-y-12">
            <div>
                <h2 className="text-2xl font-bold text-white mb-6">Profile Picture</h2>
                <div className="flex items-center space-x-6">
                <img
                    src={user?.profilePictureUrl || `https://api.dicebear.com/8.x/initials/svg?seed=${user?.name || 'User'}`}
                    alt="Profile Avatar"
                    className="w-24 h-24 rounded-full object-cover border-2 border-[var(--accent-violet)] shadow-lg"
                    loading="lazy"
                />
                <div>
                    <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleProfilePictureChange}
                    className="hidden"
                    accept="image/png, image/jpeg"
                    />
                    <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-[var(--accent-violet)]/80 text-white font-bold py-2 px-4 rounded-lg hover:bg-[var(--accent-violet)] transition-colors"
                    >
                    Change Picture
                    </button>
                    <p className="text-xs text-gray-400 mt-2">PNG or JPG. Max 1MB.</p>
                </div>
                </div>
            </div>

            <hr className="border-[var(--accent-violet)]/30" />

            <div>
                <h2 className="text-2xl font-bold text-white mb-6">My Account Details</h2>
                {detailsSuccessMessage && (
                <div className="bg-green-500/20 border border-green-500 text-green-300 p-3 rounded-md text-sm mb-6 animate-message">
                    {detailsSuccessMessage}
                </div>
                )}
                {showDetailsForm && (
                    <form onSubmit={handleDetailsSubmit} className="space-y-6">
                        <div>
                        <label htmlFor="account-name" className="block text-sm font-medium text-gray-300 mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="account-name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full bg-transparent border border-[var(--accent-violet)]/50 text-white rounded-md p-3 focus:ring-[var(--accent-cyan)] focus:border-[var(--accent-cyan)] transition"
                            disabled={isDetailsLoading}
                        />
                        </div>
                        <div>
                        <label htmlFor="account-email" className="block text-sm font-medium text-gray-300 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="account-email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full bg-transparent border border-[var(--accent-violet)]/50 text-white rounded-md p-3 focus:ring-[var(--accent-cyan)] focus:border-[var(--accent-cyan)] transition"
                            disabled={isDetailsLoading}
                        />
                        </div>
                        <div>
                        <button
                            type="submit"
                            className="w-full md:w-auto inline-flex items-center justify-center btn-primary py-3 px-8 rounded-md disabled:opacity-50"
                            disabled={isDetailsLoading}
                        >
                            {isDetailsLoading && (
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            )}
                            {isDetailsLoading ? 'Saving...' : 'Save Changes'}
                        </button>
                        </div>
                    </form>
                )}
            </div>

            <hr className="border-[var(--accent-violet)]/30" />
            
            <div>
                <h2 className="text-2xl font-bold text-white mb-6">Change Password</h2>
                {passwordSuccessMessage && (
                    <div className="bg-green-500/20 border border-green-500 text-green-300 p-3 rounded-md text-sm mb-6 animate-message">
                        {passwordSuccessMessage}
                    </div>
                )}
                {showPasswordForm && (
                <>
                    {passwordErrorMessage && (
                        <div className="bg-red-500/20 border border-red-500 text-red-300 p-3 rounded-md text-sm mb-6 animate-message">
                            {passwordErrorMessage}
                        </div>
                    )}
                    <form onSubmit={handlePasswordSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="current-password" className="block text-sm font-medium text-gray-300 mb-2">Current Password</label>
                            <input type="password" id="current-password" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} required className="w-full bg-transparent border border-[var(--accent-violet)]/50 text-white rounded-md p-3 focus:ring-[var(--accent-cyan)] focus:border-[var(--accent-cyan)] transition" disabled={isPasswordLoading} />
                        </div>
                        <div>
                            <label htmlFor="new-password" className="block text-sm font-medium text-gray-300 mb-2">New Password</label>
                            <input type="password" id="new-password" value={newPassword} onChange={e => setNewPassword(e.target.value)} required className="w-full bg-transparent border border-[var(--accent-violet)]/50 text-white rounded-md p-3 focus:ring-[var(--accent-cyan)] focus:border-[var(--accent-cyan)] transition" disabled={isPasswordLoading} />
                        </div>
                        <div>
                            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300 mb-2">Confirm New Password</label>
                            <input type="password" id="confirm-password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required className="w-full bg-transparent border border-[var(--accent-violet)]/50 text-white rounded-md p-3 focus:ring-[var(--accent-cyan)] focus:border-[var(--accent-cyan)] transition" disabled={isPasswordLoading} />
                        </div>
                        <div>
                          <button
                            type="submit"
                            className="w-full md:w-auto inline-flex items-center justify-center btn-primary py-3 px-8 rounded-md disabled:opacity-50"
                            disabled={isPasswordLoading}
                          >
                              {isPasswordLoading && (
                                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                  </svg>
                              )}
                              {isPasswordLoading ? 'Changing...' : 'Change Password'}
                          </button>
                        </div>
                    </form>
                </>
                )}
            </div>
          </div>
        </div>
    </main>
  );
};

export default MyAccount;