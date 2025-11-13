"use client"

// Shadcn Components
import { Separator } from "@/components/ui/separator"

// Components
import SocialCard from "@/components/SocialCard"

// Constants
import { contactData } from "@/constants"

export default function ContactMe() {
    return (
        <>
            <div>
                <p className="font-bold text-5xl capitalize text-[#FF4F04]">
                    contact me here
                </p>
                <Separator className="my-4" />
                <div className="flex flex-row justify-center space-x-3">
                    {contactData.map((data) => (
                        <SocialCard
                            key={data.id}
                            logoProfilePicture={data.logoProfilePicture}
                            socialName={data.socialName}
                            username={data.username}
                            description={data.description}
                            linkSocial={data.linkSocial}
                            bannerColor={data.bannerColor}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}