'use client';
import Image from 'next/image';
import Link from 'next/link';
import profileDefault from '../assets/images/profile.png';
import logo from '../assets/images/suitcase.png';
import { FaGoogle } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

export const NavBar = () => {
    const { data: session } = useSession();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const [providers, setProviders] = useState(null);

    useEffect(() => {
        const setAuthProviders = async () => {
            const res = await getProviders();
            setProviders(res);
        };
        setAuthProviders();

        // Close mobile menu if the viewport size is changed
        const handleResize = () => setIsMobileMenuOpen(false);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className='bg-white-800 shadow-custom'>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                <div className='relative flex h-12 items-center justify-between'>
                    <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                        <button
                            type='button'
                            id='mobile-dropdown-button'
                            className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                            aria-controls='mobile-menu'
                            aria-expanded={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        >
                            <span className='absolute -inset-0.5'></span>
                            <span className='sr-only'>Open main menu</span>
                            <svg
                                className={`block h-6 w-6 ${isMobileMenuOpen ? 'hidden' : ''}`}
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='currentColor'
                                aria-hidden='true'
                            >
                                <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
                            </svg>
                            <svg
                                className={`h-6 w-6 ${isMobileMenuOpen ? '' : 'hidden'}`}
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='currentColor'
                                aria-hidden='true'
                            >
                                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                            </svg>
                        </button>
                    </div>
                    <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                        <Link href='/'
                            className='flex flex-shrink-0 items-center'>
                            <Image className='h-8 w-auto' src={logo} alt='TripApp' />

                        </Link>
                        <div className='hidden sm:ml-6 sm:block'>
                            <div className='flex space-x-4'>
                                <Link href='/attractions'
                                    className='hover:text-red-500 text-gray-600 px-5 py-3 text-sm font-large'>Attractions
                                </Link>
                                <Link href='/map'
                                    className='hover:text-red-500 text-gray-600 px-5 py-3 text-sm font-large'>Map
                                </Link>
                                {session && (
                                    <Link href='/plan'
                                        className='hover:text-red-500 text-gray-600 px-5 py-3 text-sm font-large'>Plan
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Side Menu */}
                    <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                        {!session ? (
                            // Logged Out Menu
                            <div className='hidden md:block md:ml-6'>
                                <div className='flex items-center'>
                                    <Link href='/signin' className='text-gray-600 hover:text-red-500 px-3 py-2 text-sm font-medium'>
                                        Login
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            // Logged In Menu
                            <div className='relative ml-3'>
                                <div>
                                    <button
                                        type='button'
                                        className='relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                                        id='user-menu-button'
                                        aria-expanded={isProfileMenuOpen}
                                        aria-haspopup='true'
                                        onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                                    >
                                        <span className='absolute -inset-1.5'></span>
                                        <span className='sr-only'>Open user menu</span>
                                        <Image className='h-8 w-8 rounded-full' src={profileDefault} alt='' />
                                    </button>
                                </div>
                                {isProfileMenuOpen && (
                                    <div className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none' role='menu' aria-orientation='vertical' aria-labelledby='user-menu-button' tabIndex='-1'>
                                        <Link href='/profile' className='block px-4 py-2 text-sm hover:text-red-500 text-gray-700' role='menuitem' tabIndex='-1' id='user-menu-item-0' onClick={() => setIsProfileMenuOpen(false)}>
                                            Your Profile
                                        </Link>
                                        <Link href='/profile/settings' className='block px-4 py-2 text-sm hover:text-red-500 text-gray-700' role='menuitem' tabIndex='-1' id='user-menu-item-1' onClick={() => setIsProfileMenuOpen(false)}>
                                            Settings
                                        </Link>
                                        <button
                                            onClick={() => {
                                                setIsProfileMenuOpen(false);
                                                signOut();
                                            }}
                                            className='block px-4 py-2 text-sm text-gray-700'
                                            role='menuitem'
                                            tabIndex='-1'
                                            id='user-menu-item-2'
                                        >
                                            Sign Out
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div id='mobile-menu'>
                    <div className='space-y-1 px-2 pb-3 pt-2'>
                        <Link className='hover:bg-red-500 hover:text-white text-gray-600 block rounded-md px-3 py-2 text-base' href='/attractions'>
                            Attractions
                        </Link>
                        <Link className='hover:bg-red-500 hover:text-white text-gray-600 block rounded-md px-3 py-2 text-base' href='/map'>
                            Map
                        </Link>
                        {session && (
                            <Link className='hover:bg-red-500 hover:text-white text-gray-600 block rounded-md px-3 py-2 text-base' href='/plan'>
                                Plan
                            </Link>
                        )}
                        <Link className='hover:bg-red-500 hover:text-white text-gray-600 block rounded-md px-3 py-2 text-base' href='/calendar'>
                            Calendar
                        </Link>
                        {!session &&
                            providers &&
                            Object.values(providers).map((provider, index) => (
                                <button
                                    key={index}
                                    onClick={() => signIn(provider.id)}
                                    className='flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
                                >
                                    <span>Login or Register</span>
                                </button>
                            ))}
                    </div>
                </div>
            )}
        </nav>
    );
};
