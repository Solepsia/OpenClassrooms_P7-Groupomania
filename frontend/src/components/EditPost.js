import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { UserContext } from "./App";

function EditPost ({ post, setEditable }) {

    const user = useContext(UserContext);

    const defaultValues = {
        content: "",
    }
    const [formValues, setFormValues] = useState(defaultValues)

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
          ...formValues,
          [name]: value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:4200/api/post/${post._id}`, {
            method: 'PUT',
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
                setEditable({id: null, isEditable: false})
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
                defaultValue={post.content}
                value={formValues.name}
                onChange={handleInputChange}
                required
            />
            <Button type="submit">MODIFIER</Button>
        </form>
        )
}

export default EditPost