import Link from "next/link"

export default function About() {
  return (
    <>
      <h1>About</h1>
      <p>
        <Link href="/">Link to "/": Go back to home page</Link>
      </p>
      <p>
        <Link href="/xyz">Link to "/xyz": Go to a page that should throw 404 error</Link>
      </p>
      <p>In normal routes, the application behaves as expected. But in the 404 routes, the 404 page refreshes itself every 3-4 seconds or so. This behavior shows both in the browser UI and when I check the network tab (all the resources are reloaded / refetched)</p>
    </>
  )
}
