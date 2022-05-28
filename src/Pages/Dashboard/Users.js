import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import UserRow from './UserRow';
// import Loading from '../Shared/Loading';

const Users = () => {

    // const { data: user, isLoading } = useQuery('users', () => fetch('http://localhost:5000/user')
    //     .then(res => res.json()));

    const [user1, setUser1] = useState([]);

    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            // const url = `http://localhost:5000/user?email=${user.email}`;
            const url = `http://localhost:5000/user`;
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
                    {/* <!-- head --> */}
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Email</th>
                            <th>Job</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}

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