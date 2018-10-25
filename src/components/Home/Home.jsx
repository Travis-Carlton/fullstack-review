import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome To Cool Couches</h1>
            <Link to='/cool-couches'><button>Cool Couches</button></Link>
        </div>
    );
};

export default Home;