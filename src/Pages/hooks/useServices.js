import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://morning-garden-88599.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return [services, setServices]
};

export default useServices;