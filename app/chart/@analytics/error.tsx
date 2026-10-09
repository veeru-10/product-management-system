'use client'
export default function Error({
  error
} : {
  error : Error & { digest? : string }
}) {
  return(
    <div>
      <p className="text-red-500">Something went wrong</p>
    </div>
  )
} 