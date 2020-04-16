import React, { useState} from 'react';

function CreateUser(props) {

    const [username, setUsername] = useState("");
    const onChangeUsername= event => {
        setUsername(event.target.value)
    };

    const onSubmit = event => {
        event.preventDefault();
        const user = {
            username:{username}
        }
        console.log(user);
        //window.location = '/';        We want to keep the user on the same page.
        setUsername('');
    }




    return(
        <div className="container">
            <h3>Create New User</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <input type='text' required className='form-control' value={username} onChange={onChangeUsername} />                    
                </div>
                <div className="form-group">
                    <input type='submit' value="Create User" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}

export default CreateUser;