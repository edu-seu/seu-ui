'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Logo from "@/public/logo.svg";
import useAuth from '@/hooks/useAuth';

export function Links() {
  const pathname = usePathname()

  const { signOut } = useAuth();
  
  return (
    <nav className='flex items-center justify-between px-8 py-4 bg-white shadow w-full absolute top-0'>
      <ul className='flex items-center space-s-4'>
        <div className='w-12 h-12'>
          <li>
            <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
              <Logo className='w-full h-full' />
            </Link>
          </li>
        </div>
        <li>
          <Link className={`link ${pathname === '/dashboard' ? 'active' : ''}`} href="/dashboard">
            Dashboard
          </Link>
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
      <ul className='flex items-center space-s-4'>
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
      </ul>
    </nav>
  )
}