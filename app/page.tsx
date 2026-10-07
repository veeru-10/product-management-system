import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col gap-3">
      <p className="text-4xl">Home page</p>
      <Link href="/login">
      <p className="border p-4 py-2 rounded-xl">Login</p></Link>
    </div>
  );
}
