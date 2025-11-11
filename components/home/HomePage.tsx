import CardProfile from "./CardProfile";
import Introduction from "./Introduction";
import Experience from "./Experience";
import Education from "./Education";

export default function HomePage() {
    return (
        <>
            <div className="flex flex-row gap-4 justify-evenly pt-3">
                <CardProfile />
                <Introduction />
            </div>
            <div className="pt-3">
                <Experience />
            </div>
            <div className="pt-3">
                <Education />
            </div>
        </>
    )
}