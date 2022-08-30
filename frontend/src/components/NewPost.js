import { Button, IconButton, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./App";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

function NewPost () {

    const user = useContext(UserContext)
    const defaultValues = {
        content: "",
    }
    const [formValues, setFormValues] = useState(defaultValues)
    const [image, setImage] = useState()

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
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify(formValues)
        })
        .then (value => {
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

    const handleAddImages = (event) => {
        setImage(event.target.files[0])
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
            <IconButton color="primary" aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" onChange={handleAddImages} />
                <AddPhotoAlternateIcon color="inherit"/>
            </IconButton>
            {image && (
                <img alt={image.name} width={"250px"} src={URL.createObjectURL(image)} />
            )}
            
            <Button type="submit">SHARE</Button>
        </form>
        )
}

export default NewPost