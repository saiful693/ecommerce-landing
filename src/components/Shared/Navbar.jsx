import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsHandbag } from 'react-icons/bs';

const Navbar = () => {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { title: 'Home', path: '/' },
        { title: 'Shop', path: '/shop' },
        { title: 'Deals', path: '/deals' },
        { title: "What's New", path: '/whatsNew' },
    ];

    // Function to determine active class for nav items
    const getNavItemClass = (path) =>
        router.pathname === path
            ? 'font-semibold text-primary hover:text-primary duration-200'
            : 'font-semibold text-[#646464] hover:text-primary duration-200';

    return (
        <nav className="navbar p-4 md:px-20 md:py-5">
            {/* Navbar Start */}
            <div className="navbar-start">
                {/* Mobile Menu Toggle */}
                <div
                    role="button"
                    tabIndex={0}
                    className="btn btn-ghost lg:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16"
                        />
                    </svg>
                </div>
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image src="/main_logo.svg" alt="We5ive Logo" width={50.612} height={28.571} />
                    <Link href="/" className="font-nunito text-secondary text-3xl font-bold">
                        We<span className="text-primary">5</span>ive
                    </Link>
                </div>
            </div>

            {/* Navbar Center (Links) */}
            <div className={`navbar-center ${isMobileMenuOpen ? '' : 'hidden lg:flex'} lg:space-x-4`}>
                <ul className="flex flex-col lg:flex-row gap-4">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Link href={item.path} className={getNavItemClass(item.path)}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end items-center gap-4">
                {/* Search Bar */}
                <div className="relative sm:flex hidden">
                    <label className="input p-2 w-[200px] md:w-[242px] bg-white rounded-3xl flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            className="h-5 w-5 text-black opacity-70"
                            aria-label="Search Icon"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <input
                            className="hidden md:block placeholder-black outline-none"
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search"
                            aria-label="Search"
                        />
                    </label>
                </div>




                {/* Cart */}
                <div className="indicator relative">
                    <span className="indicator-item badge badge-black absolute -top-2 -right-2">0</span>
                    <BsHandbag className="text-2xl text-black" aria-label="Cart Icon" />
                </div>

                {/* User Icon */}
                <Image src="/user.svg" alt="User Icon" width={24} height={24} aria-label="User Profile" />
            </div>
        </nav>
    );
};

export default Navbar;
