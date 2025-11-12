import RielStudioCard from "@/components/RielStudioCard"
import { Separator } from "@/components/ui/separator";
import Projects from "./Projects";
import PortfolioCard from "@/components/PortfolioCard";

export default function WorkPage() {
    return (
        <>
            <p className="font-bold text-5xl capitalize text-[#FF4F04]">
                RIEL.studio
            </p>
            <Separator className="my-4" />
            <RielStudioCard />
            <div className="pt-4">
                <Projects />
            </div>
            <div className="flex flex-row">
                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
            </div>

        </>
    )
}