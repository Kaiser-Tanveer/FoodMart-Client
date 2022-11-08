import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-32 bg-black text-white">
            <div>
                <img src="" alt="" />
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
                <a href='/' className="link link-hover">Contact</a>
                <a href='/' className="link link-hover">Jobs</a>
                <a href='/' className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a href='/' className="link link-hover">Terms of use</a>
                <a href='/' className="link link-hover">Privacy policy</a>
                <a href='/' className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;