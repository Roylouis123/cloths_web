'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation'
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import { loginFields } from '@/app/Data/formFields';

const Login = () => {
    const router = useRouter();

    const fields = loginFields;
    const fieldsState = Object.fromEntries(fields.map((field) => [field.id, '']));

    const [loginState, setLoginState] = useState(fieldsState);

    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await authenticateUser();
    };

    const authenticateUser = async () => {
        try {
            const response = await fetch('/api/account/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginState),
            });


            console.log(response)

            if (response.ok) {
                const data = await response.json();
                if (data.message === 'Successful login!') {
                    router.push('/')
                    setTimeout(() =>{
                        alert("Successfully logged in");
                    }, 2000);

                } else {
                    alert("User not Found");
                }
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form className="mt-2 space-y-6" onSubmit={handleSubmit}>
            <div className="-space-y-px">
                {fields.map((field) => (
                    <Input
                        key={field.id}
                        handleChange={handleChange}
                        value={loginState[field.id]}
                        labelText={field.labelText}
                        labelFor={field.labelFor}
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        isRequired={field.isRequired}
                        placeholder={field.placeholder}
                    />
                ))}
            </div>

            <FormExtra />
            <FormAction handleSubmit={handleSubmit} text="Login" />
        </form>
    );
};

export default Login;
