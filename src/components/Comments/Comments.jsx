import {useState} from "react";
import {Comment} from "../Comment/Comment.jsx";

export const Comments = ({reviews})=>{
    const [currentComment,setCurrentComment]=useState(0);
    return(
        <div className={'comments'}>
            <Comment name={reviews[currentComment].name} review={reviews[currentComment].review} date={reviews[currentComment].date} stars={reviews[currentComment].stars} profpicture={reviews[currentComment].profpicture} currentComment={currentComment} setCurrentComment={setCurrentComment}/>
        </div>
    )
}