import React from 'react';
import './Header.css';
import Card from '../Card/Card';
const Header = () => {
    return (
        <div className="header">
            <img className='img' src="https://www.thesportsdb.com/images/media/team/stadium/vvpvxw1420243385.jpg" alt=""/>
            <h1>Welcome to our football zone!</h1>
            <Card></Card>
        </div>
    );
};

export default Header;