import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router';
import { router } from './routes/Routes.jsx';
import "aos/dist/aos.css";
import AuthProvider from './contexts/AuthContext/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
            <ToastContainer />

  </StrictMode>
)
