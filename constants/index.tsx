import { Tags } from "lucide-react";

export const techStackData = [
    {
        id: 1,
        text: `NPM + Typescript for rich and fast dev experience`
    },
    {
        id: 2,
        text: `Laravel for occasional full stack dev`
    }
]

export const experienceData = [
    {
        id: 1,
        title: "Self Employed On RIEL.studio",
        time: "May 2024 - Present",
        description: "As a freelancer, I focus on helping clients solve problems and overcome challenges by building tailored solutions that meet their needs. Through clear communication, understanding the client’s goals, discussing ideas, and collaborative approach. I ensure that the solutions I deliver are practical, effective, and designed to bring real value to their business.",
        children: [
            "Developed Genuk Waktu Village Profile Website that help to promote local village and to give the most recent news or activity on the village.",
            "Developed Airports Passengers Complaint Service Management System that help airports to accommodate passengers complaint about the services in the aiport. Through the websites, airports can accommodate 50+ complaint about services as further evaluation and aiming to give the best for the passengers."
        ]
    },
    {
        id: 2,
        title: "Web Developer Internship",
        time: "July 2024 - December 2024",
        description: "PT. Surabaya Autocomp Indonesia is a manufacturing company that operates as part of YAZAKI Corporation, a leading global Japanese manufacturer specializing in automotive components. Focuses on producing high-quality automotive wiring harnesses and related parts that support major automotive brands worldwide",
        children: [
            "Developed an application that automated Excel file processing, allowing users to upload files and instantly generate outputs with multiple file extensions option, saving hours of manual work and improving efficiency.",
            "Developed a prototype of scheduling management system with automation date, allowing supervisors to maintain project without paperwork (application-based) and improved efficiency",
            "Join on kaizen (improvement) program, developed a digital prototype that enabling to first-hand monitoring machine, reducing the need for manual on-site check",
        ]
    },
];

export const projectsData = [
    {
        id: 1,
        picture: "/project/react-weather.jpg",
        title: "Weather Update App",
        description: "Simple React with openweathermap.org API to see current weather across world",
        tags: [
            "React",
            "Typescript",
            "CSS"
        ],
        liveDemoLinks: "",
        githubLinks: "https://github.com/aldinpramudya/react-weather",
    },
    {
        id: 2,
        picture: "/project/ampi.jpg",
        title: "Lawang Fest Run by AMPI 2025",
        description: "RIEL.studio project's on landing page of an 5K run event based on city on Malang Regency as information distribution",
        tags: [
            "React",
            "Typescript",
            "TailwindCSS",
        ],
        liveDemoLinks: "https://www.ampirunningfest2025.com/",
        githubLinks: "https://github.com/aldinpramudya/lawangfestrunbyampi-project",
    },
    {
        id: 3,
        picture: "/project/sigap.jpg",
        title: "SIGAP - Airport Complaint Information System",
        description: "RIEL.studio project's on Information System where passengers can give their complaint to airport aiming to give the best services",
        tags: [
            "Laravel 12",
            "MySQL",
            "Flowbite",
            "TailwindCSS"
        ],
        liveDemoLinks: "https://sigaplapor.com/",
        githubLinks: "https://github.com/aldinpramudya/sigap-project",
    }
]

export const contactData = [
    {
        id: 1,
        logoProfilePicture: "https://avatars.githubusercontent.com/u/88958719?v=4",
        socialName: "GitHub",
        username: "aldinpramudya",
        description: "Checkout my repositories where i build a project",
        linkSocial: "https://github.com/aldinpramudya",
        bannerColor: "bg-gradient-to-r from-gray-700 to-gray-900"
    },
    {
        id: 2,
        logoProfilePicture: "/instagram-logo.jpg",
        socialName: "Instagram",
        username: "aldin.pramudya",
        description: "See how my personal life goes on or dies on (depends)",
        linkSocial: "https://www.instagram.com/aldin.pramudya/",
        bannerColor: "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500",
    },
    {
        id: 3,
        logoProfilePicture: "/linkedin-logo.png",
        socialName: "LinkedIn",
        username: "aldinarielpramudya",
        description: "Checkout my accomplishment and things i interested in",
        linkSocial: "https://www.linkedin.com/in/aldinarielpramudya/",
        bannerColor: "bg-gradient-to-r from-blue-600 to-blue-800",
    }
]