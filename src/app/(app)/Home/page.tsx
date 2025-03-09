"use client"
import React from 'react'
import { Paytone_One } from 'next/font/google'
const paytoneOne = Paytone_One({
    subsets: ['latin'],
    weight: '400'
})
export default function HomePage() {
    return (
        <div>
            <div className="flex flex-col  items-center" id="section1">
                <div id="section1Absolute" className='absolute'>
                    <p className={` text-5xl font-sans text-center my-20 ${paytoneOne.className}`}>You deserve to spend less<br />
                        time making your grid look like<br />this.Or this.Or eventhis.</p>
                    <div id="section1sub1 " className="flex justify-center">
                        <img src='https://framerusercontent.com/images/Wja21cnGj5X8UyQooAoK3HEwg.png?scale-down-to=512' className='mx-4 w-60 h-60' />
                        <img src='https://framerusercontent.com/images/LwjvGt9JoipscS8sPv5USMUM.png?scale-down-to=512' className='mx-4 w-60 h-60' />
                        <img src='https://framerusercontent.com/images/yCaEX9L7T1cvpbviEJMDPTQ0Y0.png?scale-down-to=512' className='mx-4 w-60 h-60' />
                    </div>
                </div>

                <img src='https://framerusercontent.com/images/p3vqRm8Cv6gXyXmNF0WrP3KGuvw.png' />
            </div>
        </div>
    )
}
