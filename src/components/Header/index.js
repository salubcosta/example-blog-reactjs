import React from 'react';

import './index.css'

const Header = () => {
    
    const isActivate = (param)=>{
        const url = window.location.pathname;
        const obj = {backgroundColor: '#ddd', color: '#080E33'}
        if (url === param){
            return obj;
        }
        return null;
    }
    
    return (
        <header>
            <div className='headerInfo'>
                <h1>This is a Sample blog example</h1>
                <p>Built with purpose of Studies</p>
            </div>
            <nav className='container'>
                <a href="/" style={isActivate('/')}>Home</a>
                <a href="/about" style={(isActivate('/about'))}>About</a>
            </nav>
        </header>
    );
}

export default Header;