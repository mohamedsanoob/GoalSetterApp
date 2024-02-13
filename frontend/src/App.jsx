import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import { AuthContext, AuthProvider } from './context/AuthContext'
// App.jsx
// ... other imports
// App.jsx
// ... other imports
import PrivateRoute from './components/PrivateRoute';
import { useContext } from 'react'

function App() {

  return (

    <div className='container'>
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route element={<PrivateRoute />}>
              <Route element={<Dashboard />} path='/' />
            </Route>
          </Routes>
        </Router>
      </AuthProvider >
    </div>

  );
}

export default App;
