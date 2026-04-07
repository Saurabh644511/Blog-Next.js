import Link from "next/link"

export default function Home() {
    
    return <>
        <Link href="/blog">Blog</Link>
        <Link href="/products">Products</Link>
        <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
        <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
        <h1>Home</h1>
    </>
    
}