import { Button, TextField, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';

function SignUp () {
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
        fetch('http://localhost:4200/api/auth/signup', {
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
                navigate('/login')
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
            label="Email"
            type="email"
            value={formValues.name}
            onChange={handleInputChange}
            required
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <AccountCircleIcon />
                    </InputAdornment>
                ),
            }}
            variant="standard"
            
        />
        <TextField
            id="passwordInput"
            name="password"
            label="Password"
            type="password"
            value={formValues.password}
            onChange={handleInputChange}
            required
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <KeyIcon />
                    </InputAdornment>
                ),
            }}
            variant="standard"
        />
        <Button type="submit">SIGN UP</Button>
    </form>
    )
}

export default SignUp