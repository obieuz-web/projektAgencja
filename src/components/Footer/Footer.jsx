import "./Footer.css"
export const Footer = ()=>{
    return (
        <div className={'footer'}>
            <div className='footer-logo'>
                <img src={'../../images/logo/logo.png'}/>
            </div>
            <div className='footer-motto'>
                Tworzymy Wspomnienia, Kreujemy Wyjątkowe Chwile – Twoje Wydarzenie, Nasza Pasja!
            </div>
            <div className='footer-contact'>
                <ul>
                    <li><img class={'footer-icon'} src={'../../images/footer/mail-icon.svg'}/><a href="mailto:janteslaunity@gmail.com">janteslaunity@gmail.com</a> </li>
                    <li><img class={'footer-icon'} src={'../../images/footer/phone-icon.svg'}/>123 456 789</li>
                </ul>

            </div>
        </div>
    );
}