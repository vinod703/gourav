import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-green-800 text-white mt-auto rounded-t-lg shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Height Veda</h3>
            <p className="text-xs">
              Your trusted partner in natural height growth and body development through Ayurvedic wisdom.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>

              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/terms-and-conditions" className="hover:text-green-300">Terms Conditions</a></li>
              <li><Link to="/privacyandpolicy">Privacy Policy</Link></li>
              <li><Link to="/cancellation-refund-policy">Cancellation Refund Policy</Link></li>
              <li><Link to="/disclaimer">Disclaimer</Link></li>
              <li><Link to="/shipping-policy">Shipping Policy</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex flex-col space-y-3 text-sm">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <FaInstagram className="text-base" />
                <span>Instagram</span>
              </a>
              <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <FaWhatsapp className="text-base" />
                <span>WhatsApp</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <FaYoutube className="text-base" />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-green-900 text-center py-4 shadow-lg text-sm">
        <p>&copy; {new Date().getFullYear()} Height Veda. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
