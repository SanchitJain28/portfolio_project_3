import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu } from 'lucide-react'
export default function Navbar() {
    return (
        <div>
            <div className="flex bg-white p-4 text-black justify-between">
                <div className="flex items-center mx-8">
                    <p>Logo</p>
                </div>
                {/* //FOR LARGE SCREENS */}

                <div className="lg:flex items-center hidden">
                    <a href="/about" className='mx-4 font-sans text-lg'>Why us</a>
                    <a href="/about" className='mx-4 font-sans text-lg'>Pricing</a>
                    <a href="/contact" className='mx-4 font-sans text-lg'>Contact</a>
                    <a href="/contact" className='mx-4 font-sans text-lg'>FAQs</a>
                    <a href="/contact" className='mx-4 font-sans text-lg'>Blog</a>
                </div>
                <div className="lg:block hidden">
                    <button className='px-4 py-2 bg-[#B1ABF4] mx-8'>🛒 BUY A SIGNATURE BUNDLE</button>
                </div>
                {/* //FOR MOBILE SCREENS */}
                <NavigationMenu className='focus:outline-none lg:hidden'>
                    <NavigationMenuList>
                        <NavigationMenuItem >
                            <NavigationMenuTrigger ><Menu /></NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink href="/about" className='mx-4 font-sans text-lg'>Why us</NavigationMenuLink>
                                <NavigationMenuLink href="/about" className='mx-4 font-sans text-lg'>Pricing</NavigationMenuLink>
                                <NavigationMenuLink href="/contact" className='mx-4 font-sans text-lg'>Contact</NavigationMenuLink>
                                <NavigationMenuLink href="/contact" className='mx-4 font-sans text-lg'>FAQs</NavigationMenuLink>
                                <NavigationMenuLink href="/contact" className='mx-4 font-sans text-lg'>Blog</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

            </div>
        </div>
    )
}
