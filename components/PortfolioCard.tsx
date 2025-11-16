// Shadcn Components
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

// Icons
import { RxOpenInNewWindow } from "react-icons/rx";
import { FiGithub } from "react-icons/fi";

// Links
import Link from "next/link";

// Props
interface PortfolioCardProps {
    picture: string,
    title: string,
    description: string,
    tags: string[],
    liveDemoLinks: string,
    githubLinks: string,
}


export default function PortfolioCard({
    picture,
    title,
    description,
    tags,
    liveDemoLinks,
    githubLinks,
}: PortfolioCardProps) {
    const hasLiveDemo = liveDemoLinks && liveDemoLinks.trim() !== "";
    const hasGithubLink = githubLinks && githubLinks.trim() !== "";

     return (
        <div className="w-full p-6 flex justify-center">
            <Card className="w-full max-w-md group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col h-full">
                <CardContent className="p-0 flex flex-col h-full">
                    {/* Image Container with Overlay */}
                    <div className="relative aspect-video overflow-hidden bg-gray-100">
                        <img
                            src={picture}
                            alt="Project Screenshot"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Gradient Overlay on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content Section - flex-grow pushes buttons to bottom */}
                    <div className="p-6 flex flex-col flex-grow">
                        <CardTitle className="text-xl mb-2 group-hover:text-[#FF4F04] transition-colors duration-300">
                            {title}
                        </CardTitle>
                        <CardDescription className="text-sm mb-4 line-clamp-2">
                            {description}
                        </CardDescription>

                        {/* Tech Stack Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {tags.map((tag, index) => (
                                <span 
                                    key={index} 
                                    className="text-xs bg-[#FF4F04] text-white px-2 py-1 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Spacer to push buttons to bottom */}
                        <div className="flex-grow"></div>

                        {/* Action Buttons - Always at bottom */}
                        <div className="flex gap-3 mt-auto">
                            {/* Live Demo Button - Conditional */}
                            {hasLiveDemo ? (
                                <Link href={liveDemoLinks} target="_blank" className="flex-1">
                                    <Button className="w-full gap-2">
                                        <RxOpenInNewWindow className="w-4 h-4" />
                                        Live Demo
                                    </Button>
                                </Link>
                            ) : (
                                <Button 
                                    disabled 
                                    className="flex-1 gap-2 opacity-50 cursor-not-allowed"
                                >
                                    <RxOpenInNewWindow className="w-4 h-4" />
                                    Live Demo
                                </Button>
                            )}

                            {/* GitHub Button - Conditional */}
                            {hasGithubLink ? (
                                <Link href={githubLinks} target="_blank" className="flex-1">
                                    <Button
                                        variant="outline"
                                        className="w-full gap-2 hover:bg-gray-900 hover:text-white transition-colors"
                                    >
                                        <FiGithub className="w-4 h-4" />
                                        GitHub
                                    </Button>
                                </Link>
                            ) : (
                                <Button
                                    disabled
                                    variant="outline"
                                    className="flex-1 gap-2 opacity-50 cursor-not-allowed"
                                >
                                    <FiGithub className="w-4 h-4" />
                                    GitHub
                                </Button>
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}