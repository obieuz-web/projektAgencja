import "./ImageSeparator.css";
export const ImageSeparator = ({image})=>{
    return (
        <div className={'przerywnik'}>
            <img src={image}/>
        </div>
    )
}