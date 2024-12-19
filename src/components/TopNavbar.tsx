import {useEffect, useState} from "react";
import TopNavbarMenu from "@/components/TopNavbarMenu";


export default function TopNavbar(){
    const [user, setUser] = useState({})
    const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
        const userString = localStorage.getItem('user')
        setUser(JSON.parse(userString))
    }, []);


    if (user){
        return (
            <div className={"h-full w-full flex justify-center bg-gray-700"}>
                <div className={"w-5/6 flex justify-between items-center"}>
                    <div className={"h-full w-32 flex justify-center items-center hover:bg-gray-600"}><span className={"text-gray-200"}>Home</span></div>
                    {/*<div className={"h-full w-32 flex justify-center items-center hover:bg-gray-600"}><span className={"text-gray-200"}>{user['name']}</span></div>*/}
                    <button className={"h-full w-32 flex justify-center items-center hover:bg-gray-600"}>
                        <span className={"text-gray-200"}>{user['name']}</span>
                        {/*<TopNavbarMenu></TopNavbarMenu>*/}
                    </button>
                </div>
            </div>
        )
    } else {
        return (
            <div className={"h-12 w-full flex justify-between items-center bg-gray-700"}>
                <div>left</div>
                <div>right</div>
            </div>
        )
    }






}