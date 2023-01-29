import React from 'react';
import { Link } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <h2 className='text-blue-300'>This is layouts</h2>
            <Link to="/">Go TO Home</Link>
        </div>
    );
};

export default Layout;