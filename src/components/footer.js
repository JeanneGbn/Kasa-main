import Logo from '../pictures/logo-white.png';


function Footer() {
    return (
        <footer className='footer'> 
            <img src={Logo} alt='Logo Kaza'></img>
            <p className='footer__text'>©2020 KAsa. All rights reserved</p>
        </footer>
    );
};
export default Footer;