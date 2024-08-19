import { SignInButton, UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server'
import Link from 'next/link';
import React from 'react'

function Header() {

    const { userId } = auth();

    const url = `${
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000"
          : `https://lang-learn-git-main-zainbux99gmailcoms-projects.vercel.app`
      }/translate`;
      

  return (
    <header className='flex items-center justify-between px-8 border-b mb-5 shadow-md'>
        <div className='flex items-center justify-center h-20 overflow-hidden pl-8'>
            <Link href="/" className='font-bold text-2xl px-2 text-cyan-700'>
                Lang <span className='text-emerald-500'>BoostAI</span>
            </Link>
            <p className='p-[3px] bg-emerald-700 text-white text-sm rounded-md'>beta</p>
        </div>
        {userId ? (
            <div>
                <UserButton />
            </div>
        ): (
            <SignInButton forceRedirectUrl={url} mode="modal" />
        )}
    </header>
  )
}

export default Header