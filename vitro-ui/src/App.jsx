import React, { useState, useEffect } from 'react';
import DashboardLayout from './components/DashboardLayout';
import SignUpPage from './components/SignUpPage';
import AccountSettingsPage from './components/AccountSettingsPage';
import MainWorkspace from './components/MainWorkspace';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Simple routing for demonstration purposes
  if (currentPath === '/signup') {
    return <SignUpPage />;
  }

  if (currentPath === '/settings') {
    return <AccountSettingsPage />;
  }

  if (currentPath === '/workspace') {
    return <MainWorkspace />;
  }

  // To easily preview the sign-up page for the user's request without writing a router:
  // Render Dashboard on root, give a toggle or just uncomment
  return (
    <>
      <DashboardLayout />
      {/* Dev Helper - Floating controls to switch pages */}
      <div className="fixed bottom-6 left-6 z-50 flex gap-2">
        <button
          onClick={() => {
            window.history.pushState({}, '', '/');
            setCurrentPath('/');
          }}
          className="bg-black/40 text-white text-xs px-4 py-2 rounded-full shadow-lg hover:bg-black transition-colors"
        >
          Dashboard ↗
        </button>
        <button
          onClick={() => {
            window.history.pushState({}, '', '/signup');
            setCurrentPath('/signup');
          }}
          className="bg-black/80 text-white text-xs px-4 py-2 rounded-full shadow-lg hover:bg-black transition-colors"
        >
          Sign Up UI ↗
        </button>
        <button
          onClick={() => {
            window.history.pushState({}, '', '/settings');
            setCurrentPath('/settings');
          }}
          className="bg-[#62414A]/90 text-white text-xs px-4 py-2 rounded-full shadow-lg hover:bg-[#62414A] transition-colors"
        >
          Settings UI ↗
        </button>
        <button
          onClick={() => {
            window.history.pushState({}, '', '/workspace');
            setCurrentPath('/workspace');
          }}
          className="bg-[#B7684C] text-white text-xs px-4 py-2 rounded-full shadow-lg hover:bg-[#A45C49] transition-colors"
        >
          Workbench ↗
        </button>
      </div>
    </>
  );
}

export default App;
