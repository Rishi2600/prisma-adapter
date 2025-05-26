'use client'

import {signIn, signOut, useSession} from "next-auth/react";

export default function NavBar() {

    const session = useSession()

    console.log("session is", session)
    
    return (
        <>
        <header className="bg-gray-900 text-gray-100">
            <nav className="flex justify-between items w-full px-10 py-4">
                <div className="text-5xl text-gray-200 font-sans font-bold ">Moozer</div>
                <div className="font-sans font-semibold">
                     {session.status==="authenticated" ? (
                        <button className="hover:cursor-pointer" onClick={() => {signOut()}}>signOut</button>
                    ):(
                        <button className="hover:cursor-pointer" onClick={() => {signIn()}}>signIn</button>
                    )}
                </div>
            </nav>
        </header>
        </>
    )
}