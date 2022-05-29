import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';
import UserRow from './UserRow';


const Users = () => {



    const [user1, setUser1] = useState([]);

    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {

            const url = `https://morning-garden-88599.herokuapp.com/user`;
            fetch(url, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setUser1(data));
        }
    }, [user])



    return (
        <div>
            <h2>All Users:{user1.length}</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>


                            <th>Email</th>
                            <th>Job</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            user1.map((user) => <UserRow
                                key={user._id}
                                user={user}
                            ></UserRow>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;