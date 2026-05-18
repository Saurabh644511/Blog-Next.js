"use client"

import { usePathname } from "next/navigation";

export default function Notfound(){
    const pathname = usePathname();
    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4];
    return <>
        <h1>Review {reviewId} not found for product {productId}</h1>
    </>
}
