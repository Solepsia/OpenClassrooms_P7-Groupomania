import { Button, IconButton, TextField, Card, InputAdornment, Box } from "@mui/material";
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
        <Box
        sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mr: 1,
            ml: 1,
            width: '90%'
        }}
    >
        <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1, width: '90%', minWidth: 350 }}
        >
            <Box
                component={Card}
                sx={{ flexGrow: 1, mr: 1, ml: 1, width: '100%' }}
                variant='outlined'
            >
            <TextField
                    margin="normal"
                    required
                    fullWidth
                    multiline
                    id="content"
                    label="Post content"
                    name="content"
                    autoComplete="content"
                    defaultValue={post.content}
                    autoFocus
                    value={formValues.name}
                    onChange={handleInputChange}
                    variant="standard"
                />
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
            </Box>
        </Box>
        </Box>
        )
}

export default EditPost