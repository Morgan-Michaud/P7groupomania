import logo from '../assets/images/logo/icon-left-font.svg';
import '../style/Banner.css'

function Banner() {
    const text = 'Groupomania'
    return <div className = 'groupo_title'>
        <h1>{text}</h1>
        <img src={logo} className="App-logo" alt="logo" />
    </div>
}

export default Banner