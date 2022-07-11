import logo from '../../assets/img/logo.svg';
import "./style.css";
function Header() {
    return (

        <header>
            <div className="dsmeta-logo-container">
                <img src={logo}/>
                    <h1>DSMeta</h1>
                    <p>Desenvolvido por <a href="https://github.com/PinheiroR90" target="_blank" rel="noopener noreferrer">@Git-RobsonPinheiro</a> </p>
            </div>
        </header>


    )
}

export default Header;