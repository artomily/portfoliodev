import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/projects" className="hover:underline">
            Projects
          </Link>
          <Link to="/certificates" className="hover:underline">
            Certificates
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-sm">
          &copy; {new Date().getFullYear()}, Rakyavara Artomily
        </div>
      </div>
    </footer>
  );
}

export default Footer
