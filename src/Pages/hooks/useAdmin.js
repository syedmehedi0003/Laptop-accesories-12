import { useEffect, useState } from "react";

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        const email = user?.email;

        if (email) {
            fetch(`https://secure-journey-62088.herokuapp.com/admin/${email}`, {


                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }

            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin);
                })
        }
    }, [user])

    return [admin];
};

export default useAdmin;