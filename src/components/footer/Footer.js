import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow} from "react-icons/fa";
import './Footer.css';

function Footer () {

    return (
        <section className = 'footer'>
           <hr className= 'footer-seperator'/>
           <section className='footer-icons'>
           
            <section className='footer-github' >
              <a href ='https://github.com/Sara-Mill'><FaGithub color='black' /></a>
            </section>
            <section className='footer-linkedIn'>
              <a href ='https://www.linkedin.com/in/sara-milligan-sara-mill/'><FaLinkedin color='cornflowerblue' /></a>
            </section>
            <section className='footer-StackOverflow'>
              <a href ='https://stackoverflow.com/users/19259369/sar-bear2-0'><FaStackOverflow></FaStackOverflow></a>
            </section>
          </section>
           <hr className= 'footer-seperator'/>
        </section>
    )
}

export default Footer;