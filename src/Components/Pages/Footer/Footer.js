import React from 'react';
import mypp from '../../../Assets/about/mypp.png'
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer p-10 lg:p-32 mx-auto bg-black text-white grid grid-cols-2 md:grid-cols-4">
            <div>
                <img src={mypp} className="h-12 w-12 mx-auto" alt="" />
                <p>&copy; by Kaiser Tanveer<br />2022</p>
                <div className='flex gap-5 mx-auto'>
                    <button href='https://web.facebook.com/Kaiser2581' target='_blank'><FaFacebook /></button>
                    <button href='https://twitter.com/KaiserTanveer' target='_blank'><FaTwitter /></button>
                    <button href='https://www.linkedin.com/in/kaiser-tanveer/' target='_blank'><FaLinkedinIn /></button>
                    <button href='https://github.com/Kaiser-Tanveer' target='_blank'><FaGithub /></button>
                </div>
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
                <Link to='/blog' className="link link-hover">Quests</Link>
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