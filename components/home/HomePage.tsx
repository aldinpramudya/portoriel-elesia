import CardProfile from "./CardProfile";
import Introduction from "./Introduction";

export default function HomePage() {
    return (
        <>
            <div className="flex flex-row gap-4">
                <CardProfile />
                <Introduction />
            </div>
        </>
    )
}