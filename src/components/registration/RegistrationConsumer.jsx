import React, {useEffect, useState} from 'react'
import dataDB from "../../databaseData/dataDB";

export default function RegistrationBarber(props) {
    const initValues = {
        role: "consumer",
        email: "",
        password: "",
        repeatPassword: ""
    };
    const [formValues, setFormValues] = useState(initValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    function changeForm() {
        props.onClick('login');
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            dataDB.push(formValues);
            window.alert("you successfully registered")
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {}
        const regex = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
        if (!values.email) {
            errors.email = "email is required!"
        } else if (!regex.test(values.email)) {
            errors.email = "this is not a valid email format!"
        }
        if (!values.password) {
            errors.password = "password is required!"
        } else if (values.password.length < 8) {
            errors.password = "password must be at least 8 characters!"
        }
        if (!values.repeatPassword) {
            errors.repeatPassword = "repeat password is required!"
        } else if (values.password !== values.repeatPassword) {
            errors.repeatPassword = "passwords don't match!"
        }
        return errors;
    }

    return (
        <div className='px-20'>
            <div className='flex flex-col pt-2'>
                <label>E-mail</label>
                <input className='border p-2' type="text" name='email' value={formValues.email}
                       onChange={handleChange}/>
            </div>
            <p className='text-red-600 text-sm text-right'>{formErrors.email}</p>
            <div className='flex flex-col pt-2'>
                <label>Password</label>
                <input className='border p-2' type="password" name='password' value={formValues.password}
                       onChange={handleChange}/>
            </div>
            <p className='text-red-600 text-sm text-right'>{formErrors.password}</p>
            <div className='flex flex-col pt-2'>
                <label>Repeat password</label>
                <input className='border p-2' type="password" name='repeatPassword' value={formValues.repeatPassword}
                       onChange={handleChange}/>
            </div>
            <p className='text-red-600 text-sm text-right'>{formErrors.repeatPassword}</p>
            <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo500 text-white'
                    onClick={handleSubmit}>Register
            </button>
            <div className='flex justify-between'>
                <button className='w-15 text-left text-sky-800' onClick={changeForm}>Log in</button>
            </div>
        </div>
    )
}