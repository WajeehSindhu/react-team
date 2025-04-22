import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './PrivateRoute';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import './index.css';

// Layout component that includes common elements
const Layout = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className={isAuthPage ? 'min-h-screen bg-blue-300 dark:bg-white' : ''}>
        <Outlet />
      </main>
      {!isAuthPage && <Footer />}
    </>
  );
};

// Error boundary component
const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const handleError = (error) => {
      console.error('Error caught by boundary:', error);
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-300 dark:bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Something went wrong</h1>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  return children;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Router>
        <AuthProvider>
          <Routes>
            {/* Public routes */}
            <Route element={<Layout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              
              {/* Protected routes */}
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
              <Route
                path="/about"
                element={
                  <PrivateRoute>
                    <About />
                  </PrivateRoute>
                }
              />
              <Route
                path="/contact"
                element={
                  <PrivateRoute>
                    <Contact />
                  </PrivateRoute>
                }
              />
              <Route
                path="/blog"
                element={
                  <PrivateRoute>
                    <Blog />
                  </PrivateRoute>
                }
              />
            </Route>

            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AuthProvider>
      </Router>
    </ErrorBoundary>
  </React.StrictMode>
);
