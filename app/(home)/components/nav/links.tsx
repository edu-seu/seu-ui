'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Logo from "../../../../public/logo.svg";
import { useAuth } from '@/context/authContext';

export function Links() {
  const pathname = usePathname()

  const { signOut, session } = useAuth();

  return (
    <nav className='flex items-center justify-between px-8 py-4 bg-white dark:bg-white/5 shadow w-full absolute top-0'>
      <div className='flex items-center space-s-8'>
        <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/"><Logo className='w-12 h-12 dark:bg-white/10 rounded-full' /></Link>
        <ul className='hidden sm:flex items-center space-s-4 '>
          {session && <li>
            <Link className={`link ${pathname === '/dashboard' ? 'active' : ''}`} href="/dashboard">
              Dashboard
            </Link>
          </li>}
          <li>
            <Link
              className={`link ${pathname === '/about' ? 'active' : ''}`}
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={`link ${pathname === '/contact' ? 'active' : ''}`}
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {session ? <ul className='flex items-center space-s-4'>
        <li>
          <Link
            className={`link ${pathname === '/profile' ? 'active' : ''}`}
            href="/profile"
          >
            Profile
          </Link>
        </li>
        <li>
          <button type='button' onClick={() => signOut()}>
            Sign Out
          </button>
        </li>
      </ul> : <ul className='flex items-center space-s-4'>
        <li>
          <Link className={`link ${pathname === '/signin' ? 'active' : ''}`} href="/signin">
            Sign In
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/signup' ? 'active' : ''}`}
            href="/signup"
          >
            Sign Up
          </Link>
        </li>
      </ul>}
    </nav>
  )
}