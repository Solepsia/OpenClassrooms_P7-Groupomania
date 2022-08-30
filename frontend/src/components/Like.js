import { Button } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { useContext } from "react";
import { UserContext } from "./App";

function Like ({ post }) {
    const user = useContext(UserContext);

    const handleLike = (event) => {
        event.preventDefault();
        
    }

    const handleDislike = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <Button onClick={handleLike}><ThumbUpOffAltIcon /></Button>
            <Button onClick={handleDislike}><ThumbDownOffAltIcon /></Button>
        </>
    )
}

export default Like