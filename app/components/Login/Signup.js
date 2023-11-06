import { useState } from 'react';
import FormAction from "./FormAction";
import Input from "./Input";
import { signupFields } from '@/app/Data/formFields';
import { useRouter } from 'next/navigation'


const fields = signupFields;
let fieldsState = {};

fields.forEach(field => fieldsState[field.id] = '');

export default function Signup() {
    const router = useRouter();
    const [signupState, setSignupState] = useState(fieldsState);

    const handleChange = (e) => {
        setSignupState({ ...signupState, [e.target.id]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(signupState)
        createAccount()
    }

    //handle Signup API Integration here
    const createAccount = async () => {
        try {
            const response = await fetch('/api/account/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signupState),
            });

            console.log(response)

            if (response.ok) {
                router.push('/login')

            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }

    }

    return (
        <form className="mt-2 space-y-6" onSubmit={handleSubmit}>
            <div className="">
                {
                    fields.map(field =>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                        />

                    )
                }
                <FormAction handleSubmit={handleSubmit} text="Signup" />
            </div>

        </form>
    )
}