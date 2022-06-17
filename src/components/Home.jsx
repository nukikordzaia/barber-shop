import React, {useState} from 'react'
import loginImg from '../assets/barber-shop.jpg'
import RegistrationConsumer from "./registration/RegistrationConsumer";
import Login from "./registration/Login";
import RegistrationBarber from "./registration/RegistrationBarber";
import Registration from "./registration/Registration";
import BarberShop from "./barberShop/BarberShop";

export default function Home() {

    const [formState, setFormState] = useState('login');

    function changeForm(newState) {
        setFormState(newState);
    }

    if (formState === 'barberShop') {
        return (
            <div>
                <BarberShop formState={formState} onClick={changeForm}/>
            </div>
        )
    }
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={loginImg} alt=""/>
            </div>
            <div className='flex flex-col justify-center'>
                <div className='max-w-[600px] w-full mx-auto bg-gray-100 p-4'>
                    <h2 className='text-4xl font-bold text-center py-6'>BARBER SHOP</h2>
                    {formState === 'login' && <Login formState={formState} onClick={changeForm}/>}
                    {formState === 'registration' && <Registration formState={formState} onClick={changeForm}/>}
                    {formState === 'registrationBarber' &&
                    <RegistrationBarber formState={formState} onClick={changeForm}/>}
                    {formState === 'registrationConsumer' &&
                    <RegistrationConsumer formState={formState} onClick={changeForm}/>}
                </div>
            </div>
        </div>
    )
}