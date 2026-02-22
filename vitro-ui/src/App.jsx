import React, { useState, useEffect } from 'react';
import DashboardLayout from './components/DashboardLayout';
import SignUpPage from './components/SignUpPage';

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

  // To easily preview the sign-up page for the user's request without writing a router:
  // Render Dashboard on root, give a toggle or just uncomment
  return (
    <>
      <DashboardLayout />
      {/* Dev Helper - Floating button to see the Sign Up page */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={() => {
            window.history.pushState({}, '', '/signup');
            setCurrentPath('/signup');
          }}
          className="bg-black/80 text-white text-xs px-4 py-2 rounded-full shadow-lg hover:bg-black transition-colors"
        >
          View Sign Up Page UI ↗
        </button>
      </div>
    </>
  );
}

export default App;
