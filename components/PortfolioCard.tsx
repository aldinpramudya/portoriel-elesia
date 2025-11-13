import { ReactNode } from "react";

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
    return (
        <div className="w-full p-6 flex justify-center">
            <Card className="w-full max-w-md group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <CardContent className="p-0">
                    {/* Image Container with Overlay */}
                    <div className="relative aspect-video overflow-hidden bg-gray-100">
                        <img
                            src={picture}
                            alt="Project Screenshot"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Gradient Overlay on Hover */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                        <CardTitle className="text-xl mb-2 group-hover:text-(--main-color) transition-colors duration-300">
                            {title}
                        </CardTitle>
                        <CardDescription className="text-sm mb-4 line-clamp-2">
                            {description}
                        </CardDescription>

                        {/* Tech Stack Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {tags.map((tag, index) => (
                                <span key={index} className="text-xs bg-(--main-color) text-white px-2 py-1 rounded-full">{tag}</span>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                            <Link href={`${liveDemoLinks}`} target="_blank">
                                <Button
                                    className="flex-1 gap-2"
                                >
                                    <RxOpenInNewWindow className="w-4 h-4" />
                                    Live Demo
                                </Button>
                            </Link>
                            <Link href={`${githubLinks}`} target="_blank">
                                <Button
                                    variant="outline"
                                    className="flex-1 gap-2 hover:bg-gray-900 hover:text-white transition-colors"
                                >
                                    <FiGithub className="w-4 h-4" />
                                    GitHub
                                </Button>
                            </Link>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}