import React, {useEffect, useState} from 'react'
import dataDB from "../../databaseData/dataDB";

export default function Login(props) {
    const initValues = {
        email: "",
        password: ""
    };
    const [formValues, setFormValues] = useState(initValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    function changeForm(value) {
        props.onClick(value);
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
            login();
        }
    }, [formErrors]);

    const login = () => {
        if (dataDB.length === 0) {
            console.log("you are not registered");
        } else {
            const userMail = formValues.email;
            const userPass = formValues.password;
            const currentUser = [];
            const consumerData = dataDB.find(user => user.role === "consumer");
            const barberData = dataDB.find(user => user.role === "barber")
            if (consumerData) {
                currentUser.push(consumerData);
                if (currentUser.find(consumer => consumer.email === userMail && consumer.password === userPass)) {
                    changeForm("barberShop")
                } else if (currentUser.find(consumer => consumer.email === userMail && consumer.password !== userPass)) {
                    window.alert("password is incorrect");
                }
            } else if (barberData) {
                currentUser.push(barberData);
                if (currentUser.find(barber => barber.email === userMail && barber.password === userPass)) {
                    window.alert("you can't log in, you are barber");
                } else if (currentUser.find(barber => barber.email === userMail && barber.password !== userPass)) {
                   window.alert("password is incorrect");
                }
            } else {
                window.alert("you are not registered");
            }
        }
    }

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
        }
        return errors;
    }

    return (
        <div className='px-20'>
            <div className='flex flex-col pt-2'>
                <label>E-mail</label>
                <input className='border p-2' type="text" name="email" value={formValues.email}
                       onChange={handleChange}/>
            </div>
            <p className='text-red-600 text-sm text-right'>{formErrors.email}</p>
            <div className='flex flex-col pt-2'>
                <label>Password</label>
                <input className='border p-2' type="password" name="password" value={formValues.password}
                       onChange={handleChange}/>
            </div>
            <p className='text-red-600 text-sm text-right'>{formErrors.password}</p>
            <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo500 text-white'
                    onClick={handleSubmit}>Log In
            </button>
            <div className='flex justify-between'>
                <button className='w-40 text-left text-sky-800' onClick={e => {changeForm("registration")}}>Create an account</button>
            </div>
        </div>
    )
}