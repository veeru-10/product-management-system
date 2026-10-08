export default function Layout({
  children,
  headerSection,
  testimonialSection,
  footerSection,
} : {
  children : React.ReactNode,
  headerSection : React.ReactNode,
  testimonialSection : React.ReactNode,
  footerSection : React.ReactNode

}) {
  return(
    <>
      {children}
      {headerSection}
      {testimonialSection}
      {footerSection}
    </>
  )
}