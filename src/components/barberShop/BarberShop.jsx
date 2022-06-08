import { useState } from 'react'
import data from "../../databaseData/dataDB";
import BarberItem from "./BarberItem";



function BarberShop() {

    const [barberData, setBarberData] = useState(data)

    return (
        <div className="w-full h-screen bg-slate-500 flex flex-wrap">
            {barberData.map(barber => (
                <BarberItem key={barber.id} {...barber} />
            ))}
        </div>
    );
}

export default BarberShop;
