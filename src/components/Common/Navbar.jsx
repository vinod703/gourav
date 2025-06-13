
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

// SVG Icon for Instagram (placeholder for lucide-react Instagram)
const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Effect to handle body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        // Cleanup function to reset overflow when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    return (
        // Navbar container
        <div className="w-full">
            {/* Main Navbar content */}
            <div className="flex items-center justify-between px-4 py-3 bg-white shadow-sm">
                {/* Left - Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-green-800 p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                    aria-label="Open menu" // Accessibility improvement
                    aria-expanded={isMenuOpen}
                >
                    <MenuIcon />
                </button>

                {/* Center - Logo */}
                <div className="flex items-center">
                    <span className="text-green-800 font-bold text-lg sm:text-xl">THE</span>
                    <span className="text-green-800 font-bold text-xl sm:text-2xl mx-1">HEIGHT VEDA</span>
                </div>

                {/* Right - Social Icons */}
                <div className="flex items-center space-x-2 sm:space-x-4">
                    <a href="#" className="text-green-800 p-2 rounded-md hover:bg-gray-100" aria-label="Instagram">
                        <InstagramIcon />
                    </a>
                </div>
            </div>

            {/* Mobile Menu Overlay and Drawer */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsMenuOpen(false)}
                    role="button" 
                    tabIndex={-1}
                    aria-label="Close menu"
                ></div>
            )}
            {/* Mobile Menu Drawer */}
            <div
                className={`fixed top-0 left-0 h-full bg-white w-3/4 max-w-xs sm:max-w-sm shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
                role="dialog"
                aria-modal="true"
                inert={!isMenuOpen} 
            >
                {/* Menu Header */}
                <div className="p-4 border-b flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="text-green-800 font-bold text-lg">THE</span>
                        <span className="text-green-800 font-bold text-xl mx-1">HEIGHT VEDA</span>
                    </div>
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="text-gray-500 p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        aria-label="Close menu"
                        tabIndex={isMenuOpen ? "0" : "-1"} 
                    >
                        ✕
                    </button>
                </div>
                {/* Menu Links */}
                <nav className="p-4">
                    <ul className="space-y-4">
                        <li>
                            <Link 
                                to="/" 
                                className="block text-xl text-black hover:text-green-800 py-2 border-b"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/products" 
                                className="block text-xl text-black hover:text-green-800 py-2 border-b"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/about" 
                                className="block text-xl text-black hover:text-green-800 py-2 border-b"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/review" 
                                className="block text-xl text-black hover:text-green-800 py-2 border-b"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Reviews
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/blogs"
                                className="block text-xl text-black hover:text-green-800 py-2 border-b"
                                onClick={() => setIsMenuOpen(false)}
                                tabIndex={isMenuOpen ? "0" : "-1"} // Add tabIndex
                            >
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/contact" 
                                className="block text-xl text-black hover:text-green-800 py-2 border-b"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact-us
                            </Link>
                        </li>
                    
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
