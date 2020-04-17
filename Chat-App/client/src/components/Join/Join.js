import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

const Join = () => {
    
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const onNameChange = event => {
        setName(event.target.value);
    };

     const onRoomChange = event => {
        setRoom(event.target.value);
    };




    return (
        <div className='joinOuterContainer'>
            <div className='joinInnerContainer'>
                <h1 className='heading'>Join</h1>
                <div> <input placeholder='Name' className='joinInput' type='text' onChange={onNameChange} /></div>
                <div> <input placeholder='Room' className='joinInput mt-20' type='text' onChange={onRoomChange} /></div>
                <Link to={'/chat?name=' + name + "&room=" + room} onClick={event => 
                    (!name || !room) ? event.preventDefault() : null
                }>
                    <button className='button mt-20' type='submit'>Sign In</button>
                </Link>
            </div>
        </div>
    )
};

export default Join;