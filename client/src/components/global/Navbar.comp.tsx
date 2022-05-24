import { FC } from 'react';
import { Link } from 'react-router-dom';

// Navbar function component
const Navbar: FC = () => {
    return (
        <div className='topnav'>
            <h1>Yangon Animal Shelter</h1>
            <Link to='/'>Home</Link>
            <Link to='/store'>Store</Link>
        </div>
    );
}

// Export component
export default Navbar;
