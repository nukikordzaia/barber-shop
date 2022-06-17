import React, {useState} from 'react'
import barberDBData from "../../databaseData/barberDB";
import BarberItem from "./BarberItem";


function BarberShop(props) {

    const [barberData, setBarberData] = useState(barberDBData);

    function changeForm(value) {
        props.onClick(value);
    }

    return (
        <div>
            <div className="w-full h-screen bg-sky-100 flex flex-wrap">
                {barberData.map(barber => (
                    <BarberItem key={barber.id} {...barber} />
                ))}
                <button className='bg-blue-500 h-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4' onClick={e => {
                    changeForm("login")
                }}>Log out
                </button>
            </div>
        </div>
    );
}

export default BarberShop;
