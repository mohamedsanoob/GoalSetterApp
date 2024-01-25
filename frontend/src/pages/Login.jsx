import { useState, useEffect } from 'react'
import { FaSignInAlt, FaUser, FaUserAlt } from 'react-icons/fa'

const Register = () => {

    const [formData, setFromData] = useState([{
        email: '',
        password: '',
    }])

    const { email, password, } = formData

    const onChange = (e) => {
        setFromData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>

            <section className='heading'>
                <h1><FaUserAlt />Login</h1>
                <p>Please login & Start setting your goals</p>
            </section>

            <section className='form'>

                <form onSubmit={onSubmit}>
                    {/* <div className="form-group">
                        <input type='text' id='name' name='name' placeholder='Enter your name' className='form-control' value={name} onChange={onChange} />
                    </div> */}
                    <div className="form-group">
                        <input type='email' id='email' name='email' placeholder='Enter your email' className='form-control' value={email} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type='password' id='password' name='password' placeholder='Enter your password' className='form-control' value={password} onChange={onChange} />
                    </div>
                    {/* <div className="form-group">
                        <input type='password' id='password2' name='password2' placeholder='Confirm your password' className='form-control' value={password2} onChange={onChange} />
                    </div> */}
                    <div className="form-group">
                        <button type='submit' className='btn btn-block'>Submit</button>
                    </div>
                </form>


            </section>
        </>
    )
}

export default Register