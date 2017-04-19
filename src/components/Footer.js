import React from 'react';
import { Link } from 'react-router';
import Spacer from './Spacer';

const Footer = ({children}) => {
    return (
        <footer className="footer-main ut-bg-black">
            <Spacer/>
            <div className="row row-shorter">
                <div className="small-12 columns">
                    <div className="row">
                        <div className="medium-6 columns">
                            <h3>Connect</h3>
                            <ul className="ut-unlist social-links">
                                <li><a href="https://www.linkedin.com/in/jasand-pereza/" className="icon-linkedin" target="_blank"></a></li>
                                <li><a href="http://www.github.com/jasand-pereza" className="icon-github" target="_blank"></a></li>
                                <li><a href="mailto:hello@jasandpereza.com?subject=Inquiry%20from%20jasandpereza.com" target="_blank" className="icon-envelop"></a></li>
                            </ul>
                        </div>
                        <div className="medium-6 columns">
                            <nav className="nav-footer">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/work">Work</Link></li>
                                    <li><a href="mailto:hello@jasandpereza.com?subject=Inquiry%20from%20jasandpereza.com" target="_blank">Contact</a></li>
                                </ul>
                            </nav>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
            <Spacer/>
            <div className="row row-shorter">
                <div className="small-12 columns">
                    <p className="text-saying">Jasand believes in a solid foundation. That&apos;s why this footer is so large.</p>
                </div>
            </div>
            <Spacer multiplier={3}/>
            <div className="row row-shorter">
                <div className="small-12 columns">
                    <span>&copy;2017 Jasandpereza.com</span>
                     <Spacer/>
                </div>
                
            </div>
        </footer>
    );
}

export default Footer;