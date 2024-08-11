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
    <header className='flex items-center justify-between px-8 border-b mb-5'>
        <div className='flex items-center justify-center h-20 overflow-hidden'>
            <Link href="/" className='font-bold text-2xl p-10 text-cyan-700'>
                Translate <span className='text-emerald-500'>AI</span>
            </Link>
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