import React from 'react';
import { Link } from 'react-router-dom';
import bgfoo from '../../assets/images/bgfoo.png'

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <footer style={{backround:`url(${bgfoo})`, backroundsize:'cover'}} className="p-10 my-28 bg-accent text-neutral-content">
<div className='footer'>
<div>
    <span className="footer-title">Services</span> 
    <Link to='' className="link link-hover">Branding</Link>
    <Link to='' className="link link-hover">Design</Link>
    <Link to='' className="link link-hover">Marketing</Link>
    <Link to='' className="link link-hover">Advertisement</Link>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <Link to='' className="link link-hover">About us</Link>
    <Link to='' className="link link-hover">Contact</Link>
    <Link to='' className="link link-hover">Jobs</Link>
    <Link to='' className="link link-hover">Press kit</Link>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <Link to='' className="link link-hover">Terms of use</Link>
    <Link to='' className="link link-hover">Privacy policy</Link>
    <Link to='' className="link link-hover">Cookie policy</Link>
  </div>

</div>
<p className='text-center mt-5'>copy rights reserved {year}</p>
</footer>
    );
};

export default Footer;