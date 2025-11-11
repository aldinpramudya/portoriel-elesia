import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { RxOpenInNewWindow } from "react-icons/rx";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";


export default function PortfolioCard() {
    return (
        <div className="w-full p-6 flex justify-center">
            <Card className="w-full max-w-md group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <CardContent className="p-0">
                    {/* Image Container with Overlay */}
                    <div className="relative aspect-video overflow-hidden bg-gray-100">
                        <img
                            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80"
                            alt="Project Screenshot"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Gradient Overlay on Hover */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                        <CardTitle className="text-xl mb-2 group-hover:text-blue-600 transition-colors duration-300">
                            E-Commerce Platform
                        </CardTitle>
                        <CardDescription className="text-sm mb-4 line-clamp-2">
                            A full-stack e-commerce solution with real-time inventory management,
                            secure payments, and responsive design for seamless shopping experience.
                        </CardDescription>

                        {/* Tech Stack Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">React</span>
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Node.js</span>
                            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">MongoDB</span>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                            <Link href="" target="_blank">
                                <Button
                                    className="flex-1 gap-2"
                                >
                                    <RxOpenInNewWindow className="w-4 h-4" />
                                    Live Demo
                                </Button>
                            </Link>
                            <Link href="" target="_blank">
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