import CardProfile from "./CardProfile";
import Introduction from "./Introduction";
import Experience from "./Experience";
import TechStack from "./TechStack";
import Portfolio from "./Portfolio";
import ContactMe from "./ContactMe";

export default function HomePage() {
    return (
        <>
            <div className="flex md:flex-row flex-col items-center pt-3">
                <CardProfile />
                <Introduction />
            </div>
            <div className="md:px-35 px-10 pt-3">
                <div className="pt-3">
                    <TechStack />
                </div>
                <div className="pt-5">
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