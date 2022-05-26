// import React, { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';




const UpdateProduct = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))

    }, [id])



    const handleUpdate = event => {

        event.preventDefault();

        const available = event.target.available.value;

        // const updated = { quantity }

        const newQuantity = parseInt(available) + parseInt(item.available);
        console.log(newQuantity);
        const updateItem = { newQuantity };
        if (!available) {
            alert('Quantity added');
        }

        setItem({ ...item, available: item.available = parseInt(item.available) + parseInt(available) });

        //send data

        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('Update Successfully');
                event.target.reset();

            })


    }



    return (
        <div className='w-50 mx-auto'>

            <h2>Item Name: {item.name}</h2>
            <h4>Quantity: {item.available}</h4>

            <form className='d-flex flex-column' onSubmit={handleUpdate}>

                <input type="text" className='mb-2 input input-bordered w-full max-w-xs' placeholder='Quantity' name="available" />
                <input className='mb-2 btn btn-primary' type="submit" value="Update Item" />
            </form>


        </div>
    );
};

export default UpdateProduct;


