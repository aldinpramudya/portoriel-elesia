// Shadcn Components
import { Separator } from "@/components/ui/separator"

// Components
import PortfolioCard from "../PortfolioCard"

export default function Portfolio() {
    return (
        <>
            <p className="font-bold text-5xl capitalize text-[#FF4F04]">
                projects
            </p>
            <Separator className="my-4" />
            <div className="flex flex-row">
                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
            </div>
        </>
    )
}