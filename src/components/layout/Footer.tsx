

import Image from 'next/image';
import Link from 'next/link'
import { FaFacebookMessenger, FaFacebook ,FaLinkedin, FaLine   } from "react-icons/fa";
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const links = [
    {
        group: 'Quick Links',
        items: [
            {
                title: 'Home ',
                href: '#',
            },
            {
                title: 'Services ',
                href: '#',
            },
            {
                title: 'About ',
                href: '#',
            },
            {
                title: 'Pricing ',
                href: '#',
            },
            {
                title: 'Blog  ',
                href: '#',
            },
            {
                title: 'Contact ',
                href: '#',
            },
        ],
    },
    {
        group: 'Insights',
        items: [
            {
                title: 'Case Studies',
                href: '#',
            },
            {
                title: 'Thought Leadership',
                href: '#',
            },
            {
                title: 'News',
                href: '#',
            },
            {
                title: 'Resources',
                href: '#',
            },
        ],
    },
    {
        group: 'About Aspirekeeper',
        items: [
            {
                title: 'About This Site',
                href: '#',
            },
            {
                title: 'Locations',
                href: '#',
            },
        ],
    },
    {
        group: 'Reliable VA Services',
        items: [
            {
                title: ' Cagayan de Oro City, Philippines',
                href: '#',
            },
        ],
    },
]

export default function Footer() {
    return (
        <footer className="w-full bg-white pt-20">
            <div className="mx-auto">
                <div className="p-5 flex flex-wrap justify-center">
                    <div className="md:col-span-2">
                        <Link href="/" aria-label="go home" className="block size-fit">
                         
                        </Link>
                    </div>
                    <div className="grid grid-cols-4 gap-5 sm:grid-cols-4 md:col-span-3">
                        {links.map((link, index) => (
                            <div key={index} className="text-[#fcc811] space-y-2 text-xs">
                                <span className="block font-bold">{link.group}</span>
                                {link.items.map((item, index) => (
                                    <Link key={index} href={item.href} className="text-black hover:text-blue-600 block duration-150">
                                        <span>{item.title}</span>
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex justify-center items-center mb-5 mt-5'>
                    <Image alt="TheraDiagnostics Logo" src="/logo/newlogo.png" height={65} width={65} />
                </div>
                <div className="p-3 bg-[#0d4a3a] flex flex-wrap items-end justify-evenly gap-6 py-6">
                    <div className='flex flex-wrap gap-6 text-sm'>
                    <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="X/Twitter" className="text-white hover:text-primary block">
                        Privacy Policy
                    </Link>
                    <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-primary block">
                        Terms of Use
                    </Link>
                    <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-primary block">
                        Site Map
                    </Link>
                    </div>
                    <div className="text-white block text-center text-sm">
                        © {new Date().getFullYear()} Aspire Keeper Solutions 2025 | All Rights Reserved
                    </div>
                    <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
                        <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="X/Twitter" className="text-white hover:text-primary block">
                            <FaLinkedin size={20} />
                        </Link>
                        <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-primary block">
                            <FaFacebook size={20} />
                        </Link>
                        <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-primary block">
                            <FaFacebookMessenger size={20} />
                        </Link>
                        <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Threads" className="text-white hover:text-primary block">
                            <FaLine size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
