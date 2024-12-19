"use client";

import PetsDashboard from "@/components/PetsDashboard";
import TopNavbar from "@/components/TopNavbar";


export default function Home () {

    // const router = useRouter();
    // useEffect(() => {
    //     const userString = localStorage.getItem("user")
    //     if(!userString){
    //         router.push('/login')
    //     }
    // }, []);


    return (
        <main id={"root"} className={"w-dvw h-dvh bg-gray-200"}>
            <div className={"h-[5%]"}>
                <TopNavbar></TopNavbar>
            </div>
            <div className={"h-[10%] w-dvw flex justify-center items-center"}>
                <div className={"font-semibold text-2xl text-gray-700"}>Pets</div>
            </div>
            <div className={"h-[85%]"}>
                <PetsDashboard></PetsDashboard>
            </div>
            {/*<div className={"h-[5%] bg-gray-700"}>*/}
            {/*    <TopNavbar></TopNavbar>*/}
            {/*</div>*/}
        </main>
    )
}