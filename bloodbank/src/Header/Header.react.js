import React from 'react';
import {Link} from 'react-router-dom';



const Header = () => {

    return (
        <div >
            <h1>Alucard Blood Bank</h1>

            <nav>
                <ul>
                    <li>
                        <Link to='/'>Content</Link>
                        <Link to='/fetch'>Fetch Donors</Link>
                        <Link to='/add'>Add Donor</Link>
                        <Link to='/blog'>Blogs</Link>
                        <Link to='/lifecycle'>LifeCycle</Link>
                        <Link to='/search'>Search</Link>
                        <Link to='/show'>Show Donors</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );

}

export default Header;