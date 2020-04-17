import React, { useState, useEffect, useRef } from 'react';
import DatePicker from 'react-datepicker'
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css'

function CreateExercise(props) {
    const [username, setUsername] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date());
    const [users, setUsers] = useState([]);

    const onChangeUsername = event => {
        setUsername(event.target.value);
    };
      const onChangeDescription = event => {
        setDescription(event.target.value);
    };
      const onChangeDuration = event => {
        setDuration(event.target.value);
    };
      const onChangeDate = date => {
        setDate(date);
    };
    
    const onSubmit = event => {
        event.preventDefault();

        const exercise = {
            username: { username },
            description: { description },
            duration: { duration },
            date: { date }
        };
        console.log(exercise);
        axios.post("http://localhost:5000/exercise/add", exercise)
            .then((res) => console.log(res.data));
        window.location = '/';
    }
    
    useEffect(() => {
        axios.get("http://localhost:5000/users/")
            .then(response => {
                if (response.data.length > 0) {
                    setUsers(response.data.map(user => user.username));
                    setUsername(response.data[0].username);
            }
        })
    }, [])
    
    const userInput = useRef("userInput");


    return(
        <div className = "container">
            <h3>Create New Exercise Log</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Username :</label>
                    <select ref={userInput} required className="form-control" value={username} onChange={onChangeUsername}>
                        {users.map((user) => {
                            return <option key={user} value={user}>{user}</option>
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label>Description :</label>
                    <input type="text" required className="form-control" value={description} onChange={onChangeDescription} />
                </div>
                <div className="form-group">
                    <label>Duration(in minutes) :</label>
                    <input type="text" required className="form-control" value={duration} onChange ={onChangeDuration} />
                </div>
                <div className="form-group">
                    <label>Date :</label>
                    <div>
                        <DatePicker selected={date} onChange={onChangeDate} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateExercise;