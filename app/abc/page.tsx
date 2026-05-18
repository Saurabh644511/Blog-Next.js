import Link from "next/link";

export default function AbcPage(){
    return (
        <div>
            <h1>hello from the abc page</h1>
            <Link href="/abc/hello">Go to hello</Link>
        </div>
    )
}