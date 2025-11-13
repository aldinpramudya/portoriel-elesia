// Shadcn Components
import { Separator } from "@/components/ui/separator";
// Components
import TechStackCard from "@/components/TechStackCard";
// Icons
import { RiNpmjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPnpm } from "react-icons/si";

import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";

import { SiNextdotjs } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { FaReact } from "react-icons/fa";


export default function TechStack() {
    return (
        <>
            <div>
                <p className="font-bold md:text-5xl text-3xl capitalize text-[#FF4F04]">
                    tech stack
                </p>
                <Separator className="my-4" />
                <div className="space-y-3 flex flex-col md:text-[15px] text-[12px]">
                    <TechStackCard>
                        <p className="font-bold flex flex-row items-center">
                           <FaPhp/>&nbsp;PHP+&nbsp;<SiTypescript/>&nbsp;Typescript+&nbsp;<IoLogoJavascript/>&nbsp;Javascript 
                        </p>
                    </TechStackCard>
                    <TechStackCard>
                        <p className="font-bold flex flex-row items-center">
                            <RiNpmjsFill/>&nbsp;NPM +&nbsp;<SiPnpm/>&nbsp;PNPM 
                        </p>
                    </TechStackCard>
                    <TechStackCard>
                        <p className="font-bold flex flex-row items-center">
                            <FaLaravel/>&nbsp;Laravel +&nbsp;<SiNextdotjs/>&nbsp;Next.js+&nbsp;<FaReact/>&nbsp;React
                        </p>
                    </TechStackCard>
                    <TechStackCard>
                        <p className="font-bold flex flex-row items-center">
                            <GrMysql/>&nbsp;MySQL +&nbsp;<SiMongodb/>&nbsp;MongoDB + &nbsp;<SiPostgresql/>&nbsp;PostgreSQL
                        </p>
                    </TechStackCard>
                </div>
            </div>
        </>
    )
}