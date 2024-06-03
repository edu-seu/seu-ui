'use client'

import Link from 'next/link'

export function Footer() {
    return (
        <footer className='flex items-center justify-center px-8 py-4 bg-white shadow relative w-full'>
            <div className="flex items-center space-s-2">
                <Link href={`/privacy-policy`}>{"Privacy policy"}</Link>
                <div className="rounded-full w-2 h-2 bg-[#232323]/70"></div>
                <Link href={`/terms`}>{"Terms & Condetions"}</Link>
            </div>
        </footer>
    )
}
