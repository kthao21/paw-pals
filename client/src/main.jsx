import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Success from "./pages/Success.jsx"
import App from './App.jsx';
import Home from './pages/Home';
import Donation from './pages/Donation';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import SavedSearches from './pages/SavedSearches';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // error: <NoMatch />,
    children: [
      {
        index: true, 
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, 
      {
        path: '/contact',
        element: <Contact />
      }, 
      {
        path: '/donation',
        element: <Donation />
      },  
      {
        path: '/savedSearches',
        element: <SavedSearches />
      },
      {
        path: '/success',
        element: <Success />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
