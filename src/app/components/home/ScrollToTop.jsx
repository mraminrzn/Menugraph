'use client'
import React from 'react'

export default function ScrollToTop() {
    const isBrowser = () => typeof window !== 'undefined';
    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <div onClick={scrollToTop} className=' border-2 p-2 rounded-full cursor-pointer border-neutral-400  dark:border-slate-600 animate-bounce fixed right-10 bottom-10'>
            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path className=' dark:text-slate-700 text-zinc-900' strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
            </svg>

        </div>
    )
}
