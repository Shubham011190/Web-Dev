import React, { useState,useEffect } from 'react';

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
        window.location = '/';
    }
    
    useEffect(() => {
        setUsers(['test user']);
        setUsername('testUser');   
    })


    

    return(
        <div>
            <p>You are in Create Exercise Component</p>
        </div>
    )
}

export default CreateExercise;