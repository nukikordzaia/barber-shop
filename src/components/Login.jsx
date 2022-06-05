import React from 'react'

export default function Login(props) {

    function changeForm() {
        props.onClick('registration');
    }

    return (
        <div className='px-20'>
            <div className='flex flex-col py-2'>
                <label>E-mail</label>
                <input className='border p-2' type="text"/>
            </div>
            <div className='flex flex-col py-2'>
                <label>Password</label>
                <input className='border p-2' type="password"/>
            </div>
            <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo500 text-white'>Log In
            </button>
            <div className='flex justify-between'>
                <button className='w-40 text-left text-sky-800' onClick={changeForm}>Create an account</button>
            </div>
        </div>
    )
}