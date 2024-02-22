import "./ImageWithText.css"
export const ImageWithText = ({text,src})=>{
    return (
        <div className={'ImageWithText-wrapper'}>
            <div className={'ImageWithText-image'}>
                <img src={src}/>
            </div>
            <div className={'ImageWithText-text'}>
                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}