import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./App";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import EditIcon from '@mui/icons-material/Edit';

function NewPost () {

    const user = useContext(UserContext)
    const defaultValues = {
        content: "",
    }
    const [formValues, setFormValues] = useState(defaultValues)
    const [image, setImage] = useState()

    const formData = new FormData();

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
        formData.append('content', formValues.content)
        if (image) {
            formData.append('file', image)
        }
        fetch('http://localhost:4200/api/post/', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${user.token}`
            },
            body: formData
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
                type="text"
                value={formValues.name}
                onChange={handleInputChange}
                required
                variant="standard"
                multiline
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <EditIcon />
                        </InputAdornment>
                    ),
                }}
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