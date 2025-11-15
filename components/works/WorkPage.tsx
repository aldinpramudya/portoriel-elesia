import RielStudioCard from "@/components/RielStudioCard"
import { Separator } from "@/components/ui/separator";
import Projects from "./Projects";
import PortfolioCard from "@/components/PortfolioCard";
import Experiences from "./Experiences";

// Components 
import { projectsData } from "@/constants";

export default function WorkPage() {
    return (
        <>
            <div className="px-5">
                <p className="font-bold md:text-5xl text-3xl capitalize text-[#FF4F04] pt-5">
                    RIEL.studio
                </p>
                <Separator className="my-4" />
                <RielStudioCard />
                <div className="pt-4">
                    <Projects />
                </div>
                <div id="projects" className="flex md:flex-row flex-col">
                    {projectsData.map((data) => (
                        <PortfolioCard key={data.id} picture={data.picture} title={data.title} description={data.description} liveDemoLinks={data.liveDemoLinks} githubLinks={data.githubLinks} tags={data.tags} />
                    ))}
                </div>
                <div id="experience">
                    <Experiences />
                </div>
            </div>
        </>
    )
}