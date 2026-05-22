import { Navbar } from "@/components/web/navbar";
import { ReactNode } from "react";

export default function sharedLayout({children}: {children: ReactNode}){
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}