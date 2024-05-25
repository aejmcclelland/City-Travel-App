'use client';
import Image from 'next/image';
import Link from 'next/link';
import profileDefault from '../assets/images/profile.png';
import logo from '../assets/images/suitcase.png';
import { useState } from 'react';

export const NavBar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };
    const closeProfileMenu = () => {
        setIsProfileMenuOpen(false);
    };


    return (
        <nav className='bg-white-800 shadow-custom'>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                <div className='relative flex h-12 items-center justify-between'>
                    <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                        {/* <!-- Mobile menu button-->*/}
                        <button
                            type='button'
                            id='mobile-dropdown-button'
                            className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                            aria-controls='mobile-menu'
                            aria-expanded='false'
                            onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                            <span className='absolute -inset-0.5'></span>
                            <span className='sr-only'>Open main menu</span>
                            {/*} <!--
                            Icon when menu is closed.

                            Menu open: "hidden", Menu closed: "block"
    -->*/}
                            <svg
                                className='block h-6 w-6'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='currentColor'
                                aria-hidden='true'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                                />
                            </svg>
                            {/* <!--
                                                        Icon when menu is open.

                                                        Menu open: "block", Menu closed: "hidden"
                            -->*/}
                            <svg
                                className='hidden h-6 w-6'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='currentColor'
                                aria-hidden='true'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M6 18L18 6M6 6l12 12'
                                />
                            </svg>
                        </button>
                    </div>
                    <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                        <Link className='flex flex-shrink-0 items-center'
                            href='/'>
                            <Image className='h-8 w-auto' src={logo} alt='TripApp' />
                        </Link>
                        <div className='hidden sm:ml-6 sm:block'>
                            <div className='flex space-x-4'>
                                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->*/}
                                <Link
                                    className=' hover:text-red-500 text-gray-600 px-5 py-3 text-sm font-large'
                                    href='/attractions'>
                                    <span className='hidden md:block text-base'>
                                        Attractions
                                    </span>
                                </Link>
                                <Link
                                    className=' hover:text-red-500 text-gray-600 px-5 py-3 text-sm font-large'
                                    href='/map'>
                                    <span className='hidden md:block  text-base'>Map</span>
                                </Link>
                                <Link
                                    className=' hover:text-red-500 text-gray-600  px-5 py-3 text-sm font-large'
                                    href='/plan'>
                                    <span className='hidden md:block  text-base'>Plan</span>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                        <button
                            type='button'
                            className='relative rounded-full bg-gray-300 p-1 text-gray-400 hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-500'>
                            <span className='absolute -inset-1.5'></span>
                            <span className='sr-only'>View notifications</span>
                            <svg
                                className='h-6 w-6'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='currentColor'
                                aria-hidden='true'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
                                />
                            </svg>
                        </button>

                        {/* <!-- Profile dropdown -->*/}

                        <div className='relative ml-3'>
                            <div>
                                <button
                                    type='button'
                                    className='relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                                    id='user-menu-button'
                                    aria-expanded='false'
                                    aria-haspopup='true'
                                    onClick={() => setIsProfileMenuOpen((prev) => !prev)}>
                                    <span className='absolute -inset-1.5'></span>
                                    <span className='sr-only'>Open user menu</span>
                                    <Image
                                        className='h-8 w-8 rounded-full'
                                        src={profileDefault}
                                        alt=''
                                    />
                                </button>
                            </div>

                            {/*  <!--
                                                        Dropdown menu, show/hide based on menu state.

                                                        Entering: "transition ease-out duration-100"
                                                        From: "transform opacity-0 scale-95"
                                                        To: "transform opacity-100 scale-100"
                                                        Leaving: "transition ease-in duration-75"
                                                        From: "transform opacity-100 scale-100"
                                                        To: "transform opacity-0 scale-95"
                            -->*/}
                            {
                                isProfileMenuOpen && (
                                    <div
                                        className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                                        role='menu'
                                        aria-orientation='vertical'
                                        aria-labelledby='user-menu-button'
                                        tabindex='-1'
                                        onClick={closeProfileMenu}>
                                        {/*<!-- Active: "bg-gray-100", Not Active: "" -->*/}
                                        <a
                                            href='/profile'
                                            className='block px-4 py-2 text-sm hover:text-red-500 text-gray-700'
                                            role='menuitem'
                                            tabindex='-1'
                                            id='user-menu-item-0'>
                                            Your Profile
                                        </a>
                                        <a
                                            href='/profile/settings'
                                            className='block px-4 py-2 text-sm hover:text-red-500 text-gray-700'
                                            role='menuitem'
                                            tabindex='-1'
                                            id='user-menu-item-1'>
                                            Settings
                                        </a>
                                        <a
                                            href='#'
                                            className='block px-4 py-2 text-sm hover:text-red-500 text-gray-700'
                                            role='menuitem'
                                            tabindex='-1'
                                            id='user-menu-item-2'>
                                            Sign out
                                        </a>
                                    </div>
                                )
                            }
                        </div>

                    </div>
                </div>
            </div>

            {/* <!-- Mobile menu, show/hide based on menu state. -->*/}
            {isMobileMenuOpen && (
                <div id='mobile-menu'>
                    <div className='space-y-1 px-2 pb-3 pt-2'>
                        {/*<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->*/}
                        <Link
                            className='hover:bg-red-500 hover:text-white text-gray-600 block rounded-md px-3 py-2 text-base '
                            href='/attractions' onClick={closeMobileMenu}>

                            Attractions
                        </Link>
                        <Link
                            className='hover:bg-red-500 hover:text-white text-gray-600 block rounded-md px-3 py-2 text-base '
                            href='/map' onClick={closeMobileMenu}>
                            Map
                        </Link>
                        <Link
                            className='hover:bg-red-500 hover:text-white text-gray-600 block rounded-md px-3 py-2 text-base '
                            href='/plan' onClick={closeMobileMenu}>
                            Plan
                        </Link>
                        <Link
                            className='hover:bg-red-500 hover:text-white text-gray-600 block rounded-md px-3 py-2 text-base '
                            href='/calendar' onClick={closeMobileMenu}>
                            Calendar
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};
