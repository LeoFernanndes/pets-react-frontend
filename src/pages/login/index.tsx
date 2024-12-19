import "@/app/globals.css"
import {FormEvent, useEffect, useState} from "react";
import Auth, {AuthTokensStorageData} from "@/services/auth";
import {useRouter} from "next/router";

export default function Login(){
    const router = useRouter();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const userString = localStorage.getItem("user")
        if(userString){
            router.push('/')
        }
    }, []);

    async function submitForm(event:  FormEvent<HTMLFormElement>){
        event.preventDefault()
        const loginPayload = {
            username,
            password
        }
        console.log(loginPayload)
        const response = await Auth.login(loginPayload)
        if (response.status == 200){
            const setAuthData: AuthTokensStorageData = {authToken: response.data['authToken'], refreshToken: response.data['refreshToken'], user: response.data['user']}
            Auth.setAuthStorage(setAuthData)
            console.log(response)
            router.push('/')
        }
    }

    return (
        <div className={"w-dvw h-dvh bg-gray-200 flex items-center justify-center"}>
            <div className={"h-96 w-[90%] flex flex-col justify-center text-gray-700"}>
                <div className={"h-16 flex justify-center font-semibold text-lg"}>
                    Login
                </div>
                <form className={"h-80 flex flex-col justify-around items-center"} onSubmit={(event) => submitForm(event)}>
                    <div className={"flex flex-col items-center"}>
                        <label className={"text-lg"}>Username</label>
                        <input className={"h-12 mt-1 flex text-center"} placeholder={"me@emaildomain.com"} onChange={(e) => setUsername(e.currentTarget.value)}></input>
                    </div>
                    <div className={"flex flex-col items-center"}>
                        <label className={"text-lg"}>Password</label>
                        <input className={"h-12 mt-1 flex text-center"} type={"password"} placeholder={"*******"} onChange={(e) => setPassword(e.currentTarget.value)}></input>
                    </div>
                    <div className={"h-16 w-56 flex justify-around"}>
                        <button className={"bg-gray-400 rounded-md w-24 h-12"} type={'submit'}>Login</button>
                        <button className={"bg-gray-400 rounded-md w-24 h-12"} type={'button'}>Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}