import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
        id: 1,
        name: "Shubham",
        image: 'https://media3.s-nbcnews.com/j/newscms/2019_41/3047866/191010-japan-stalker-mc-1121_06b4c20bbf96a51dc8663f334404a899.fit-760w.JPG',
        places: 3
        }
    ];
    return (
        <UsersList items={USERS}/>
    )
}

export default Users;