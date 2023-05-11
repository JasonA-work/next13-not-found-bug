import Link from "next/link"

export default function Home() {
  return (
    <>
      <h1>HomePage</h1>
      <p>
        <Link href="/about">Link to "/about": Go to about page</Link>
      </p>
      <p>
        <Link href="/xyz">
          Link to "/xyz": Go to a page that should throw 404 error
        </Link>
      </p>
      <p>
        When I hit the link that should go to a 404 page, the UI doesn't change
        at all (even though the URL does change). The UI only changes if I
        refresh the page.
      </p>
    </>
  )
}
