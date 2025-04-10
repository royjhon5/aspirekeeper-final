


import Link from "next/link";
import TheraLogo from '../../../public/logo/newlogo.png'
import Image from "next/image";
import Container from "../global/container";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const Navbar = async () => {

    return (
        <header className="px-4 h-20 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg z-50">
            <Container reverse>
                <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
                    <div className="flex gap-3 items-center">
                        <Link href="/" className="flex">
                            <Image alt="Theradiagnostics Logo" src={TheraLogo} height={25} width={25} priority />
                        </Link>
                        Aspire Keeper Solutions
                    </div>
                    <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <ul className="flex items-center justify-center gap-10">
                            <Link href="#" className="text-[#0d4a3a] hover:text-[#fcc811] text-sm">Home</Link>
                            <Link href="#" className="text-[#0d4a3a] hover:text-[#fcc811] text-sm">Services</Link>
                            <Link href="#" className="text-[#0d4a3a] hover:text-[#fcc811] text-sm">About Us</Link>
                            <Link href="#" className="text-[#0d4a3a] hover:text-[#fcc811] text-sm">Pricing</Link>
                            <Link href="#" className="text-[#0d4a3a] hover:text-[#fcc811] text-sm">Blog</Link>
                            <Link href="#" className="text-[#0d4a3a] hover:text-[#fcc811] text-sm">Contact</Link>

                        </ul>
                    </nav>
                </div>
            </Container>
        </header>
    )
};

export default Navbar
