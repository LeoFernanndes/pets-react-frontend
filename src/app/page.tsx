"use client";

import PetsDashboard from "@/components/PetsDashboard";


export default function Home () {
    return (
        <main id={"root"}>
            <div className={"h-dvh w-dvw bg-gray-200 flex justify-center items-center"}>
                <div className={"flex justify-center items-center h-full w-full"}>
                    <PetsDashboard></PetsDashboard>
                </div>
            </div>
        </main>
    )
}