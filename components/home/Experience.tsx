// Link
import Link from "next/link";

// Shadcn Components
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

// Components
import ActivityCard from "@/components/ActivityCard";

// Constants
import { experienceData } from "@/constants";

// icons 
import { FaArrowRight } from "react-icons/fa";

export default function Experience() {
    return (
        <>
            <div>
                <p className="font-bold md:text-5xl text-3xl capitalize text-[#FF4F04]">
                    experiences & works related
                </p>
                <Separator className="my-4" />
                {/* Contents */}
                <div className="space-y-3">
                    {experienceData.slice(0, 2).map((data) => (
                        <ActivityCard key={data.id} title={data.title} time={data.time} description={data.description} place={data.place}>
                            <ul className="list-disc list-inside pt-3">
                                {data.children.map((item, index) => (
                                    <li key={index} className="leading-relaxed">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </ActivityCard>
                    ))}
                </div>
                <div className="w-full flex justify-center py-8">
                    <Link href="/works#experience">
                        <Button
                            size="lg"
                            className="bg-(--main-color) text-lg px-8 py-6 h-auto gap-3 group hover:gap-4 transition-all duration-300 shadow-lg hover:bg-white hover:text-(--main-color)">
                            <span className="font-semibold">See My Experiences</span>
                            <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    )
}