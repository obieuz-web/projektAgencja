import {useState} from "react";
import "./Comment.css"
export const Comment = ({profpicture,name,review,date,stars,currentComment,setCurrentComment})=>{
    let htmlStars=[];
    for(let i=0;i<5;i+=1){
        if(stars-1>=0){
            stars-=1;
            htmlStars[i]=<img src='../images/comments/star-color.svg' />;
        }
        else if(stars-0.5>=0){
            stars-=0.5;
            htmlStars[i]=<img src='../images/comments/half-star.png' />;
        }
        else{
            htmlStars[i]=<img src='../images/comments/star-without-color.svg' />;
        }
    }

    return(
        <div className={'comment'}>
            <div className={'comment-left-arrow'} onClick={()=>{
                if(currentComment-1<0){
                    setCurrentComment(3);
                }else {
                    setCurrentComment(currentComment - 1)
                }
            }}>
                <img src={'../images/comments/left-arrow.svg'}/>
            </div>
            <div className={'comment-wrapper'}>
                <div className={'comment-image'}><img src={''+profpicture}/></div>
                <div className={'comment-text'}>
                    <div>
                        <div className={'comment-header'}>
                            <div className={'comment-name'}>{name}
                                <div className={'comment-stars'}>
                                    {
                                        htmlStars.map((e)=>{
                                            return e;
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={'comment-review'}>{review}</div>
                        <div className={'comment-date'}>{date}</div>
                    </div>
                </div>
            </div>
            <div className={'comment-right-arrow'} onClick={()=>{
                if(currentComment+1>3){
                    setCurrentComment(0);
                }else {
                    setCurrentComment(currentComment + 1);
                }
            }}>
                <img src={'../images/comments/right-arrow.svg'}/>
            </div>
        </div>
    )
}