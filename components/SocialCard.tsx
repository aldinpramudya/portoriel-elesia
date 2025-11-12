// ShadCN Components
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
} from "@/components/ui/card"

interface SocialCardProps {
    logoProfilePicture: string,
    socialName: string,
    username: string,
    description: string,
    linkSocial: string,
    bannerColor?: string,
}

export default function SocialCard({
    logoProfilePicture,
    socialName,
    username,
    description,
    linkSocial,
    bannerColor = "bg-gradient-to-r from-blue-500 to-purple-600"
}:SocialCardProps){
    const handleClick = () => {
        window.open(linkSocial, '_blank', 'noopener,noreferrer')
    }

    return(
        <Card className="w-full max-w-sm group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer"
            onClick={handleClick}>
            {/* Banner */}
            <div className={`h-24 ${bannerColor} relative`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
            </div>

            <CardContent className="pt-0 pb-6 px-6 relative">
                {/* Profile Picture */}
                <div className="relative -mt-12 mb-4">
                    <div className="w-24 h-24 rounded-full border-4 border-white bg-white shadow-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                        <img
                            src={logoProfilePicture}
                            alt={`${socialName} logo`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Social Info */}
                <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                            {socialName}
                        </h3>
                    </div>
                    <p className="text-sm text-gray-500">@{username}</p>
                    <p className="text-sm text-gray-700 line-clamp-2">
                        {description}
                    </p>
                </div>

                {/* Visit Button */}
                <Button 
                    className="w-full group-hover:bg-blue-600 transition-colors"
                    onClick={(e) => {
                        e.stopPropagation()
                        handleClick()
                    }}
                >
                    Visit Profile
                </Button>
            </CardContent>
        </Card>
    )
}