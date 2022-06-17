import React, {useState} from "react";
import Card from "./card";

const BarberItem = ({
                        firstName,
                        lastName,
                        email,
                        address,
                        price
                    }) => {

    return (
        <div>
            <Card>
                <p className="text-2xl text-center mt-2">Name: {firstName} {lastName}</p>
                <p className="text-center text-lg mt-4">Address: {address} </p>
                <p className="text-center text-lg mt-4">Email: {email} </p>
                <p className="text-center text-lg mt-4">Price: {price} </p>
                <button className='bg-blue-500 h-10 hover:bg-blue-700 text-white py-2 ml-16 px-4 rounded mt-4'>reserve</button>
            </Card>
        </div>
    );
};

export default BarberItem;