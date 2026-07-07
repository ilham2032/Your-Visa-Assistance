import React from 'react'
import { Link } from 'react-router'
import logo from '../assets/YVA_richblue-removebg-preview-e1764236845826.png'

const Navbar: React.FC = () => {
    return (
        <header>
            <nav className="nav">
                <div className="nav-inner">
                    <Link to="/" className="nav-brand">
                        <img src={logo} alt="Your Visa Assistance" className="nav-logo" />
                        <span className="brand-text">Your Visa Assistance</span>
                    </Link>
                    <div className="nav-links">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/about" className="nav-link">About</Link>
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </div>
                </div>
            </nav>
            <style>{`
                .nav {
                    background: white;
                    padding: 16px 0;
                    border-bottom: 1px solid #e5e7eb;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
                    position: sticky;
                    top: 0;
                    z-index: 100;
                }
                .nav-inner {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 0 40px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .nav-brand {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    text-decoration: none;
                    font-weight: 700;
                    color: #1e3a8a;
                }
                .nav-logo {
                    height: 50px;
                    width: auto;
                }
                .brand-text {
                    font-size: 18px;
                    font-weight: 700;
                    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                .nav-links {
                    display: flex;
                    gap: 36px;
                }
                .nav-link {
                    color: #4b5563;
                    text-decoration: none;
                    font-weight: 500;
                    font-size: 15px;
                    transition: color 0.3s ease;
                    position: relative;
                }
                .nav-link:hover {
                    color: #1e3a8a;
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
                    transition: width 0.3s ease;
                }
                .nav-link:hover::after {
                    width: 100%;
                }
                @media (max-width: 768px) {
                    .nav-inner {
                        padding: 0 20px;
                    }
                    .brand-text {
                        display: none;
                    }
                    .nav-links {
                        gap: 20px;
                    }
                }
            `}</style>
        </header>
    )
}

export default Navbar