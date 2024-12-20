"use client";

import PetsDashboard from "@/components/PetsDashboard";
import {useRouter} from "next/navigation";
import {useEffect} from "react";


export default function Home () {
    const router = useRouter();

    useEffect(() => {
        const userString = localStorage.getItem("user")
        if(!userString){
            router.push('/login')
        }
    }, []);

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