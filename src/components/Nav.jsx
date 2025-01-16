import { Link } from 'react-router';

function Nav (props) {
    return (
        <div className='nav'>
            <Link to='/'>
            <div>HOME</div>
            </Link>
            <Link to='/services'>
            <div>SERVICES</div>
            </Link>
            <Link to='/book'>
            <div>BOOK HERE</div>
            </Link>
            <div>IMANI CAROLYN BEAUTY</div>
            <Link to='/design'>
            <div>DESIGN ROOM</div>
            </Link>

        </div>
    )
}
export default Nav;