import axios from "axios"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"


function GoalItem({ goal }) {

  const { goals, setGoals } = useContext(AuthContext)
  console.log(localStorage.getItem('accessToken'), 'tokneey')
  const handleDelete = () => {
    axios.delete(`http://localhost:5000/api/goals/${goal._id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(response => {
        console.log(response, 'response');
        setGoals((prevGoals)=>prevGoals.filter((item)=>item._id !==goal._id))
        console.log(goals,'all')
      })
      .catch(error => {
        console.error('Error fetching goals:', error);
      });
  }
  console.log(goal._id, 'id')
  return (
    <div className='goal'>
      <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
      <h2>{goal.text}</h2>
      <button className='close' onClick={handleDelete}>
        X
      </button>
    </div>
  )
}

export default GoalItem