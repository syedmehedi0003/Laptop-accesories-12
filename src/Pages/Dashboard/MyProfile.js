import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {

    const [user] = useAuthState(auth);

    return (
        <div>
            <h2 className='text-3xl font-bold text-accent'>User: {user.displayName}</h2>
        </div>
    );
};

export default MyProfile;