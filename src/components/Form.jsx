import React, { useEffect, useState } from 'react';

import ContactList from "./ContactList";
import Input from './Input';
import styles from "./form.module.css";
import { formList } from '../assets/formData';
import { validate } from '../scripts/formValidation';
import { toast } from '../scripts/alerts';

const Form = () => {

    const [errors, setErrors] = useState({});
    const [focused, setFocused] = useState({});
    const [contacts, setContacts] = useState([]);
    const [contact, setContact] = useState({
        id: "",
        name: "",
        last_name: "",
        email: "",
        phone: ""
    })

    useEffect(() => {
        setErrors(validate(contact));
    }, [contact])

    const showError = (e) => {
        setFocused({ ...focused, [e.target.name]: true });
    }

    const changeHandler = event => {
        setContact(contact => ({
            ...contact,
            [event.target.name]: event.target.value
        }));
    }

    const addContact = (e) => {
        e.preventDefault();
        if (!Object.keys(errors).length) {
            const newContact = {
                ...contact,
                id: Date.now()
            }
            setContacts([...contacts, newContact]);
            setContact({
                id: "",
                name: "",
                last_name: "",
                email: "",
                phone: ""
            })
            setFocused({});
            toast.fire({ icon: "success", title: "Contact saved successfully." })
        } else {
            setFocused({
                name: true,
                last_name: true,
                email: true,
                phone: true
            })
            toast.fire({ icon: "warning", title: "Please enter valid data." });
        }
    }

    return (
        <>
            <div className="px-12 lg:px-0">
                <form className={styles.form}>
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 #gap-y-8 gap-x-8 #sm:gap-y-6"
                    >
                        {
                            formList.map(item => (
                                <div className="flex flex-col h-20" key={item.id}>
                                    <Input
                                        type={item.type}
                                        name={item.name}
                                        placeholder={item.placeholder}
                                        value={contact[item.name]}
                                        changeFunction={changeHandler}
                                        focusHandler={showError}
                                    />
                                    {
                                        errors[item.name] && focused[item.name] && (
                                            <span className="text-left mt-2 text-xs pl-1 text-red-800">{errors[item.name]}</span>
                                        )
                                    }
                                </div>
                            ))
                        }
                    </div>
                    <div
                        onClick={addContact}
                        className="bg-indigo-600 text-white p-2 rounded hover:cursor-pointer"
                    >
                        <button className="">Add Contact</button>
                    </div>
                </form>
            </div>

            <ContactList contacts={contacts} setContacts={setContacts} />
        </>
    );
};

export default Form;