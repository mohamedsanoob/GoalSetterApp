import axios from 'axios';
import { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';

function GoalForm() {
  const [text, setText] = useState('')
  const { goals, setGoals } = useContext(AuthContext)

  const onSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/api/goals', { text }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(response => {
        console.log(response?.data, 'response');
        setGoals(prevGoals => [...prevGoals, response?.data])
        setText('')
      })
      .catch(error => {
        console.error('Error fetching goals:', error);
      });
    console.log('adeed')
  }
  console.log(goals, 'goal')

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Goal</label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Goal
          </button>
        </div>
      </form>
    </section>
  )
}

export default GoalForm