import { useState, useEffect, useContext } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext)
    const {user,setUser}=useContext(AuthContext)

    const { email, password } = formData

    const navigate = useNavigate()


    //   useEffect(() => {
    //     if (isError) {
    //       toast.error(message)
    //     }

    //     if (isSuccess || user) {
    //       navigate('/')
    //     }

    //     dispatch(reset())
    //   }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        const res = await axios.post('http://localhost:5000/api/users/login', formData)
        console.log(res?.data?.token, 'resd')
        if (res?.data?.token) {
            localStorage.setItem('accessToken', res?.data?.token)
            setIsAuthenticated(true)
            setUser(res?.data)
            navigate('/')
        }

        // console.log(res)
        // if (res) {
        //     navigate('/', {
        //         state: {
        //             token: res?.data?.token,
        //             id: res?.data?._id,
        //             name: res?.data?.name
        //         }
        //     })
        // } else {
        //     <h1>Invalid credentials</h1>
        // }


    }

    //   if (isLoading) {
    //     return <Spinner />
    //   }

    return (
        <>
            <section className='heading'>
                <h1>
                    <FaSignInAlt /> Login
                </h1>
                <p>Login and start setting goals</p>
            </section>

            <section className='form'>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <input
                            type='email'
                            className='form-control'
                            id='email'
                            name='email'
                            value={email}
                            placeholder='Enter your email'
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='password'
                            className='form-control'
                            id='password'
                            name='password'
                            value={password}
                            placeholder='Enter password'
                            onChange={onChange}
                        />
                    </div>

                    <div className='form-group'>
                        <button type='submit' className='btn btn-block'>
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Login