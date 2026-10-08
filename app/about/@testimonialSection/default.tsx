import Link from "next/link";

export default function Default() {
  return(
    <div>
      <p>something went wrong..</p>
      <Link href="/about">
        <p>back to about page</p>
      </Link>
    </div>
  )
}