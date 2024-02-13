import { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import GoalForm from '../components/GoalForm'
import GoalItem from '../components/GoalItem'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'

function Dashboard() {

    const { goals, setGoals } = useContext(AuthContext)
    const {user,setUser}=useContext(AuthContext)

    const navigate = useNavigate()

    console.log(localStorage.getItem('accessToken'), 'loc')

    useEffect(() => {
        axios.get('http://localhost:5000/api/goals', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(response => {
                console.log(response?.data, 'response');
                setGoals( response?.data)
                
            })
            .catch(error => {
                console.error('Error fetching goals:', error);
            });

    },[])


    // console.log(goals, 'goal')
    return (
        <>

            <section className='heading'>
                <h1>Welcome {user.name}</h1>
                <p>Goals Dashboard</p>
            </section>

            <GoalForm />

            {/* <section className='content'>
                <h3>You have not set any goals</h3>
            </section> */}

            <section className='content'>
                {goals.length > 0 ? (
                    <div className='goals'>
                        {goals.map((goal) => (
                            <GoalItem key={goal._id} goal={goal} />
                        ))}
                    </div>
                ) : (
                    <h3>You have not set any goals</h3>
                )}
            </section>
        </>
    )
}

export default Dashboard