import React from 'react';
import About from '../pages/About'

import './Header.css';

function Header () {

    return (
        <section className='header'>
            <section className= 'header-top'>
                <section className='header-top__logo'>
                    <a href='/' className= 'header-logo'>SaraMarie Milligan</a>
                </section>
                <section className='header-top__navbar'>
                    <section className='header-top__navigation'>
                        
                    </section>
                    <hr className='header-top__seperator' />
                </section>

           </section>
        </section>
    )
}

export default Header;