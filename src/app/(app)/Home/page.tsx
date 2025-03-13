"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { motion } from "motion/react"
import React, { useState } from 'react'
import { Paytone_One } from 'next/font/google'
import { CircleCheck, FileMinus, Hourglass, Smile } from 'lucide-react'
const paytoneOne = Paytone_One({
    subsets: ['latin'],
    weight: '400'
})
interface Section3Sections {
    title: string,
    description: string
    active: boolean
    bgColor?: string
}
export default function HomePage() {
    const [sections, setSections] = useState<Section3Sections[] | []>([
        {
            title: 'Pick your bundle',
            description: 'Take a look at our bundles and see what you need right now.',
            active: true,
            bgColor: "bg-red-600"
        },
        {
            title: 'Spare no detail',
            description: 'After your purchase, our Brand 🤝 Content questionnaire is your first stop. Tell us everything 🔫.',
            active: false,
            bgColor: "bg-blue-600"
        },
        {
            title: 'Ideas → Delivery',
            description: 'Our project manager gets in touch with you to discuss ideas, submit drafts, content reviews, and final delivery.',
            active: false,
            bgColor: "bg-green-600"
        }
    ])
    const handleTabChangeSection3 = (index: number) => {
        const updatedTabs = sections.map((section, sectionindex) => {
            if (sectionindex === index) {
                return { ...section, active: true };
            }
            return { ...section, active: false };
        });
        setSections(updatedTabs)
    }
    return (
        <div className='overflow-hidden'>
            {/* //FOR PC SECTION 1*/}
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

            {/* for Mobile screens SECTION 1*/}
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

            {/* //FOR BOTH MOBILE AND LARGE SCREENS SECTION 2*/}
            <div id="section2" className="flex flex-col items-center py-20 ">
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
            {/* //FOR BOTH MOBILE AND LARGE SCREENS SECTION 3*/}

            <div className={`flex  bg-[#E44134] lg:flex-row flex-col justify-between items-center`}>

                <motion.img
                    src='/videoframe_4000.png'
                    className='lg:w-96 mx-20 w-80'
                    initial={{ x: -100 }}
                    whileInView={{ x: 20, transition: { duration: 0.5 } }}
                />

                <div className="flex flex-col py-10 basis-1/2 items-center lg:mx-16 mx-8">
                    <p className='lg:text-3xl text-2xl font-mono text-white'>Meet cute → Goodbye.
                        How do we do this thing?</p>
                    <div className={`flex flex-col `}>
                        {sections.map((section: Section3Sections, index: number) => {
                            return <motion.div
                                className={`p-4 bg-white font-mono lg:my-4 my-2  text-black ${section.active ? "border-l-14  border-[#B1ABF4] shadow-lg shadow-zinc-800" : ""}`}
                                onClick={() => {
                                    handleTabChangeSection3(index)
                                }}
                                key={index}
                                initial={{ x: 0 }}
                                animate={{ x: section.active ? 10 : 0, transition: { duration: 0.2 } }} // Move slightly right when active
                                transition={{ type: "spring", stiffness: 150 }} // Smooth animation
                            >
                                <p className='text-2xl'>{section.title}</p>
                                <p className='text font-bold'>{section.description}</p>
                            </motion.div>
                        })}
                    </div>
                </div>
            </div>

            {/* //FOR BOTH MOBILE AND LARGE SCREENS SECTION 4*/}
            <div className="flex flex-col items-center justify-center font-mono py-20">
                <p className=" lg:text-5xl text-2xl lg:font-normal font-bold text-center">We don’t gossip but some<br /> people have been saying <br />some things...</p>
                {/* //IMAGE FOR LARGE SCREENS SECTION */}
                <img src="https://framerusercontent.com/images/rQzPJpGU3lrtcFtONjcEwswnZM.png" className="lg:block hidden" />
                {/* //IMAGE FOR MOBILE SCREENS SECTION */}
                <img src="https://framerusercontent.com/images/NWim59j5oqpjgxktX8k5pqfJo0.png" className="lg:hidden" />
            </div>

            {/* //FOR BOTH MOBILE AND LARGE SCREENS SECTION 5*/}
            <div className="bg-[#1D1D1D] font-mono text-white flex flex-col justify-center items-center py-20">
                <p className="text-4xl lg:text-5xl">Down to business.<br />
                    Pick your bundle ↓</p>
                <div className="flex justify-center lg:flex-row flex-col items center py-8 lg:px-20 px-4">
                    <div className="lg:p-8 p-4 mx-4 bg-white text-black border-16 border-double border-black basis-1/3">
                        <p className="text-4xl py-8 font-semibold">The
                            Signature
                            Bundle</p>
                        <div className="h-[1px] bg-zinc-700 w-full"></div>
                        <p className="text py-2">12 posts- 5 days- 100% on brand. Long live the grid.</p>
                        <p className="text-4xl py-2">420 USD</p>

                        <div className="flex items-center justify-between my-2">
                            <CircleCheck className="mr-2  bg-black rounded-full" color="#ffffff" />
                            <p className="lg:text-lg text-sm py-2">12 feed posts (statics & carousels with captions)</p>
                        </div>
                        <div className="flex items-center my-2">
                            <CircleCheck className="mr-2 bg-black rounded-full" color="#ffffff" />
                            <p className="lg:text-lg text-sm">Delivery in 5 days</p>
                        </div>
                        <div className="flex items-center my-2">
                            <CircleCheck className="mr-2 bg-black rounded-full" color="#ffffff" />
                            <p className="lg:text-lg text-sm">Get your source files</p>
                        </div>
                        <button className="bg-[#E34135] text-white text-lg font-bold px-4 py-2 my-2 w-full">Buy this bundle</button>
                        <p className="my-4 text-zinc-500">Indian businesses: click here for INR (₹) pricing</p>
                    </div>
                    <div className="p-8 mx-4 bg-white text-black border-16 border-double border-black basis-1/3">
                        <p className="text-4xl py-8">The
                            Anything
                            Bundle</p>
                        <div className="h-[1px] bg-zinc-700 w-full"></div>
                        <p className="text py-2">Reels, posts, stories– You make up the rules.

                        </p>
                        <p className="text-4xl py-2">580 USD</p>
                        <div className="flex items-center">
                            <CircleCheck className="mr-2 bg-black rounded-full" color="#ffffff" />
                            <p className="text-lg py-2">12 content pieces (mix of reels posts & stories with captions)</p>
                        </div>
                        <div className="flex items-center">
                            <CircleCheck className="mr-2 bg-black rounded-full" color="#ffffff" />
                            <p className="text-lg py-2">Delivery in 7 days</p>
                        </div>
                        <div className="flex items-center">
                            <CircleCheck className="mr-2 bg-black rounded-full" color="#ffffff" />
                            <p className="text-lg py-2">Get your source files</p>
                        </div>
                        <button className="bg-[#E34135] text-white text-lg font-bold px-4 py-2 my-2 w-full">Buy this bundle</button>
                        <p className="my-4 text-zinc-500">Indian businesses: click here for INR (₹) pricing</p>
                    </div>
                    <div className="p-8 mx-4 bg-white text-black border-16 border-double border-black basis-1/3">
                        <p className="text-4xl py-8">The
                            Signature
                            Bundle</p>
                        <div className="h-[1px] bg-zinc-700 w-full"></div>
                        <p className="text py-2">12 posts- 5 days- 100% on brand. Long live the grid.</p>
                        <p className="text-4xl py-2">420 USD</p>
                        <div className="flex items-center">
                            <CircleCheck className="mr-2 bg-black rounded-full" color="#ffffff" />
                            <p className="text-lg py-2">12 feed posts (statics & carousels with captions)</p>
                        </div>
                        <div className="flex items-center">
                            <CircleCheck className="mr-2 bg-black rounded-full" color="#ffffff" />
                            <p className="text-lg py-2">Delivery in 5 days</p>
                        </div>
                        <div className="flex items-center">
                            <CircleCheck className="mr-2 bg-black rounded-full" color="#ffffff" />
                            <p className="text-lg py-2">Get your source files</p>
                        </div>
                        <button className="bg-[#E34135] text-white text-lg font-bold px-4 py-2 my-2 w-full">Buy this bundle</button>
                        <p className="my-4 text-zinc-500">Indian businesses: click here for INR (₹) pricing</p>
                    </div>
                </div>
            </div>
            {/* //FOR BOTH MOBILE AND LARGE SCREENS SECTION 6*/}
            <div className="bg-[#E34135] font-mono text-white  lg:px-24 lg:py-12">
                <Accordion type="single" collapsible className="px-8 py-8">
                    <AccordionItem value="item-1" className="" >
                        <AccordionTrigger className="lg:text-2xl text-lg w-40 font-bold py-4 border-white rounded-none">Who will be working on my content? </AccordionTrigger>
                        <motion.div className="" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: "tween" }}>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </motion.div>

                    </AccordionItem>
                    <AccordionItem value="item-2" className="my-4">
                        <AccordionTrigger className="lg:text-2xl text-lg py-4 font-bold border-white rounded-none 
          [data-state='open']:border-b-2">
                            Is this AI content?
                        </AccordionTrigger>

                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>

                    </AccordionItem>
                    <AccordionItem value="item-3" className="my-4">
                        <AccordionTrigger className="lg:text-2xl text-lg py-4 font-bold [data-state='open']:border-b-2 border-white rounded-none">How fast will I get my content? </AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className="my-4">
                        <AccordionTrigger className="lg:text-2xl text-lg py-4 font-bold [data-state='open']:border-b-2 border-white rounded-none">What’s your revision policy? </AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5" className="my-4">
                        <AccordionTrigger className="lg:text-2xl text-lg py-4 font-bold [data-state='open']:border-b-2 border-white rounded-none">I’m a social media manager. Can I use this for my clients?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6" className="my-4">
                        <AccordionTrigger className="lg:text-2xl text-lg py-4 font-bold [data-state='open']:border-b-2 border-white rounded-none">What kind of businesses do you work with? </AccordionTrigger>
                        <div className="">

                        </div>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7" className="my-4">
                        <AccordionTrigger className="lg:text-2xl text-lg py-4 font-bold [data-state='open']:border-b-4 border-white rounded-none">Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

            </div>
            {/* //FOR BOTH MOBILE AND LARGE SCREENS SECTION 7*/}

        </div>
    )
}
