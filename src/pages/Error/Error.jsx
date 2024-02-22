import './Error.css'
import {Navbar} from "../../components/Navbar/Navbar.jsx";
import {Footer} from "../../components/Footer/Footer.jsx";
function App() {
    return (
        <>
            <Navbar/>
        <div className='error-container'>
            <div className={'error'}>
                <h1>Page not found</h1>
                <div className={'error-image'}>
                    <img src={'../images/error/smutne.gif'}/>
                </div>
            </div>
        </div>
            <Footer/>
        </>
    )
}

export default App
