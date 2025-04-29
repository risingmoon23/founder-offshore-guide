
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-playfair font-bold text-blog-dark-blue">
            Offshore <span className="text-blog-blue">Guide</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-blog-blue transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            to="/blog"
            className="text-gray-700 hover:text-blog-blue transition-colors font-medium"
          >
            Articles
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-blog-blue transition-colors font-medium"
          >
            About
          </Link>
          <Link
            to="/resources"
            className="text-gray-700 hover:text-blog-blue transition-colors font-medium"
          >
            Resources
          </Link>
        </nav>

        {/* Subscribe Button */}
        <div className="hidden md:block">
          <Button className="bg-blog-blue hover:bg-blog-dark-blue transition-colors">
            Subscribe
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-blog-blue py-2 transition-colors font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-blog-blue py-2 transition-colors font-medium"
              onClick={toggleMenu}
            >
              Articles
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blog-blue py-2 transition-colors font-medium"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/resources"
              className="text-gray-700 hover:text-blog-blue py-2 transition-colors font-medium"
              onClick={toggleMenu}
            >
              Resources
            </Link>
            <Button className="bg-blog-blue hover:bg-blog-dark-blue w-full transition-colors">
              Subscribe
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
