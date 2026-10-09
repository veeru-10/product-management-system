'use client'

export default function Error({
  error
} : {
  error : Error & { digest? : string }
}) {
  return(
    <div>
      <p>Something went wrong</p>
    </div>
  )
} 