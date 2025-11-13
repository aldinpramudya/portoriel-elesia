// Shadcn Components
import { Separator } from "@/components/ui/separator"

// Components
import PortfolioCard from "@/components/PortfolioCard";

// Components 
import { projectsData } from "@/constants";

export default function Portfolio() {
    return (
        <>
            <p className="font-bold text-5xl capitalize text-[#FF4F04]">
                projects
            </p>
            <Separator className="my-4" />
            <div className="flex flex-row">
                {projectsData.map((data) => (
                    <PortfolioCard key={data.id} picture={data.picture} title={data.title} description={data.description} liveDemoLinks={data.liveDemoLinks} githubLinks={data.githubLinks} tags={data.tags}/>
                ))}
            </div>
        </>
    )
}