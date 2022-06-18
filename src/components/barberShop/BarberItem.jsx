import React, {useState} from "react";
import Card from "./card";

const BarberItem = ({
                        firstName,
                        lastName,
                        email,
                        address,
                        price
                    }) => {
    const [reserved, setReserved] = useState(false);
    const reviews = [];
    const [text, setText] = useState('');

    const reserve = () => {
       window.alert("you reserved barber, now you can review him");
       setReserved(true);
    };

    const addReview = () => {
        reviews.push(text);
    };

    const handleChange = event => {
        setText(event.target.value);
    };

    const handleEnterPress = (e) => {
        //it triggers by pressing the enter key
        if (e.which === 13) {
            addReview();
        }
    };
    return (
        <div>
            <Card>
                <p className="text-2xl text-center mt-2">Name: {firstName} {lastName}</p>
                <p className="text-center text-lg mt-4">Address: {address} </p>
                <p className="text-center text-lg mt-4">Email: {email} </p>
                <p className="text-center text-lg mt-4">Price: {price} </p>
                <p className="text-center text-lg mt-4">Reviews: {reviews.map(review => <li>{review}</li>)} </p>
                { reserved === true && <input className='border text-black p-2 ml-11 relative' type="text" name="review" value={text} onChange={handleChange} onKeyPress={(e) => handleEnterPress(e)}/>}
                <button className='bg-blue-500 h-10 hover:bg-blue-700 text-white py-2 ml-16 relative px-4 rounded mt-4' onClick={reserve}>reserve</button>
            </Card>
        </div>
    );
};

export default BarberItem;