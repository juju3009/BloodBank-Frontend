import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggle,
  Button,
} from "flowbite-react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Navbar fluid rounded className="bg-black text-white shadow-md">
        {/* main container */}
        <div className="container mx-auto grid grid-cols-3 items-center px-4 py-2">
          {/*LEFT: Brand */}
          <div className="flex items-center justify-start">
            <NavbarBrand href="#" className="p-0">
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.pixabay.com/photo/2013/11/20/18/34/heart-214014_1280.jpg"
                  alt="Blood Connect Logo"
                  className="h-16 w-16 object-cover rounded-full"
                />
                <span className="text-xl font-semibold whitespace-nowrap text-white">
                  Blood Connect
                </span>
              </div>
            </NavbarBrand>
          </div>

          
          <nav className="flex items-center justify-center">
            <div className="hidden md:flex space-x-6">
              <Link
                to="/"
                className="text-white hover:text-red-500 transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                to="/add"
                className="text-white hover:text-red-500 transition-colors duration-200"
              >
                Add
              </Link>
              <Link
                to="/edit"
                className="text-white hover:text-red-500 transition-colors duration-200"
              >
                Edit
              </Link>
              <Link
                to="#contact"
                className="text-white hover:text-red-500 transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </nav>

          {/*  RIGHT: Sign In Button  */}
          <div className="flex items-center justify-end space-x-4">
            <Link to="/login">
              <Button
                color="gray"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full px-4 py-2 transition-all duration-200"
              >
                Sign In
              </Button>
            </Link>

            {/* Toggle for mobile */}
            <div className="md:hidden">
              <NavbarToggle />
            </div>
          </div>
        </div>

        {/* ---------- MOBILE MENU ---------- */}
        <div className="md:hidden px-4 pb-3">
          <div className="flex flex-col space-y-2">
            <Link
              to="/"
              className="text-white hover:text-red-500 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/add"
              className="text-white hover:text-red-500 transition-colors duration-200"
            >
              Add
            </Link>
            <Link
              to="/edit"
              className="text-white hover:text-red-500 transition-colors duration-200"
            >
              Edit
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-red-500 transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </Navbar>
    </header>
  );
}

export default Header;
