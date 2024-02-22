import {Link} from "react-router-dom";
import "./Hero.css"
export const Hero = ({heroText,callToactionText,callToactionPath,image})=>{
    return(
        <div className={'hero'}>
            <div className={'hero-text'}>
                <header>{heroText}</header>
                <button className='hero-button'><Link to={callToactionPath}>{callToactionText}</Link></button>
            </div>
            <img className={'hero-image'} src={image}/>
        </div>
    )
}