// import React, { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';




const UpdateProduct = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `https://secure-journey-62088.herokuapp.com/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))

    }, [id])



    const handleUpdate = event => {

        event.preventDefault();

        const available = event.target.available.value;
        if (!available) {
            alert('Quantity added');
        }
        // const updated = { quantity }

        const newQuantity = parseInt(available) + parseInt(item.available);

        console.log(newQuantity);

        const updateItem = { newQuantity };


        setItem({ ...item, available: item.available = parseInt(item.available) + parseInt(available) });

        //send data

        const url = `https://secure-journey-62088.herokuapp.com/product/${id}`;
        fetch(url, {
            method: 'PATCH',
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
        <div className='flex justify-center items-center'>



            <div class="card w-96 bg-base-100 shadow-xl border">
                <div class="card-body">
                    <h2>Id: {item._id}</h2>
                    <h2>Item Name: {item.name}</h2>
                    <h4>Quantity: {item.available}</h4>

                    <form className='d-flex flex-column' onSubmit={handleUpdate}>

                        <input type="text" className='mb-2 input input-bordered w-full max-w-xs' placeholder='Quantity' name="available" />
                        <input className='mb-2 btn btn-primary' type="submit" value="Update Item" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;


