import React from 'react'

const Footer = () => {

    const footerOptions = [
        { name: 'About', link: '/pages/about' },
        { name: 'Privacy Policy', link: '/pages/privacypolicy' },
        { name: 'Terms of Service', link: '/pages/termsofservice' }
    ]

  return (
    <div>
        <footer className='flex items-center justify-center h-20 bg-emerald-700 mt-20'>
            <ul className='flex gap-5'>
                {footerOptions.map((item, index) => (
                    <li key={index}>
                        <a href={item.link} className='text-white text-sm hover:underline'>
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>            
        </footer>
    </div>
  )
}

export default Footer