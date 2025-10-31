import React from 'react'
import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";
function Footers() {
  return (
    <div>
 <Footer container className="bg-black text-white rounded-none shadow-none border-t border-gray-700">
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        {/* Copyright Section */}
        <FooterCopyright
          href="#"
          by="Blood Connect — Organized by Caritas Matha Hospital"
          year={new Date().getFullYear()}
          className="text-gray-400 hover:text-white transition-colors"
        />

        {/* Navigation Links */}
        <FooterLinkGroup className="mt-4 sm:mt-0">
          <FooterLink href="#" className="text-gray-400 hover:text-white transition-colors">
            About
          </FooterLink>
          <FooterLink href="#" className="text-gray-400 hover:text-white transition-colors">
            Privacy Policy
          </FooterLink>
          <FooterLink href="#" className="text-gray-400 hover:text-white transition-colors">
            Terms
          </FooterLink>
          <FooterLink href="#" className="text-gray-400 hover:text-white transition-colors">
            Contact
          </FooterLink>
        </FooterLinkGroup>
      </div>
    </Footer>
    </div>
  )
}

export default Footers
