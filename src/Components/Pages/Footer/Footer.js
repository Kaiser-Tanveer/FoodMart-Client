import React from 'react';
import mypp from '../../../Assets/about/mypp.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-32 bg-black text-white grid grid-cols-2 md:grid-cols-4">
            <div>
                <img src={mypp} className="h-12 w-12 mx-auto" alt="" />
                <p>&copy; by Kaiser Tanveer<br />2022</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <Link className="link link-hover">Branding</Link>
                <Link className="link link-hover">Design</Link>
                <Link className="link link-hover">Marketing</Link>
                <Link to='/offer' className="link link-hover">What we offer</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link to='/about' className="link link-hover">About us</Link>
                <Link className="link link-hover">Contact</Link>
                <Link className="link link-hover">Jobs</Link>
                <Link className="link link-hover">Press kit</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link className="link link-hover">Terms of use</Link>
                <Link className="link link-hover">Privacy policy</Link>
                <Link className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;