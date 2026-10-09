export default function Layout({
  children,
  notifications,
  analytics,
  usages,
} : {
  children : React.ReactNode,
  notifications : React.ReactNode,
  analytics : React.ReactNode,
  usages : React.ReactNode

}) {
  return(
    <div>
      {children}
      <div className="flex justify-between px-4">
        <div className="flex flex-col gap-3">
          <p>Notifications</p>
          {notifications}
        </div>
        <div className="flex flex-col gap-3">
          <p>Analatics</p>
          {analytics}
        </div>
        <div className="flex flex-col gap-3">
          <p>Usages</p>
          {usages}
        </div>
      </div>
      
    </div>
  )
}