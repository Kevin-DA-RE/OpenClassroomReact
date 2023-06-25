import '../styles/Banner.css'
import logo from '../assets/logo.png';

function Banner({children}){
    const title = 'La maison Jungle';
    return(
    <div className="imj-banner">
    <img src={logo} alt='La maison jungle' className='lmj-logo'/>
        <h1 className='lmj-title'>{children}</h1>
    </div>
    );
}

export default Banner;