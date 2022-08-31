import { Button, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';

function LogIn ({ setUser }) {
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
        .then (res => {
            if (res.ok) {
                return(res.json())
            }
            alert('Invalid user/password pair')
        })
        .then (user => {
            setUser(user);
            if (user) {
                navigate('/')
            }
        })
        .catch (err => {
            if (err) { console.error(err) }
        })
    }

    return (
    <form onSubmit={handleSubmit}
    direction="column">
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
        <Button type="submit">LOG IN</Button>
    </form>
    )
}

LogIn.propTypes = {
    setUser: PropTypes.func.isRequired
}

export default LogIn