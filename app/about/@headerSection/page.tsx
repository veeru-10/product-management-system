import Link from "next/link";

export default function HeaderSection() {
  return (
    <div className="h-20 flex flex-col items-center justify-center w-full bg-blue-400 mb-6">
      <Link href="/about/companyDetails">
        <p className="text-white">View company achievements</p>
      </Link>
      <p>Header section</p>
    </div>
  )
}