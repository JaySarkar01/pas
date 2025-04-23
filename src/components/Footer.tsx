import Image from "next/image";
import React from "react";
import Link from "next/link";
import WhatsAppInput from "./ui/whatsendbox";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 w-full border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Logo and Contact - Takes 2 columns */}
          <div className="lg:col-span-2 p-6">
            <div className="flex flex-col items-start gap-4">
              <Image src="/logo/PAS-logo.svg" alt="Logo" width={120} height={120} />
              <p className="text-base font-medium text-gray-800">Let’s talk about your project idea </p>
              <WhatsAppInput />
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-2xl mb-4 text-gray-900">Links</h3>
            <ul className="space-y-2 text-xl">
              <li><Link href="#" className="hover:text-blue-600 transition">About us</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition">Support</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition">Resources</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition">Blogs</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-2xl mb-4 text-gray-900">Legal</h3>
            <ul className="space-y-2 text-xl">
              <li><Link href="#" className="hover:text-blue-600 transition">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition">Refund Policy</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition">Cancellation Policy</Link></li>
            </ul>
          </div>

          {/* Other */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-2xl mb-4 text-gray-900">Other Platforms</h3>
            <ul className="space-y-2 text-xl">
              <li><Link href="#" className="hover:text-blue-600 transition">Dev.to</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition">Pinterest</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition">Quora</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition">Stack Overflow</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-10"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center font-extralight gap-4 text-lg text-gray-500">
          <div className="flex gap-4 flex-wrap">
            <Link href="#" className="hover:text-blue-600 transition">About us</Link>
            <Link href="#" className="hover:text-blue-600 transition">Contact us</Link>
            <Link href="https://www.parvatiandsons.in/sitemap.xml" className="hover:text-blue-600 transition">Sitemap</Link>
          </div>

          <p className="text-center">&copy; 2023 Parvati and Sons. All rights reserved.</p>

          <div className="flex gap-4">
            <Link href="#" className="hover:text-blue-600 transition"><FaFacebookF size={18} /></Link>
            <Link href="#" className="hover:text-blue-600 transition"><FaTwitter size={18} /></Link>
            <Link href="#" className="hover:text-blue-600 transition"><FaLinkedinIn size={18} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
