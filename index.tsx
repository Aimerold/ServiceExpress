
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { RotateCcw, Plus, LogOut, MapPin, DollarSign, Briefcase, User as UserIcon } from 'lucide-react';

// --- Types ---
type UserRole = 'client' | 'worker';

interface User {
  username: string;
  role: UserRole;
  city: string;
}

// --- Components ---

const LoginScreen = ({ onLogin, onNavigateToRegister }: { onLogin: (u: User) => void, onNavigateToRegister: () => void }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in real app, validate against DB
    if (username && password) {
      onLogin({ username, role: 'client', city: 'New York' }); // Default mock user
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 animate-in fade-in zoom-in-95 duration-300">
        <div className="text-center mb-8">
          <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-200">
            <Briefcase className="text-white w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-500 mt-2">Please sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 active:scale-[0.98] transition-all shadow-md hover:shadow-lg"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <button onClick={onNavigateToRegister} className="text-blue-600 font-semibold hover:underline">
            Create account
          </button>
        </div>
      </div>
    </div>
  );
};

const RegisterScreen = ({ onRegister, onNavigateToLogin }: { onRegister: (u: User) => void, onNavigateToLogin: () => void }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [role, setRole] = useState<UserRole>('client');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password && city) {
      onRegister({ username, role, city });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 animate-in fade-in zoom-in-95 duration-300">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Create Account</h1>
          <p className="text-gray-500 mt-2">Join us as a Client or Worker</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="e.g. New York"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">I want to be a</label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setRole('client')}
                className={`p-3 rounded-lg border-2 text-center transition-all ${
                  role === 'client' 
                    ? 'border-blue-600 bg-blue-50 text-blue-700 font-medium' 
                    : 'border-gray-200 text-gray-500 hover:border-gray-300'
                }`}
              >
                Client
              </button>
              <button
                type="button"
                onClick={() => setRole('worker')}
                className={`p-3 rounded-lg border-2 text-center transition-all ${
                  role === 'worker' 
                    ? 'border-blue-600 bg-blue-50 text-blue-700 font-medium' 
                    : 'border-gray-200 text-gray-500 hover:border-gray-300'
                }`}
              >
                Worker
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 active:scale-[0.98] transition-all shadow-md hover:shadow-lg mt-4"
          >
            Register
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <button onClick={onNavigateToLogin} className="text-blue-600 font-semibold hover:underline">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

const Dashboard = ({ user, onLogout }: { user: User, onLogout: () => void }) => {
  const [showPostJob, setShowPostJob] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  
  // Job Form State
  const [newJobTitle, setNewJobTitle] = useState('');
  const [newJobLoc, setNewJobLoc] = useState('');
  const [newJobPrice, setNewJobPrice] = useState('');
  const [newJobItems, setNewJobItems] = useState('');
  
  const clearJobForm = () => {
    setNewJobTitle('');
    setNewJobLoc('');
    setNewJobPrice('');
    setNewJobItems('');
  };

  const handlePostJob = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ newJobTitle, newJobLoc, newJobPrice, newJobItems });
    setShowPostJob(false);
    clearJobForm();
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <div className="max-w-5xl mx-auto p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-8 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Briefcase className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Uber Service</h1>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <UserIcon className="w-3 h-3" />
                <span className="font-medium capitalize">{user.username}</span>
                <span className="text-gray-300">|</span>
                <span className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-600 capitalize">{user.role}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {user.role === 'client' && (
              <button
                onClick={() => setShowPostJob(true)}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 active:bg-blue-800 active:scale-95 transition-all duration-200 font-medium shadow-sm hover:shadow-md text-sm"
              >
                <Plus className="w-4 h-4" />
                Post Job
              </button>
            )}
            <button
              onClick={() => setShowLogoutConfirm(true)}
              className="flex items-center gap-2 text-gray-500 hover:text-red-600 hover:bg-red-50 px-3 py-2 rounded-lg transition-colors text-sm font-medium"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center min-h-[400px] flex flex-col items-center justify-center">
          <div className="max-w-md mx-auto">
            <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="text-gray-400 w-8 h-8" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
            <p className="text-gray-500 mb-6">
              {user.role === 'client' 
                ? 'Get started by posting a new job opportunity.' 
                : 'There are no jobs currently available in your area.'}
            </p>
            {user.role === 'client' && (
              <button
                onClick={() => setShowPostJob(true)}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 active:scale-95 transition-transform font-medium"
              >
                Create a job post &rarr;
              </button>
            )}
          </div>
        </main>

        {/* Post Job Modal */}
        {showPostJob && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-6 text-gray-900">Post a New Job</h2>
                <form onSubmit={handlePostJob}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                      <div className="relative">
                        <input 
                          placeholder="e.g. House Cleaning" 
                          className="w-full pl-10 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                          value={newJobTitle}
                          onChange={e => setNewJobTitle(e.target.value)}
                          required
                          autoFocus
                        />
                        <Briefcase className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                      <div className="relative">
                        <input 
                          placeholder="e.g. 123 Main St, New York" 
                          className="w-full pl-10 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                          value={newJobLoc}
                          onChange={e => setNewJobLoc(e.target.value)}
                          required
                        />
                        <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
                      <div className="relative">
                        <input 
                          placeholder="e.g. 50" 
                          type="number"
                          className="w-full pl-10 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                          value={newJobPrice}
                          onChange={e => setNewJobPrice(e.target.value)}
                          required
                        />
                        <DollarSign className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Items (Optional)</label>
                      <textarea 
                        placeholder="e.g. Rice, Oil, Tomatoes" 
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        value={newJobItems}
                        onChange={e => setNewJobItems(e.target.value)}
                        rows={3}
                      />
                      <p className="text-xs text-gray-500 mt-1">Separate items with commas</p>
                    </div>

                    <div className="flex justify-end gap-2 mt-6 border-t pt-4">
                      <button 
                        type="button" 
                        onClick={clearJobForm}
                        className="group px-3 py-2 text-sm text-gray-500 hover:bg-red-50 hover:text-red-600 active:bg-red-100 active:scale-95 rounded-lg flex items-center gap-2 mr-auto transition-all duration-200"
                      >
                        <RotateCcw className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180" />
                        Clear Form
                      </button>
                      <button 
                        type="button" 
                        onClick={() => setShowPostJob(false)}
                        className="px-4 py-2 text-gray-600 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors"
                      >
                        Cancel
                      </button>
                      <button 
                        type="submit" 
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:bg-blue-800 active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md font-medium"
                      >
                        Post Job
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Logout Confirmation Modal */}
        {showLogoutConfirm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
            <div className="bg-white rounded-xl shadow-2xl p-6 max-w-sm w-full animate-in zoom-in-95 duration-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Sign Out</h3>
              <p className="text-gray-500 mb-6">Are you sure you want to sign out of your account?</p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowLogoutConfirm(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShowLogoutConfirm(false);
                    onLogout();
                  }}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 active:scale-95 transition-all shadow-sm font-medium"
                >
                  Yes, Sign Out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Main App Component ---

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const [currentScreen, setCurrentScreen] = useState<'login' | 'register'>('login');

  const handleLogin = (u: User) => {
    setUser(u);
  };

  const handleRegister = (u: User) => {
    setUser(u);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentScreen('login');
  };

  if (user) {
    return <Dashboard user={user} onLogout={handleLogout} />;
  }

  if (currentScreen === 'register') {
    return (
      <RegisterScreen 
        onRegister={handleRegister} 
        onNavigateToLogin={() => setCurrentScreen('login')} 
      />
    );
  }

  return (
    <LoginScreen 
      onLogin={handleLogin} 
      onNavigateToRegister={() => setCurrentScreen('register')} 
    />
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
