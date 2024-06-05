'use client'

import Link from 'next/link'

export function Footer() {
    return (
        <footer className='flex items-center justify-center px-8 py-4 bg-white dark:bg-white/5 shadow relative w-full'>
            <div className="space-y-4 sm:space-y-0 flex flex-col sm:flex-row items-center sm:space-s-4">
                <Link href={`/privacy-policy`}>{"Privacy policy"}</Link>
                <div className="hidden sm:block rounded-full w-2 h-2 bg-black/70 dark:bg-white/70"></div>
                <Link href={`/terms`}>{"Terms & Condetions"}</Link>
            </div>
        </footer>
    )
}
