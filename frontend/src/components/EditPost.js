import { Button, IconButton, TextField, Card, InputAdornment } from "@mui/material";
import React, { useContext, useState } from "react";
import { UserContext } from "./App";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import EditIcon from '@mui/icons-material/Edit';

function EditPost ({ post, setEditable }) {

    const user = useContext(UserContext);

    const defaultValues = {
        content: post.content,
    }
    const [formValues, setFormValues] = useState(defaultValues)
    const [image, setImage] = useState()

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
          ...formValues,
          [name]: value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();

        let postCopy = {...post}
        postCopy.content = formValues.content
        formData.append('post', JSON.stringify(postCopy))
        if (image) {
            formData.append('file', image)
        }
        fetch(`http://localhost:4200/api/post/${post._id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${user.token}`
            },
            body: formData
        })
        .then (value => {
            console.log('res: ', value)
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

    const handleAddImages = (event) => {
        setImage(event.target.files[0])
    }

    return (
        <form onSubmit={handleSubmit}>`
            <Card item xs={8} className='post' variant='outlined'>
            <CardContent className='post__content'>
                <TextField
                    id="content"
                    name="content"
                    label="Contenu de la publication"
                    type="text"
                    defaultValue={post.content}
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
            </CardContent>
            { (post.imageUrl && !image) &&
                <CardMedia alt={post.imageUrl} component="img" width={"250px"} image={post.imageUrl} />
            }
            { image &&
                <CardMedia alt={image.name} component="img" width={"250px"} image={URL.createObjectURL(image)} />
            }
            <IconButton color="primary" aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" onChange={handleAddImages} />
                <AddPhotoAlternateIcon color="inherit"/>
            </IconButton>
            <Button type="submit">EDIT POST</Button>
            </Card>
        </form>
        )
}

export default EditPost