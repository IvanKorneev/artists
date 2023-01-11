import {Link} from "react-router-dom";
import './Header.sass';

const Header = () => {
    return (
        <header className='header'>
            <Link to="/">Music db</Link>
        </header>
    )
}
export default Header;