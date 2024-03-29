import { useContext } from 'react'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

function Header() {
    const navigate = useNavigate()

    const onLogout = () => {
        // localStorage.clear()
        setIsAuthenticated(false)
    }

    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext)

    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'>GoalSetter</Link>
            </div>
            <ul>
                {isAuthenticated ? (
                    <li>
                        <button className='btn' onClick={onLogout}>
                            <FaSignOutAlt /> Logout
                        </button>
                    </li>
                ) : (
                    <>
                        <li>
                            <Link to='/login'>
                                <FaSignInAlt /> Login
                            </Link>
                        </li>
                        <li>
                            <Link to='/register'>
                                <FaUser /> Register
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </header>
    )
}

export default Header