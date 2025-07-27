
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black mt-10 text-gray-300">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="text-lg font-semibold text-white">MyWebsite</div>

          {/* Navigation Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/">
              <span className="hover:text-white cursor-pointer">Home</span>
            </Link>
            <Link href="/about">
              <span className="hover:text-white cursor-pointer">About</span>
            </Link>
            <Link href="/services">
              <span className="hover:text-white cursor-pointer">Services</span>
            </Link>
            <Link href="/contact">
              <span className="hover:text-white cursor-pointer">Contact</span>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.49 0-9.96 4.47-9.96 9.96 0 4.99 3.64 9.12 8.38 9.88v-7h-2.53v-2.88h2.53v-2.19c0-2.5 1.49-3.87 3.78-3.87 1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.25 0-1.63.78-1.63 1.57v1.82h2.77l-.44 2.88h-2.33v7c4.74-.76 8.38-4.89 8.38-9.88 0-5.49-4.47-9.96-9.96-9.96z" />
              </svg>
            </a>
            <a href="#" className="hover:text-white">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 001.88-2.37 8.47 8.47 0 01-2.71 1.04 4.24 4.24 0 00-7.23 3.87 12.03 12.03 0 01-8.73-4.42 4.24 4.24 0 001.31 5.65 4.19 4.19 0 01-1.92-.53v.05a4.24 4.24 0 003.4 4.15 4.3 4.3 0 01-1.92.07 4.25 4.25 0 003.97 2.95A8.49 8.49 0 012 18.58a11.97 11.97 0 006.48 1.9c7.77 0 12.03-6.44 12.03-12.03l-.01-.55A8.58 8.58 0 0022.46 6z" />
              </svg>
            </a>
            <a href="#" className="hover:text-white">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M19.6 3h-15.2c-1.32 0-2.4 1.08-2.4 2.4v13.2c0 1.32 1.08 2.4 2.4 2.4h15.2c1.32 0 2.4-1.08 2.4-2.4v-13.2c0-1.32-1.08-2.4-2.4-2.4zm-10.6 15h-3v-8h3v8zm-1.5-9.3c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm11.1 9.3h-3v-4.38c0-1.05-.02-2.38-1.45-2.38s-1.67 1.13-1.67 2.3v4.46h-3v-8h2.88v1.09h.04c.4-.75 1.37-1.54 2.82-1.54 3.02 0 3.58 1.99 3.58 4.58v3.87z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;