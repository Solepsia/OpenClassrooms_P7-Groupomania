import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogIn () {
    const defaultValues = {
        email: "",
        password: ""
    }
    const [formValues, setFormValues] = useState(defaultValues)
    const navigate = useNavigate()

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
          ...formValues,
          [name]: value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:4200/api/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValues)
        })
        .then (value => {
            return(value.json())
        })
        .then (value => {
            if (value) {
                navigate('/')
            }
        })
        .catch (err => {
            if (err) { console.error(err) }
        })
    }

    return (
    <form onSubmit={handleSubmit}>
        <TextField
            id="emailInput"
            name="email"
            label="E-Mail"
            type="email"
            value={formValues.name}
            onChange={handleInputChange}
        />
        <TextField
            id="passwordInput"
            name="password"
            label="Mot de passe"
            type="password"
            value={formValues.password}
            onChange={handleInputChange}
        />
        <Button type="submit">CONNEXION</Button>
    </form>
    )
}

export default LogIn