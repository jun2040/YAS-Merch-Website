import { FC } from 'react';
import { NavLink } from 'react-router-dom';

// Sidebar function component
const Sidebar: FC = () => {
    return (
        <nav id="sidebar">
            <ul className="list-unstyled components">
                <li>
                    <NavLink 
                        to='/store' 
                        className={navData => navData.isActive ? 'active' : ''}
                    >
                        All Products
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/store?category=clothing' 
                        className={navData => navData.isActive ? 'active' : ''}
                    >
                        Clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/store?category=accessories' 
                        className={navData => navData.isActive ? 'active' : ''}
                    >
                        Accessories
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/store?category=stationary' 
                        className={navData => navData.isActive ? 'active' : ''}
                    >
                        Stationary
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/store?category=others' 
                        className={navData => navData.isActive ? 'active' : ''}
                    >
                        Others
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

// Export component
export default Sidebar;
