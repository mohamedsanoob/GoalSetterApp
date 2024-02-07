import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import GoalForm from '../components/GoalForm'
import GoalItem from '../components/GoalItem'
import Spinner from '../components/Spinner'

function Dashboard() {
    const location = useLocation()
    console.log(location.state)
    const navigate = useNavigate()


    //   useEffect(() => {
    //     if (isError) {
    //       console.log(message)
    //     }

    //     if (!user) {
    //       navigate('/login')
    //     }


    //     return () => {
    //       dispatch(reset())
    //     }
    //   }, [user, navigate, isError, message, dispatch])

    //   if (isLoading) {
    //     return <Spinner />
    //   }

    return (
        <>

            <section className='heading'>
                <h1>Welcome {location?.state?.name}</h1>
                <p>Goals Dashboard</p>
            </section>

            <GoalForm />

            <section className='content'>
                <h3>You have not set any goals</h3>
            </section>
        </>
    )
}

export default Dashboard