"use client"
import Link from "next/link"
import { useState } from "react"
import { RxOpenInNewWindow } from "react-icons/rx";

// Avatar
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

// Button Shadcn
import { Button } from "@/components/ui/button"

// Navbar Shadcn
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// Sheet Shadcn
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

// icons 
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/works", label: "Works" },
        { href: "/contacts", label: "Contacts" },
        { href: "", label: "RIEL.studio", icon: <RxOpenInNewWindow color="black" />, external: true }
    ]


    return (
        <>
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b shadow-sm">
            <div className="flex items-center justify-between w-full px-5 md:px-12 lg:px-20 py-4">
                {/* Logo/Avatar */}
                <Avatar className="hover:scale-110 transition-transform duration-300">
                    <Link href="https://github.com/aldinpramudya" target="_blank">
                        <AvatarImage 
                            src="https://avatars.githubusercontent.com/u/88958719?s=400&u=ef1e2e48e408e861e8fe80b1a05150defa0320f6&v=4" 
                            alt="github" 
                        />
                        <AvatarFallback>AP</AvatarFallback>
                    </Link>
                </Avatar>

                {/* Desktop Navigation */}
                <div className="hidden md:block">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {navLinks.map((link) => (
                                <NavigationMenuItem key={link.href}>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link 
                                            href={link.href}
                                            target={link.external ? "_blank" : undefined}
                                            className="flex flex-row items-center gap-2"
                                        >
                                            {link.label}
                                            {link.icon}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                {isOpen ? <IoClose className="h-6 w-6" /> : <GiHamburgerMenu className="h-6 w-6" />}
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <SheetHeader>
                                <SheetTitle className="text-left">Menu</SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col gap-4 mt-8">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        target={link.external ? "_blank" : undefined}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium"
                                    >
                                        <span>{link.label}</span>
                                        {link.icon}
                                    </Link>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
        </>
    )
}