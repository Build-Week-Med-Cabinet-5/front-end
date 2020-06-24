import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as yup from 'yup';
import Input from "reactstrap/es/Input";
import {Button} from "reactstrap";

const UserCreation = (props) => {
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirmPassword: '',
        location: '',
        terms_of_service: false
    })

    const [errors, setErrors] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirmPassword: '',
        location: '',
        terms_of_service: ''
    })

    const [post, setPost] = useState([]);

    const [buttonDisabled, setButtonDisabled] = useState("");

    const formSchema = yup.object().shape({
        first_name: yup.string().required("Please enter your first name"),
        last_name: yup.string().required("Please enter your last name"),
        email: yup.string().email("Must be a valid email").required(),
        password: yup
            .string()
            .required("Please enter your password")
            .min(8, "Password is too short - should be 8 characters minimum.")
            .matches(/[a-zA-Z@]/),
        confirmPassword: yup
            .string()
            .required("Must confirm your password")
            .oneOf([yup.ref('password'), null], 'Passwords do not match'),
        location: yup.string().notRequired(),
        terms_of_service: yup.boolean().oneOf([true], "Please agree to terms of service to verify that you are 21 years or older")
    })

    useEffect(() => {
        formSchema.isValid(user).then((valid) => {
            setButtonDisabled(!valid);
        })
    }, [user, formSchema]);

    const validate = (event) => {
        yup
            .reach(formSchema, event.target.name)
            .validate(event.target.value)
            .then((valid) => {
                setErrors({
                    ...errors,
                    [event.target.name]: "",
                });
            })
            .catch((error) => {
                console.log(error.errors)
                setErrors({
                    ...errors,
                    [event.target.name]: error.errors[0]
                });

            });
    };

    const formSubmit = (event) => {
        event.preventDefault();
        axios.post('https://reqres.in/api/users', user)
            .then((response => {
                setPost([...post, response.data]);
                setUser({
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    location: '',
                    terms_of_service: ''
                })
                console.log(user)
            }))
            .catch((error) => {
                console.log(error)
            })
    }

    const inputChange = (event) => {
        event.persist();
        const newFormData = {
            ...user,
            [event.target.name]:
                event.target.type === "checkbox" ? event.target.checked : event.target.value,
        };
        validate(event);
        setUser(newFormData);
    };

    return (
        <div className='signUpContainer'>
            <form onSubmit={formSubmit} className='form'>
                <label htmlFor='first_name'>First Name <br />
                    <Input type='text' data-cy='first_name' name='first_name' value={user.first_name} onChange={inputChange} /> {errors.first_name.length > 0 ? <span className='error'>{errors.first_name}</span> : null} <br />
                </label>
                <label htmlFor='last_name'>Last Name <br />
                    <Input type='text' data-cy='last_name' name='last_name' value={user.last_name} onChange={inputChange} /> {errors.last_name.length > 0 ? <span className='error'>{errors.last_name}</span> : null} <br />
                </label>
                <label htmlFor='email'>Email <br />
                    <Input type='text' data-cy='email' name='email' value={user.email} onChange={inputChange} />  {errors.email.length > 0 ? <span className='error'>{errors.email}</span> : null} <br />
                </label>
                <label htmlFor='password'>Password <br />
                    <Input type='text' data-cy='password' name='password' value={user.password} onChange={inputChange} /> {errors.password.length > 0 ? <span className='error'>{errors.password}</span> : null} <br />
                </label>
                <label htmlFor='confirmPassword'>Confirm Password <br />
                    <Input type='text' data-cy='confirmPassword' name='confirmPassword' value={user.confirmPassword} onChange={inputChange} /> {errors.confirmPassword.length > 0 ? <span className='error'>{errors.confirmPassword}</span> : null} <br />
                </label>
                <label htmlFor='location'>Location <br />
                    <Input type='text' data-cy='location' name='location' value={user.location} onChange={inputChange} /> <br />
                </label>
                <label htmlFor='terms_of_service'>I have read the Terms and Conditions and am of the age 21 or older &nbsp; &nbsp; &nbsp;
                    <Input type='checkbox' data-cy='terms_of_service' name='terms_of_service' onChange={inputChange} checked={user.terms_of_service} /> <br />
                </label>
                <Button disabled={buttonDisabled} data-cy='submit'>Submit</Button>
            </form>
        </div>
    )
}

export default UserCreation;