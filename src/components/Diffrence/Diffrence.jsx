export const Diffrence = ({src,headerText,descText})=>{
    return (
        <div>
            <img src={src} />
            <header>{headerText}</header>
            <p>{descText}</p>
        </div>
    )
}