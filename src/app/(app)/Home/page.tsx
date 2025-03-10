"use client"
import React from 'react'
import { Paytone_One } from 'next/font/google'
import { FileMinus, Hourglass, Smile } from 'lucide-react'
const paytoneOne = Paytone_One({
    subsets: ['latin'],
    weight: '400'
})
export default function HomePage() {
    return (
        <div className='overflow-hidden'>
            {/* //FOR PC */}
            <div className="lg:flex lg:flex-col  items-center hidden" id="section1 FOR PC">
                <div id="section1Absolute" className='absolute my-20'>
                    <p className={` lg:text-5xl text-xl font-sans text-center mt-10 mb-40 ${paytoneOne.className}`}>You deserve to spend less<br />
                        time making your grid look like<br />this.Or this.Or eventhis.</p>
                    <div id="section1sub1 " className="flex justify-center">
                        <img src='https://framerusercontent.com/images/Wja21cnGj5X8UyQooAoK3HEwg.png?scale-down-to=512' className='mx-4 w-60 h-60' />
                        <img src='https://framerusercontent.com/images/LwjvGt9JoipscS8sPv5USMUM.png?scale-down-to=512' className='mx-4 w-60 h-60' />
                        <img src='https://framerusercontent.com/images/yCaEX9L7T1cvpbviEJMDPTQ0Y0.png?scale-down-to=512' className='mx-4 w-60 h-60' />
                    </div>
                </div>
                <img src='https://framerusercontent.com/images/p3vqRm8Cv6gXyXmNF0WrP3KGuvw.png' />
            </div>

            {/* for Mobile screens */}
            <div className="flex flex-col lg:hidden items-center ">
                <div id="section1Absolute" className='absolute '>
                    <p className={` lg:text-5xl text-xl text-white font-sans text-center my-10 ${paytoneOne.className}`}>You deserve to spend less<br />
                        time making your grid look like<br />this.Or this.Or eventhis.</p>
                    <div className="flex flex-col items-center">
                        <img src='https://framerusercontent.com/images/Wja21cnGj5X8UyQooAoK3HEwg.png?scale-down-to=512' className='mx-4 w-60 h-60 aspect-3/2' />
                        <img src='https://framerusercontent.com/images/LwjvGt9JoipscS8sPv5USMUM.png?scale-down-to=512' className='mx-4 w-60 h-60 -my-20 -mr-24' />
                        <img src='https://framerusercontent.com/images/yCaEX9L7T1cvpbviEJMDPTQ0Y0.png?scale-down-to=512' className='mx-4 w-60 h-60 -my-6' />
                    </div>
                </div>
                <img src='https://framerusercontent.com/images/jmC1qCSx8rKF9N81vtOrRQzY3J4.png' />

            </div>

            <div id="section2" className="flex flex-col items-center py-20">
                <p className='font-mono text-4xl font-semibold'>Do it for the–
                </p>
                <div className="flex lg:flex-row flex-col justify-stretch lg:py-12 py-4 items-center">
                    <div className="flex lg:flex-col flex-row items-center mx-8 lg:p-8 p-4 my-4">
                        <Hourglass className='w-40 h-32 lg:mx-0 mr-4' />
                        <div className="lg:items-center flex-col flex">
                            <p className='font-mono lg:text-4xl text-2xl lg:py-4 font-bold'>QUICK TURNAROUND</p>
                            <p className='font-sans font-semibold lg:text-lg lg:py-4 text-sm '>Our clock starts the moment you buy a bundle. No more endless approval cycles. Get your content in just days.</p>
                        </div>
                    </div>
                    <div className="flex lg:flex-col flex-row lg:items-center items-center mx-8  lg:p-8 p-4  my-4">
                        <FileMinus className='w-40 h-32 lg:mx-0 mr-4' />
                        <div className="lg:items-center flex-col flex">
                            <p className='font-mono lg:text-4xl text-2xl lg:py-4 font-bold'>NO CONTRACT POLICY
                            </p>
                            <p className='font-sans font-semibold lg:text-lg lg:py-4 text-sm '>We don’t believe in long, hefty contracts that hold up your time. Everything you need to know is right here.

                            </p>
                        </div>
                    </div>
                    <div className="flex lg:flex-col flex-row lg:items-center items-center mx-8  lg:p-8 p-4 my-4">
                        <Smile className='w-40 h-32 lg:mx-0 mr-4' />
                        <div className="lg:items-center flex-col flex">
                            <p className='font-mono lg:text-4xl text-2xl lg:py-4 font-bold'>100% FLEXIBILITY

                            </p>
                            <p className='font-sans font-semibold lg:text-lg lg:py-4 text-sm '>Post it today. Or tomorrow. Swap out an image last minute on your editable file. Save your bundle for a rainy (busy) day. Do you.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
