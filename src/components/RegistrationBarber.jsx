import React from 'react'

export default function RegistrationBarber(props) {

    function changeForm() {
        props.onClick('login');
    }

    return (
        <div className='px-20'>
            <div className='flex flex-col py-2'>
                <label>First Name</label>
                <input className='border p-2' type="text"/>
            </div>
            <div className='flex flex-col py-2'>
                <label>Last Name</label>
                <input className='border p-2' type="text"/>
            </div>
            <div className='flex flex-col py-2'>
                <label>E-mail</label>
                <input className='border p-2' type="text"/>
            </div>
            <div className='flex flex-col py-2'>
                <label>Adress</label>
                <input className='border p-2' type="text"/>
            </div>
            <div className='flex flex-col py-2'>
                <label>Price</label>
                <input className='border p-2' type="number"/>
            </div>
            <div className='flex flex-col py-2'>
                <label>Password</label>
                <input className='border p-2' type="password"/>
            </div>
            <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo500 text-white'>Register
            </button>
            <div className='flex justify-between'>
                <button className='w-15 text-left text-sky-800' onClick={changeForm}>Log in</button>
            </div>
        </div>
    )
}