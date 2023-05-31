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
      <br />
      <p>This page is here just to show that on normal routes, everything is perfectly fine.</p>
    </>
  )
}
