'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Logo from "../../../../public/logo.svg";
import useAuth, { getSession } from '@/hooks/useAuth';

export function Links() {
  const pathname = usePathname()

  const session = getSession();

  const { signOut } = useAuth();

  return (
    <nav className='flex items-center justify-between px-8 py-4 bg-white shadow w-full absolute top-0'>
      <ul className='flex items-center space-s-4'>
        <li><Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/"><Logo className='w-12 h-12' /></Link></li>
        <li>
          {session && <Link className={`link ${pathname === '/dashboard' ? 'active' : ''}`} href="/dashboard">
            Dashboard
          </Link>}
        </li>
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