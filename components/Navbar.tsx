"use client"
import Link from "next/link"

import { RxOpenInNewWindow } from "react-icons/rx";

// Avatar
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

// Navbar Shadcn
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
    return (
        <>
            <nav className="flex flex-row gap-3 sticky w-full md:px-50 px-5 py-5">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <NavigationMenu>
                    <NavigationMenuList>
                        {/* Home */}
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/">Home</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        {/* Home End */}
                        {/* Works */}
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/works">Works</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        {/* Works End */}
                        {/* RIEL studio */}
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="" className="flex-row items-center gap-2">
                                    RIEL.studio
                                    <RxOpenInNewWindow color="black" />
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        {/* Riel Studio End */}
                    </NavigationMenuList>
                </NavigationMenu>
            </nav>
        </>
    )
}