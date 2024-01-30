import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

const Register = () => {

    const [formData, setFromData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const { name, email, password, password2 } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])


    const onChange = (e) => {
        setFromData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (password !== password2) {
            toast.error('Password do not match')
        } else {
            const userData = {
                name,
                email,
                password,
            }
            dispatch(register(userData))
        }
    }

    if(isLoading){
        return <Spinner />
    }

    return (
        <>

            <section className='heading'>
                <h1><FaUser />Register</h1>
                <p>Please create an account</p>
            </section>

            <section className='form'>

                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type='text' id='name' name='name' placeholder='Enter your name' className='form-control' value={name} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type='email' id='email' name='email' placeholder='Enter your email' className='form-control' value={email} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type='password' id='password' name='password' placeholder='Enter your password' className='form-control' value={password} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type='password' id='password2' name='password2' placeholder='Confirm your password' className='form-control' value={password2} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <button type='submit' className='btn btn-block'>Submit</button>
                    </div>
                </form>


            </section>
        </>
    )
}

export default Register