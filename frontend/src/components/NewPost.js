import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewPost ({token}) {

    const defaultValues = {
        content: "",
    }
    const [formValues, setFormValues] = useState(defaultValues)

    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
          ...formValues,
          [name]: value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:4200/api/post/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(formValues)
        })
        .then (value => {
            console.log(value)
            return(value.json())
        })
        .then (value => {
            if (value) {
                navigate('/');
            }
        })
        .catch (err => {
            if (err) { console.error(err) }
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                id="content"
                name="content"
                label="Contenu de la publication"
                type="text"
                value={formValues.name}
                onChange={handleInputChange}
                required
            />
            <Button type="submit">PUBLIER</Button>
        </form>
        )
}

export default NewPost