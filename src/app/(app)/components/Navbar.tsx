import React from 'react'

export default function Navbar() {
    return (
        <div>
            <div className="flex bg-white p-4 text-black justify-between">
                <div className="flex items-center mx-8">
                    <p>Logo</p>
                </div>
                <div className="flex items-center">
                    <a href="/about" className='mx-4 font-sans text-lg'>Why us</a>
                    <a href="/about" className='mx-4 font-sans text-lg'>Pricing</a>
                    <a href="/contact" className='mx-4 font-sans text-lg'>Contact</a>
                    <a href="/contact" className='mx-4 font-sans text-lg'>FAQs</a>
                    <a href="/contact" className='mx-4 font-sans text-lg'>Blog</a>
                </div>
                <div className="">
                    <button className='px-4 py-2 bg-[#B1ABF4] mx-8'>🛒 BUY A SIGNATURE BUNDLE</button>
                </div>
            </div>
        </div>
    )
}
