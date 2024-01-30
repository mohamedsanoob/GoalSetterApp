import { useState } from "react"
import { useDispatch } from "react-redux"
import { createGoal } from "../features/goals/goalSlice"

const GoalForm = () => {

    const [text, setText] = useState('')

    const dispatch=useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(createGoal({text}))
        setText('')
    }

    return (
        <section className="form">
            <div className="form-group">
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="text">Goal</label>
                        <input type="text" id="text" name="text" value={text} onChange={(e) => setText(e.target.value)} />
                    </div>
                    <div className="from-group">
                        <button type="submit" className="btn btn-block">Add Goal</button>
                    </div>

                </form>
            </div>
        </section>

    )
}


export default GoalForm