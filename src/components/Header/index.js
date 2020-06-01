import React from 'react';

import image from '../../assets/images/picture.png';

import './index.css'

const Header = () => {
    const phrase = [
        "\"Stay hungry, stay foolish\" - Steve Jobs",
        "\"Talk is cheap. Show me the code - Linus Torvalds",
        "\"What we know is a drop... What we don't know is an ocean.\" - Isaac Newton",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10"
    ]
    const phraseLoad = () => {
        let index = Math.floor(Math.random() * 10);
        return phrase[index];
    }
    
    
    const isActivate = (param)=>{
        let url = window.location.pathname;
        let obj = {backgroundColor: '#ddd', color: '#080E33'}
        if (url === param){
            return obj;
        }
        return null;
    }
    
    return (
        <div>
        <header className='bg-dark'>
            <div className='row colorCustom' style={{width:'100%'}}>
                <div className='container text-center'>
                    <img src={image} width='150' className='rounded-circle mt-3' style={{border:'4px solid #00ba5d'}}/>
                    <h3>Welcome to my blog</h3>
                    <p><small>{phraseLoad()}</small></p>
                </div>
            </div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-3">
                <div className="container">
                    <a className="navbar-brand" href="/">Blog</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarMenu">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/" style={isActivate('/')}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about" style={isActivate('/about')}>Category</a>
                            </li>
                            <li>
                                <a className='nav-link' href='#' style={isActivate('')}>Portfolio</a>
                            </li>
                        </ul> 
                    </div>
                </div>
            </nav>
        </header>
        </div>
    );
}

export default Header;