import {Diffrence} from "../Diffrence/Diffrence.jsx";
import "./Diffrences.css"
export const Diffrences = ({list})=>{
    return (
        <div className={'diffrences'}>
            {list.map((diff)=>{
                return <Diffrence src={diff.src} headerText={diff.headerText} descText={diff.descText} />
            })
            }
        </div>
    )
}