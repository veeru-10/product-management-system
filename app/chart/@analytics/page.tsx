function getAnalytics() {
  throw new Error("failed to get Analytics")
}

export default function Analatics() {
  getAnalytics()
  return(
    <div>
      <p>9% of data goes done</p>
    </div>
  )
}