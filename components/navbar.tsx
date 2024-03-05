import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
interface NavbarProps {

}
const MenuSVG = () => {
    return (
        <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0119629 2.80613V0.521484H20.5738V2.80613H0.0119629ZM0.0119629 8.51805H20.5738V6.2334H0.0119629V8.51805ZM0.0119629 14.2299H20.5738V11.9452H0.0119629V14.2299Z" fill="#0B182F" />
        </svg>
    )
}
export const Navbar = ({ }: NavbarProps) => {
    return (
        <div className='flex flex-row w-full h-16 bg-white justify-between items-center px-6 md:px-12'>
            <Image src='/svgs/logo.svg' alt='logo' width={100} height={100} className="" />
            <div className='hidden md:flex flex-row items-center space-x-8'>
                <ul className='flex flex-row font-semibold space-x-8 text-foreground-3'>
                    <li className='m-4'>Crypto Taxes</li>
                    <li className='m-4'>Free Tools</li>
                    <li className='m-4'>Resource Center</li>
                </ul>
                <Button variant={"primary_gradient"}>
                    Get Started
                </Button>
            </div>
            <div className="absolute right-5 md:hidden ">
                <Button variant={"ghost"} size={"icon"}>
                    <MenuSVG /> {/* TODO: Implement expand menu */}
                </Button>
            </div>
        </div>
    )
}