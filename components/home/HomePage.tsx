import CardProfile from "./CardProfile";
import Introduction from "./Introduction";
import Experience from "./Experience";
import TechStack from "./TechStack";
import Portfolio from "./Portfolio";
import ContactMe from "./ContactMe";

export default function HomePage() {
    return (
        <>
            <div className="flex flex-row gap-4 justify-evenly pt-3">
                <CardProfile />
                <Introduction />
            </div>
            <div className="px-35 pt-3">
                <div className="pt-3">
                    <TechStack />
                </div>
                <div className="pt-3">
                    <Experience />
                </div>
                <div className="pt-3">
                    <Portfolio />
                </div>
                <div className="pt-3">
                    <ContactMe />
                </div>
            </div>
        </>
    )
}