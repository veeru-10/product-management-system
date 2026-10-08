import Link from "next/link";

export default function about() {
  return(
    <div className="flex items-center justify-between mb-6">
      <p>Welcome to about page</p>
      <Link href="/dashboard">
      <button className="border px-4 py-2 rounded-xl cursor-pointer">
        back to home
      </button>
      </Link>
    </div>
  )
}