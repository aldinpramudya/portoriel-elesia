"use client"

// Shadcn Components
import { Separator } from "@/components/ui/separator"

import SocialCard from "@/components/SocialCard"

export default function ContactList() {
    return (
        <>
            <div>
                <p className="font-bold text-5xl capitalize text-[#FF4F04]">
                    contact me here
                </p>
                <Separator className="my-4" />
                <SocialCard
                    logoProfilePicture="https://logo.clearbit.com/github.com"
                    socialName="GitHub"
                    username="yourhandle"
                    description="Building amazing projects and contributing to open source. Check out my repositories!"
                    linkSocial="https://github.com/yourhandle"
                    bannerColor="bg-gradient-to-r from-gray-700 to-gray-900"
                />
            </div>
        </>
    )
}