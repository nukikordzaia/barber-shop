import React from 'react'

export default function Registration(props) {

    function changeForm(value) {
        props.onClick(value);
    }

    return (
        <div className='px-20'>
            <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo500 text-white'
                    onClick={changeForm('registrationConsumer')}>Register as consumer
            </button>
            <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo500 text-white'
                    onClick={changeForm('registrationBarber')}>Register as barber
            </button>
        </div>
    )
}