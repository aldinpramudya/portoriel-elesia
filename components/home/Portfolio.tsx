// Link
import Link from "next/link";

// Shadcn Components
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

// Components
import PortfolioCard from "@/components/PortfolioCard";

// Components 
import { projectsData } from "@/constants";

// icons 
import { FaArrowRight } from "react-icons/fa";


export default function Portfolio() {
    return (
        <>
            <p className="font-bold md:text-5xl text-3xl capitalize text-[#FF4F04]">
                projects
            </p>
            <Separator className="my-4" />
            <div className="flex md:flex-row flex-col">
                {projectsData.map((data) => (
                    <PortfolioCard key={data.id} picture={data.picture} title={data.title} description={data.description} liveDemoLinks={data.liveDemoLinks} githubLinks={data.githubLinks} tags={data.tags} />
                ))}
            </div>
            {/* Button */}
            <div className="w-full flex justify-center py-8">
                <Link href="/works#projects">
                    <Button
                        size="lg"
                        className="bg-(--main-color) text-lg px-8 py-6 h-auto gap-3 group hover:gap-4 transition-all duration-300 shadow-lg hover:bg-white hover:text-(--main-color)">
                        <span className="font-semibold">Checkout Other Portfolios</span>
                        <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                </Link>
            </div>
        </>
    )
}