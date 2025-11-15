// ShadCn Components
import { Card } from "@/components/ui/card"


// Icons
import { MdOutlineOpenInNew } from "react-icons/md";

export default function RielStudioCard() {
    return (
        <>
            <div>
                <Card
                    className="w-full overflow-hidden cursor-pointer group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-0">
                    <div className="relative bg-linear-to-br from-[#FF4F04] via-[#FF6B35] to-[#FF8C5A] p-8 md:p-12">
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-500" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full blur-2xl" />

                        {/* Content */}
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                            {/* Left Section */}
                            <div className="flex items-start gap-4 text-white flex-1">
                                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                                    {/* <Briefcase className="w-8 h-8" /> */}
                                </div>

                                <div className="space-y-2">
                                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                                        Kickstart Your Idea, Empower Your Journey.
                                    </h2>
                                    <p className="text-white/90 text-sm md:text-base max-w-xl text-justify">
                                        Explore <span className="font-bold">RIEL.studio,</span> <br />
                                        my very own projects on freelancing and my vision and dream where i&apos;ll help you kickstart your idea to digital journey with purpose and style.
                                    </p>
                                </div>
                            </div>

                            {/* Right Section - CTA Button */}
                            <div className="flex items-center gap-3 bg-white text-[#FF4F04] px-6 py-3 rounded-full font-semibold group-hover:gap-5 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                                <span>Visit RIEL.studio</span>
                                <MdOutlineOpenInNew className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                        </div>

                        {/* Top Right External Link Icon */}
                        <div className="absolute top-4 right-4 text-white/60 group-hover:text-white transition-colors">
                            {/* <ExternalLink className="w-5 h-5" /> */}
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}