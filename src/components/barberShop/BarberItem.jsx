import { useState } from "react";
import Card from "./card";

const BarberItem = ({
                        firstName,
                        lastName,
                        email,
                        address,
                        price }) => {

    const [isFrontShown, setIsFrontShown] = useState(false);

    const onFlip = () => setIsFrontShown(prev => !prev);

    return (
        <div>
            <Card>
                <Card.Front isHidden={isFrontShown}>
                    <img src="https://www.w3schools.com/w3images/team2.jpg"
                         width="100%" alt="Placeholder" className="rounded-lg"/>
                    <p className="text-2xl text-center mt-2">Name</p>
                    <p className="text-center text-lg mt-4">Address: {address} </p>
                    <button
                        className="px-2 ml-4 mt-8 mb-8 ml-16 mr-16 font-bold text-black bg-yellow-300 rounded-lg right-6"
                        onClick={onFlip}> Flip </button>
                </Card.Front>
                <Card.Back isHidden={isFrontShown} className="p-4">
                    <div className="flex items-center justify-between mx-4 ">
                        <button
                            className="px-2 font-bold text-white bg-red-400 rounded-lg right-6"
                        >
                            Remove User
                        </button>
                    </div>
                    <p className="mt-4 text-white">
                        <span className="mr-2 text-sm text-white opacity-60">Full Name:</span>
                    </p>
                    <p className="mt-4 text-white">
                        <span className="mr-2 text-sm text-white opacity-60">Address:</span>
                    </p>
                    <p className="mt-4 text-white">
                        <span className="mr-2 text-sm text-white opacity-60">Country:</span>
                    </p>
                    <p className="mt-4 text-white">
                        <span className="mr-2 text-sm text-white opacity-60">Region:</span>
                    </p>
                    <p className="mt-4 text-white">
                        <span className="mr-2 text-sm text-white opacity-60">Phone Number:</span>
                    </p>
                    <button
                        className="px-2 ml-4 mb-8 mt-8 ml-16 mr-16 font-bold text-black bg-yellow-300 rounded-lg right-6"> Flip </button>
                </Card.Back>
            </Card>
        </div>
    );
};

export default BarberItem;