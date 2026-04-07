import Link from "next/link";

export default function Products() {
  const productId = 100;
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product details page...</h1>
      <h1>
        <Link href="/products/1">Product details 1</Link>
      </h1>
      <h1>
        <Link href="/products/2">Product details 2</Link>
      </h1>
      <h1>
        <Link href="/products/3" replace>Product details 3</Link>
      </h1>
      <h1>
        <Link href={`/products/${productId}`}>Product details {productId}</Link>
      </h1>
    </>
  );
}
